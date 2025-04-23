import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Feather, Fontisto } from '@expo/vector-icons';
import { NativeStackScreenProps } from 'react-native-screens/lib/typescript/native-stack/types';


type PersonalInformationProps = NativeStackScreenProps<any>;

const PersonalInformation: React.FC<PersonalInformationProps> = ({ navigation }) => {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text style={styles.label}>First name  *</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} placeholder='First name' />
            </View>
            <Text style={styles.label}>Last name  *</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} placeholder='Last name' />
            </View>
            <Text style={styles.label} >Date of Birth</Text>
            <View style={styles.inputView}>
                <AntDesign style={styles.iconB4} name="calendar" size={18} color="black" />
                <TextInput style={styles.textInput} placeholder='dd/mm/yyyy' />
            </View>
            <Text style={styles.label}>Country of Residence</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} placeholder='Select' />
                <AntDesign style={styles.eyeIcon} name="caretdown" size={15} color="#6B777F" />
            </View>
            <Text style={styles.label}>State/Territory</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} placeholder='State/Territory' />
                <AntDesign style={styles.eyeIcon} name="caretdown" size={15} color="#6B777F" />
            </View>
            <Text style={styles.label}>Address line 1</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} placeholder='Address line 1' />
            </View>
            <Text style={styles.label}>Address line 2</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} placeholder='Address line 2' />
            </View>
            <Text style={styles.label}>City</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} placeholder='Address' />
            </View>
            <Text style={styles.label}>Postal/Zip Code</Text>
            <View style={styles.inputView}>
                <TextInput style={styles.textInput} placeholder='Postal' />
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("main")} style={styles.signUpContainer}>
                <Text style={styles.signUp}>Continue</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
        paddingHorizontal:20
    },
    label:{
        alignItems:'center',
        fontSize:14,
        marginBottom:10,
        // fontWeight:'100'
    },
    inputView:{
        flexDirection:'row',
        backgroundColor:'white',
        elevation:3,
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:10,
        marginBottom:12
    },
    iconB4:{
        alignSelf:'center',
        marginRight:10,

    },
    textInput:{
        alignSelf:'center',
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
        marginVertical:20,
    },
    signUp:{
        textAlign:'center',
        color:'white',
        fontSize:16,
        fontWeight:'bold'
    },
    alreadyHaveAccount:{
        fontSize:16,
        fontWeight:'500',
        letterSpacing:0,
        textAlign:'center',
        marginTop:10
    }
});

export default PersonalInformation;