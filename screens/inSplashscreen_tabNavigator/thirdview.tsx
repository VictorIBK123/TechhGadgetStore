import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, Dimensions, ImageBackground, TouchableOpacity,Image } from 'react-native';

interface ThirdViewProps{
    navigation: StackNavigationProp<any>
}
const ThirdView:React.FC<ThirdViewProps> = ({navigation}) => {
    const {height, width} = Dimensions.get('screen');
    return (
        <ImageBackground  source={require('../../assets/boy-looking-up.png')} style={{ backgroundColor:'white', flex:1}} imageStyle={{ flex:1,height ,width, resizeMode:'cover',opacity:1 }}   >
            <LinearGradient
        // Button Linear Gradient
        colors={['#00000000', '#000000F7']}
        style={{flex:1, justifyContent:'flex-end'}}
        >
                <View style={{paddingHorizontal:15, marginBottom:60, justifyContent:'space-between', flex:2/5}} >
                    <View style={{flexDirection:'row', width:56, alignItems:'center', justifyContent:'space-between', alignSelf:'center', }}>
                        <View style={{backgroundColor:'#ffffff', width:8,height:8, borderRadius:8 }}>
        
                        </View>
                        <View style={{backgroundColor:'#ffffff', width:8,height:8, borderRadius:8 }}>
        
                        </View>
                        <View style={{backgroundColor:'#ffffff', width:32,height:8, borderRadius:8 }}>
        
                        </View>
                    </View>
                    <Text style={{textAlign:'center', color:'#ffffff', fontWeight:'700', fontSize:24, lineHeight:36}}>Get AI-powered product recommendations</Text>
                    <Text style={{textAlign:'center', color:'#ffffff', fontWeight:'500', fontSize:14, lineHeight:22}}>Our AI-powered suggestions help you choose the best tech based on your needs and preferences</Text>
                    <TouchableOpacity onPress={()=>navigation.replace('create_account')} style={{alignItems:'center',flexDirection:'row',paddingVertical:13, justifyContent:'center', backgroundColor:'#ffffff',   borderRadius:50}}>
                        <Text style={{color:'#000000', marginRight:10, fontSize:16, textAlign:'center'}}>Get started</Text>
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

export default ThirdView;