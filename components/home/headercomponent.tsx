import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const HeaderComponent = () => {
    return (
        <LinearGradient
                colors={['#572C4B', '#2F1528']}
                style={{paddingHorizontal:13, borderBottomLeftRadius:30, borderBottomRightRadius:30}}
            >
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:50, marginBottom:45}}>
                    <View>
                        <View style={{flexDirection:'row', marginBottom:15}}>
                            <Image source={require('../../assets/location.png')} style={{height:16, width:12, marginRight:10}} />
                            <Text style={{fontSize:12, color:'white'}}>Location</Text>
                        </View>
                        <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={{fontSize:12, color:'white', marginRight:10}}>Talents Apartments, UI</Text>
                            <Image source={require('../../assets/drop.png')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#FFFFFF1A', padding:10, borderRadius:50}}>
                        <Image  source={require('../../assets/notification.png')} />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:20, }}>
                    <View style={{flexDirection:'row', alignItems:'center',backgroundColor:'white', borderRadius:30, paddingHorizontal:20, paddingVertical:10 }}>
                        <Image style={{marginRight:10}} source={require('../../assets/search.png')} />
                        <TextInput style={{width:'70%'}} placeholderTextColor={'#8E9295'} placeholder='Search gadget' />
                    </View>
                    <TouchableOpacity style={{backgroundColor:'#FFFFFF1A', padding:10, borderRadius:50}}>
                        <Image source={require('../../assets/filter.png')} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
    );
};


export default HeaderComponent;