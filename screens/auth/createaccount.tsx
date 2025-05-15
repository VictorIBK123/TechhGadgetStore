import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import { AntDesign, Feather, Fontisto } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';

import { NavigationProp } from '@react-navigation/native';
import { auth } from '../../firebase-config';
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import { StatusBar } from 'expo-status-bar';

const CreateAccount = ({navigation}: {navigation: NavigationProp<any>}) => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = React.useState(false);
    const [signedUp, setSignedUp] = React.useState(false);
    const [emailUsed, setEmailUsed] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const authenticate =(values: { email: any; username?: string; password: any; confirmPassword?: string; })=>{
        setLoading(true)
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
        sendEmailVerification(auth.currentUser? auth.currentUser : userCredential.user)
        .then(() => {
            setEmailUsed(false)
          setSignedUp(true)
          setLoading(false)
          const interval= setInterval(async()=>{
            await auth.currentUser?.reload()
            if (auth.currentUser!=null ){
              if (auth.currentUser.emailVerified){
                updateProfile(auth.currentUser, {
                  displayName: `${values.username}`,
                }).then(() => {
                  // Profile updated!
                  // ...
                }).catch((error) => {
                  alert(error.message)
                });
                navigation.navigate('personal_info', {email: values.email, username: values.username})
                clearInterval(interval)
              } 
            }
          },3000)
          
        });
          })
      .catch((error)=>{
        if (error.message == 'Firebase: Error (auth/network-request-failed).'){
            setLoading(false)
            setEmailUsed(false)
          alert('Network request failed, ensure you have a good internet connection')
        }
        else if(error.message=='Firebase: Error (auth/email-already-in-use).'){
            setLoading(false)
          setEmailUsed(true)
        }
        else{
            setLoading(false)
            setEmailUsed(false)
          alert(error.message)
        }
      })
    }
    return (
        <Formik
        initialValues={{
            'email':'',
            'username':'',
            'password':'',
            'confirmPassword':'',
        }}
        onSubmit={(values)=>{authenticate(values)}}
        validationSchema={Yup.object().shape({
            email: Yup.string().email('Invalid email').required('Please, enter your email'),
            username: Yup.string().min(3, 'Username is too short, min 3 chars').max(15, 'Username is too long, max 15 chars').required('Please, enter your username'),
            password: Yup.string().min(6, 'Password is too short, min 6 chars').max(15, 'Password is too long, max 15 chars').required('Please, enter your password').matches(/^\S*$/, 'Password must not contain spaces'),
            confirmPassword: Yup.string().oneOf([Yup.ref('password'), undefined], 'Passwords must match').required('Please, confirm your password'),
        })} //validation
        >{({handleSubmit, handleBlur, handleChange, values, errors, touched, isValid})=>(
        // <ScrollView>
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#2F1528'  />
            <Text style={styles.header}>Create your account</Text>
            <Text  style={styles.label}>E-mail</Text>
            <View style={styles.inputView}>
                <Fontisto style={styles.iconB4} name="email" size={18} color="black" />
                <TextInput onBlur={handleBlur('email')} onChangeText={handleChange('email')} value={values.email} style={styles.textInput} placeholder='Email' />
            </View>
            <View style={{ marginLeft:10, marginBottom:12}}>
                {touched.email && errors.email && <Text style={{color:'#dd3333'}}>{errors.email}</Text>}
                {touched.email&& !errors.email && <Text style={{ color:'green'}}>Email rules passed</Text>}
            </View>
            <Text style={styles.label}>Username</Text>
            <View style={styles.inputView}>
                <TextInput onBlur={handleBlur('username')} onChangeText={handleChange('username')} value={values.username} style={styles.textInput} placeholder='Enter unique username' />
            </View>
            <View style={{ marginLeft:10, marginBottom:12}}>
                {touched.username && errors.username && <Text style={{color:'#dd3333'}}>{errors.username}</Text>}
                {touched.username && !errors.username && <Text style={{ color:'green'}}>Username rules passed</Text>}
            </View>
            <Text style={styles.label} >Create Password</Text>
            <View style={styles.inputView}>
                <AntDesign style={styles.iconB4} name="lock" size={18} color="black" />
                <TextInput style={styles.textInput} onBlur={handleBlur('password')} secureTextEntry={!passwordVisible} onChangeText={handleChange('password')} value={values.password} placeholder='password' />
                <Pressable onPress={()=>setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
                    {passwordVisible? <Feather  name="eye" size={15} color="black" />: <Feather onPress={()=>setPasswordVisible(!passwordVisible)} name="eye-off" size={15} color="black" />}
                </Pressable>
            </View>
            <View style={{ marginLeft:10, marginBottom:12}}>
                {touched.password && errors.password && <Text style={{color:'#dd3333'}}>{errors.password}</Text>}
                {touched.password && !errors.password && <Text style={{ color:'green'}}>Password rules passed</Text>}
            </View>
            <View>
                
            </View>
            <Text style={styles.label}>Confirm Password</Text>
            <View style={styles.inputView}>
                <AntDesign style={styles.iconB4} name="lock" size={18} color="black" />
                <TextInput onBlur={handleBlur('confirmPassword')} secureTextEntry={!confirmPasswordVisible} onChangeText={handleChange('confirmPassword')} value={values.confirmPassword} style={styles.textInput} placeholder='Confirm Password' />
                <Pressable onPress={()=>setConfirmPasswordVisible(!confirmPasswordVisible)} style={styles.eyeIcon}>
                    {confirmPasswordVisible? <Feather  name="eye" size={15} color="black" />: <Feather onPress={()=>setConfirmPasswordVisible(!confirmPasswordVisible)} name="eye-off" size={15} color="black" />}
                </Pressable>
            </View>
            <View style={{ marginLeft:10, marginBottom:12}}>
                {touched.confirmPassword && errors.confirmPassword && <Text style={{color:'#dd3333'}}>{errors.confirmPassword}</Text>}
                { touched.confirmPassword && !errors.confirmPassword && <Text style={{ color:'green'}}>Passwords match</Text>}
            </View>
            {signedUp && <Text style={{marginBottom:20,fontSize:13, color:'#666666'}}>Email verification link has been sent to {values.email}, you will be redirected automatically after verification.</Text>}
            {emailUsed && <Text style={{marginBottom:20, color:'red', fontSize:16}}>Email already exists</Text>}
            <TouchableOpacity disabled={!isValid} onPress={()=>handleSubmit()} style={styles.signUpContainer}>
                <Text style={styles.signUp}>Sign up</Text>
                <ActivityIndicator size='large' color="white" animating={loading} style={{position:'absolute', alignSelf:'center', top:'30%'}} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                <Text style={styles.alreadyHaveAccount}>Already have an account? <Text style={{color:'#2563EB'}}>Login</Text></Text>
            </TouchableOpacity>
        </View>
        // </ScrollView>
        )}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
        paddingHorizontal:20,
        justifyContent:'center',
        alignItems:'center'
    },
    label:{
        alignItems:'center',
        fontSize:14,
        marginBottom:10,
        alignSelf:'flex-start'
    },
    inputView:{
        flexDirection:'row',
        backgroundColor:'white',
        elevation:10,
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        width:'100%'
    },
    iconB4:{
        alignSelf:'center',
        marginRight:10,

    },
    textInput:{
        alignSelf:'center',
        width:'100%'
    },
    eyeIcon:{
        position:'absolute',
        right:10,
        alignSelf:'center',
        marginLeft:50
    },
    header:{
        fontSize:20,
        marginBottom:20
    },
    signUpContainer:{
        backgroundColor:'#2F1528',
        paddingVertical:15,
        borderRadius:20,
        marginTop:20,
        width:'100%'
    },
    signUp:{
        textAlign:'center',
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    alreadyHaveAccount:{
        fontSize:16,
        fontWeight:'bold',
        letterSpacing:0,
        textAlign:'center',
        marginTop:10,
    }
});

export default CreateAccount;