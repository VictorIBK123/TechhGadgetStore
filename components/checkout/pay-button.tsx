import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const PayButton: React.FC = () => {
    return (
        <View style={{backgroundColor:'#ffffff', paddingHorizontal:10, paddingVertical:10, flex:1/10 }}>
            <TouchableOpacity style={{backgroundColor:'#2F1528', justifyContent:'center', alignItems:'center', paddingVertical:15, borderRadius:30}}>
                <Text style={{color:'#ffffff'}}>Make payment</Text>
            </TouchableOpacity>
        </View>
        );
};


export default PayButton;