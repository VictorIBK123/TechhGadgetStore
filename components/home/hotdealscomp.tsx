import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Image } from 'react-native';

import { NavigationProp } from '@react-navigation/native';

const HotDealsComp = ({navigation}: {navigation: NavigationProp<any>}) => {
    const data = [{name:'Iphone 16 pro', source: require('../../assets/iphone-16-pro.png'), key:1, discountedPrice: (1400050).toLocaleString(), originalPrice:(1600050).toLocaleString()},
        {name:'Oraimo Pods', source: require('../../assets/oraimo-earpods.png'), key:2, discountedPrice: (18000).toLocaleString(), originalPrice:(22500).toLocaleString()},
        {name:'PS5 Portable', source: require('../../assets/ps5portable.png'), key:3, discountedPrice:(480000).toLocaleString(), originalPrice: (550000).toLocaleString() },
        {name:'Samsung Tablet', source: require('../../assets/samsung-tablet.png'), key:4, discountedPrice:(480000).toLocaleString(), originalPrice:(550000).toLocaleString()},
]
    return (
        <View style={{marginTop:20, marginHorizontal:15, backgroundColor:'white', paddingVertical:10, paddingHorizontal:10, borderRadius:12}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View  >
                    <Text style={{fontWeight:'500', fontSize:16}}>Hot Deals</Text>
                </View>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>   
                    <Text style={{fontSize:12, fontWeight:400}}>More deals</Text>
                    <Image source={require('../../assets/right.png')} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                numColumns={4}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('product_details')} style={{flex:1/4, marginRight:3}}>
                            <View style={{height:80, justifyContent:'center', borderWidth:1, borderColor:'#F7F7F7', alignSelf:'center'}}>
                                <Image  source={item.source} />
                            </View>
                            <Text style={{textAlign:'center', marginVertical:15, fontSize:12, fontWeight:'400', paddingHorizontal:3}}>{item.name}</Text>
                            <Text adjustsFontSizeToFit={true} style={{textAlign:'center', fontSize:14, fontWeight:'700'}}>₦{item.discountedPrice}</Text>
                            <Text style={{fontWeight:'500', fontSize:12, textAlign:'center', textDecorationLine:'line-through', textDecorationStyle:'solid', color:'#8E9295'}}>₦{item.originalPrice}</Text>
                        </TouchableOpacity>
                    )
                }}
                />
        </View>
    );
};



export default HotDealsComp;