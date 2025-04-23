import React from 'react';
import { View, Text, StyleSheet, FlatList ,Image, TouchableHighlight, TouchableOpacity} from 'react-native';

import { NavigationProp } from '@react-navigation/native';

const OrderSummary = ({navigation}: {navigation: NavigationProp<any>}) => {
    return (
        <View style={{flex:9/10}}>
            <Text style={{paddingVertical:10, paddingLeft:10, fontWeight:'500', fontSize:14,flex:0.7/10 }}>Order summary</Text>
            <FlatList
                style={{backgroundColor:'white', flex:4.5/10}}
                data={[
                    {productName: 'JBL Headset',  price: 120000,img_url: require('../../assets/headset.png'), key:1},
                    {productName: 'Iphone 16 Pro', price: 1400000, img_url: require('../../assets/iphone-16-pro-small.png'), key:2},
                    {productName: 'PS5 Portable', price: 480000, img_url: require('../../assets/ps5small.png'), key:3},
                    ]}
                renderItem={({ item }) => (
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical:20, alignItems:'center', paddingHorizontal:15, borderBottomWidth:2, borderColor:'#F7F7F7'}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={{marginRight:10, borderColor:'#F7F7F7', borderWidth:1, padding:3, borderRadius:5}}>
                                <Image source={item.img_url} />
                            </View>
                            <View>
                                <Text style={{marginBottom:5, fontSize:14, fontWeight:'500'}}>{item.productName}</Text>
                                <Text style={{fontSize:12, color:'#8E9295'}}>N {item.price.toLocaleString()}</Text>
                            </View>
                        </View>
                        <View>
                            <View style={{flexDirection:'row', alignItems:'center', }}>
                                <TouchableHighlight underlayColor={'green'} style={{paddingHorizontal:17, borderRightWidth:0.5, paddingVertical:7, borderTopLeftRadius:20, borderBottomLeftRadius:20, backgroundColor:'#E0E0E0'}}>
                                    <Text>-</Text>
                                </TouchableHighlight>
                                <View style={{paddingHorizontal:17, paddingVertical:7,  borderRightWidth:0.5,backgroundColor:'#E0E0E0'}}>
                                    <Text >{1}</Text>
                                </View>
                                <TouchableHighlight underlayColor={'green'} style={{paddingHorizontal:17, paddingVertical:7,  borderLeftWidth:0, borderTopRightRadius:20, borderBottomRightRadius:20, backgroundColor:'#E0E0E0'}}> 
                                    <Text >+</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        
                    </View>
                )}
             />
             <View style={{flex:3.3/10, justifyContent:'flex-start'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'white', paddingTop:10, paddingHorizontal:15}}>
                    <View>
                        <Text style={{fontSize:16, fontWeight:'700'}}>Total</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:16, fontWeight:'700'}}>N 2,000,000</Text>
                    </View>
                </View>
                <View style={{paddingVertical:10, backgroundColor:'white', paddingHorizontal:15}}>
                    <TouchableOpacity style={{paddingHorizontal:15, backgroundColor:'#F7F7F7', paddingVertical:8, borderColor:'#E0E0E0', borderWidth:1,width:130, borderRadius:30}}>
                        <Text > + Add item</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{backgroundColor:'white',flex:1.5/10, justifyContent:'center',paddingVertical:20, }}>
                <TouchableOpacity onPress={()=>navigation.navigate('checkout')} style={{borderRadius:30, backgroundColor:'#2F1528',alignItems:'center', justifyContent:'center', paddingVertical:10, marginHorizontal:20}}>
                    <Text style={{color:'white', fontSize:16}}>Proceed to Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};



export default OrderSummary;