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
        <View style={{flexDirection:'row', paddingBottom:10,paddingHorizontal:15, backgroundColor:'white', paddingTop:20, alignItems:'center', flex:1/10}}>
            <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginRight:30}}>
                <Ionicons name="arrow-back-outline" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:18, fontWeight:'600'}}>Cart</Text>
            </TouchableOpacity>
        </View>
    );
};


export default Header;