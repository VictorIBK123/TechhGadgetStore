import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { StackNavigationProp } from '@react-navigation/stack';
import { NavigationProp } from '@react-navigation/native';

type HeaderProps = {
    navigation: NavigationProp<any>;
};

const Header = ({ navigation }: HeaderProps) => {
    return (
        <View style={{flexDirection:'row',elevation:10, paddingBottom:10,paddingHorizontal:15, backgroundColor:'white', paddingTop:20, alignItems:'center', height:80, position:'absolute', zIndex:10, width:'100%',}}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginRight:30}}>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:18, fontWeight:'600'}}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Header;