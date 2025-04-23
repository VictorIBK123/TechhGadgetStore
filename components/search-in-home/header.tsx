import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HeaderProps {
    onArrowBackClicked: () => void;
    textInputRef: React.RefObject<TextInput>;
}

const Header: React.FC<HeaderProps> = ({onArrowBackClicked, textInputRef,}) => {
    
    return (
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingTop:20, paddingBottom:5, paddingHorizontal:13, backgroundColor:'#ffffff',flex:3/20,}}>
            <TouchableOpacity onPress={onArrowBackClicked} style={{}}>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <View style={{backgroundColor:'#FBFBFB',paddingVertical:5, borderRadius:30, paddingHorizontal:30,width:'70%', }}>
                <TextInput ref={textInputRef} style={{width:'100%', alignSelf:'center'}} />
            </View>
            <TouchableOpacity style={{justifyContent:'flex-end', backgroundColor:'#FBFBFB', borderRadius:50,padding:17 }}>
                <Image  style={{alignSelf:'center'}} source={require('../../assets/filter-dark.png')} />
            </TouchableOpacity>
        </View>
    );
};



export default Header;