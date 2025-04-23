import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';

// interface PayButtonProps {
//     onPress: () => void;
//     title: string;
// }

const PayButton: React.FC = () => {
    return (
        <View style={{backgroundColor:'#ffffff', paddingHorizontal:10, paddingVertical:50 }}>
            <TouchableOpacity style={{backgroundColor:'#2F1528', justifyContent:'center', alignItems:'center', paddingVertical:15, borderRadius:30}}>
                <Text style={{color:'#ffffff'}}>Make payment</Text>
            </TouchableOpacity>
        </View>
        );
};


export default PayButton;