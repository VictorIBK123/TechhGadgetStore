import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { NavigationProp } from '@react-navigation/native';

type HeaderProps = {
    navigation: NavigationProp<any>; // Replace 'any' with the specific type if known, e.g., NavigationProp
};

const Header: React.FC<HeaderProps> = ({navigation}) => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', paddingBottom:10,paddingHorizontal:15, backgroundColor:'white', paddingTop:40}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign name="shoppingcart" size={24} color="black"  />
            </TouchableOpacity>
        </View>
    );
};



export default Header;