import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface HeaderComponentProps {
    onTextInputClicked: () => void;
    defaultTextInputConRef: React.RefObject<TouchableOpacity>;
    headerComponentRef: React.RefObject<View>;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({headerComponentRef, onTextInputClicked, defaultTextInputConRef}) => {
    return (
        <View ref={headerComponentRef}>
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
                    <TouchableOpacity ref={defaultTextInputConRef} onPress={onTextInputClicked} style={{flexDirection:'row', alignItems:'center',backgroundColor:'white', borderRadius:30, paddingHorizontal:20, paddingVertical:10 }}>
                        <Image style={{marginRight:10}} source={require('../../assets/search.png')} />
                        <Text style={{width:'70%', color:'#8E9295'}}>Search gadget</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor:'#FFFFFF1A', padding:10, borderRadius:50}}>
                        <Image source={require('../../assets/filter.png')} />
                    </TouchableOpacity>
                </View>
            </LinearGradient>
            </View>
    );
};


export default HeaderComponent;