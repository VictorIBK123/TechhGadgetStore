import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

const FirstView = ({navigation}: {navigation: NavigationProp<any>}) => {
    const {height, width} = Dimensions.get('screen');
    return (
    <ImageBackground  source={require('../../assets/man-vr.png')} style={{ backgroundColor:'white', flex:1}} imageStyle={{ flex:1,height ,width, resizeMode:'cover',opacity:1 }}   >
        <LinearGradient
        // Button Linear Gradient
        colors={['#00000000', '#000000F2']}
        style={{flex:1, justifyContent:'flex-end'}}
        >
            <TouchableOpacity onPress={()=>navigation.navigate('main')} style={{position:'absolute', backgroundColor:'#FFFFFF1A', paddingHorizontal:30, paddingVertical:10, borderRadius:30, top:30, right:20}} >
                <Text style={{color:'white', fontSize:14}}>Skip</Text>
            </TouchableOpacity>
            <View style={{paddingHorizontal:15, marginBottom:60, justifyContent:'space-between', flex:2/5}} >
                <View style={{flexDirection:'row', width:56, alignItems:'center', justifyContent:'space-between', alignSelf:'center', }}>
                    <View style={{backgroundColor:'#ffffff', width:32,height:8, borderRadius:8 }}>

                    </View>
                    <View style={{backgroundColor:'#ffffff', width:8,height:8, borderRadius:8 }}>

                    </View>
                    <View style={{backgroundColor:'#ffffff', width:8,height:8, borderRadius:8 }}>

                    </View>
                </View>
                <Text style={{textAlign:'center', color:'#ffffff', fontWeight:'700', fontSize:24, lineHeight:36}}>Tech Shopping Made Easy & Secure</Text>
                <Text style={{textAlign:'center', color:'#ffffff', fontWeight:'500', fontSize:14, lineHeight:22}}>Shop with confidence, secure payments, easy returns, and trusted brands</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('second')} style={{alignSelf:'center',alignItems:'center', justifyContent:'center', backgroundColor:'#ffffff', width:20, height:20, padding:30, borderRadius:50}}>
                    <Image source={require('../../assets/next.png')} style={{height:14, width:20, }} />
                </TouchableOpacity>
            </View>
        </LinearGradient>
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    
});

export default FirstView;