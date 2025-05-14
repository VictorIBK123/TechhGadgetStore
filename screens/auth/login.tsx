import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator, Pressable } from 'react-native';
import { AntDesign, Feather, Fontisto } from '@expo/vector-icons';
import * as Yup from 'yup';
import { NavigationProp } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase-config';
import { Formik } from 'formik';
import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { UserDetails } from '../../contexts/myContext';
import { StackNavigationProp } from '@react-navigation/stack';

const Login = ({navigation}: {navigation: StackNavigationProp<any>}) => {
    const [passwordVisible, setPasswordVisible] = useState(false)
    const emailContext= useContext(UserDetails)
    const loginSchema= Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Please, enter your email'),
        password: Yup.string().min(6, 'Password is too short, min 6 chars').max(15, 'Password is too long, max 15 chars').required('Please, enter your password').matches(/^\S*$/, 'Password must not contain spaces')
      })
    const [signing, setSigning] = useState(false)
  const authenticate =(values: { email: string; password: string })=>{
    setSigning(true)
    // logging in with email and password
    signInWithEmailAndPassword(auth, values.email, values.password)
    .then(async(userCredential) => {
      await auth.currentUser?.reload()
      if (auth.currentUser?.emailVerified){
        setSigning(false)
        emailContext?.setUserEmail(values.email)
        navigation.replace('main')
      }
  })
  .catch((error)=>{
    setSigning(false)
    Alert.alert(error.code, error.message)
  })
}
    return (
        <Formik
      initialValues={{
        'email':'',
        'password':'',
      }}
      onSubmit={(values)=>{authenticate(values)}}
      validationSchema={loginSchema} //validation
    >
      {({handleSubmit, handleBlur, handleChange, values, errors, touched, isValid})=>(
        <View style={styles.container}>
            <StatusBar style='light' backgroundColor='#572C4B' />
            <Text style={styles.header}>Login to your account</Text>
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.inputView}>
                <Fontisto style={styles.iconB4} name="email" size={18} color="black" />
                <TextInput onBlur={handleBlur('email')} onChangeText={handleChange('email')} value={values.email} style={styles.textInput} placeholder='Email' />
            </View>
            <View style={{ marginLeft:10, marginBottom:12}}>
                    {touched.email && errors.email && <Text style={{color:'#dd3333'}}>{errors.email}</Text>}
                    {touched.email && !errors.email && <Text style={{ color:'green'}}>Email rules passed</Text>}
            </View>
            <Text style={styles.label} >Password</Text>
            <View style={styles.inputView}>
                <AntDesign style={styles.iconB4} name="lock" size={18} color="black" />
                <TextInput style={styles.textInput} onBlur={handleBlur('password')} onChangeText={handleChange('password')} value={values.password} secureTextEntry={!passwordVisible} placeholder='password' />
                <Pressable style={styles.eyeIcon} onPress={()=>setPasswordVisible(!passwordVisible)}>
                    {passwordVisible? <Feather name="eye" size={15} color="black" />:<Feather  name="eye-off" size={15} color="black" />}
                </Pressable>
            </View>
            <View style={{ marginLeft:10, marginBottom:12}}>
                {touched.password && errors.password && <Text style={{color:'#dd3333'}}>{errors.password}</Text>}
                {touched.password && !errors.password && <Text style={{ color:'green'}}>Password rules passed</Text>}
            </View>
            <TouchableOpacity style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                
            </TouchableOpacity>
            <TouchableOpacity disabled={signing||!isValid} onPress={()=>handleSubmit()} style={styles.signUpContainer}>
                <Text style={styles.signUp}>Log In</Text>
                <ActivityIndicator style={{position:'absolute', alignSelf:'center', top:'30%'}} size="large" color="#0000ff" animating={signing} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('create_account')}>
                <Text style={styles.alreadyHaveAccount}>Don’t have an account?  <Text style={{color:'#2563EB'}}>Sign up</Text></Text>
            </TouchableOpacity>
        </View>)}
        </Formik>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    header:{
        fontSize:20,
        marginBottom:20
    },
    label:{
        alignItems:'center',
        fontSize:14,
        marginBottom:10,
        width:'85%',
    },
    inputView:{
        flexDirection:'row',
        backgroundColor:'white',
        elevation:10,
        paddingVertical:10,
        paddingHorizontal:10,
        borderRadius:10,
        width:'85%',
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
    signUpContainer:{
        backgroundColor:'#2F1528',
        paddingVertical:15,
        borderRadius:20,
        marginTop:20,
        width:'85%'
    },
    signUp:{
        textAlign:'center',
        color:'white',
        fontSize:16,
    },
    alreadyHaveAccount:{
        fontSize:16,
        fontWeight:'500',
        letterSpacing:0,
        textAlign:'center',
        marginTop:10
    },
    forgotPasswordContainer:{
        alignSelf:'flex-end',
        marginRight:20,
    },
    forgotPassword:{
        color:'#2563EB'
    }
});

export default Login;