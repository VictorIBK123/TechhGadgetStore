import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity,Image, Dimensions } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

const SecondView = ({navigation}: {navigation: NavigationProp<any>}) => {
    const {height, width} = Dimensions.get('screen');
    return (
        <ImageBackground  source={require('../../assets/latestgadgets.png')} style={{ backgroundColor:'white', flex:1}} imageStyle={{ flex:1,height ,width, resizeMode:'cover',opacity:1 }}   >
            <LinearGradient
        // Button Linear Gradient
        colors={['#00000000', '#000000F7']}
        style={{flex:1, justifyContent:'flex-end'}}
        >
            <TouchableOpacity onPress={()=>navigation.navigate('create_account')} style={{position:'absolute', backgroundColor:'#00000026', paddingHorizontal:30, paddingVertical:10, borderRadius:30, top:30, right:20}} >
                <Text style={{color:'white', fontSize:14}}>Skip</Text>
            </TouchableOpacity>
        <View style={{paddingHorizontal:15, marginBottom:60, justifyContent:'space-between', flex:2/5}} >
            <View style={{flexDirection:'row', width:56, alignItems:'center', justifyContent:'space-between', alignSelf:'center', }}>
                <View style={{backgroundColor:'#ffffff', width:8,height:8, borderRadius:8 }}>

                </View>
                <View style={{backgroundColor:'#ffffff', width:32,height:8, borderRadius:8 }}>

                </View>
                <View style={{backgroundColor:'#ffffff', width:8,height:8, borderRadius:8 }}>

                </View>
            </View>
            <Text style={{textAlign:'center', color:'#ffffff', fontWeight:'700', fontSize:24, lineHeight:36}}>Explore Latest Gadgets</Text>
            <Text style={{textAlign:'center', color:'#ffffff', fontWeight:'500', fontSize:14, lineHeight:22}}>Stay Ahead with Cutting-Edge Tech from smartwatches to gaming gear, explore the newest innovations at unbeatable prices</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('third')} style={{alignSelf:'center',alignItems:'center', justifyContent:'center', backgroundColor:'#ffffff', width:20, height:20, padding:30, borderRadius:50}}>
                <Image source={require('../../assets/next.png')} style={{height:14, width:20, }} />
            </TouchableOpacity>
        </View>
        </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
});

export default SecondView;