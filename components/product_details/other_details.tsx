import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

type OtherDetailsProps = {
   
};

const OtherDetails: React.FC<OtherDetailsProps> = ({ }) => {
    return (
        <View style={{backgroundColor:'white',paddingHorizontal:15, paddingTop:20}} >
            <Text style={{fontSize:15,fontWeight:'500', }}>Iphone 13 Pro (256 GB)</Text>
            <View style={{flexDirection:'row', marginTop:4, alignItems:'center'}}>
                <Text style={{marginRight:10, fontSize:19}}>₦1,200,050</Text>
                <Text style={{color:'#515151', fontSize:15, textDecorationLine:'line-through', textDecorationStyle:'solid'}}>₦1,300,060</Text>
            </View>
            <Text style={{marginTop:20, fontSize:15,fontWeight:'500', marginBottom:8}}>Product description</Text>
            <Text  style={{fontWeight:'500', fontSize:13.5, color:'#515151', marginBottom:10}}>512 GB, Fast charging, Wireless charging, Titanium body, 3,561 mAh battery, A18 Bionic chip, 48MP main camera, IOS 18, Face ID  </Text>
            <Text><Text style={{fontSize:13}}>Color:</Text> <Text style={{color: '#515151', fontWeight:'500', fontSize:13}}>Lilac</Text></Text>
        </View>
    );
};


export default OtherDetails;