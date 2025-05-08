import React, { memo } from 'react';
import { View, Text, StyleSheet, FlatList ,Image, TouchableHighlight, TouchableOpacity, ActivityIndicator} from 'react-native';

import { NavigationProp } from '@react-navigation/native';
import { AProductData, ProductsData } from '../../Types/product_data';
import cartlist from './cartlist';
import Cartlist from './cartlist';
const OrderSummary = ({navigation, cartData, total, calcQuantity}: {navigation: NavigationProp<any>, cartData: ProductsData, total: number, calcQuantity:(operation:string, index:number)=>void}) => {

    return (
        <View style={{flex:9/10}}>
            <Text style={{paddingVertical:10, paddingLeft:10, fontWeight:'500', fontSize:14,flex:0.7/10 }}>Order summary</Text>
            <FlatList
                ListEmptyComponent={()=><ActivityIndicator color={'#2F1528'} size={'large'} style={{alignSelf:'center'}} />}
                style={{backgroundColor:'white', flex:4.8/10}}
                data={cartData}
                renderItem={({item, index})=><Cartlist item={item} index={index} calcQuantity={calcQuantity}  />}
             />
             <View style={{flex:3/10, justifyContent:'flex-start'}}>
                <View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'white', paddingTop:10, paddingHorizontal:15}}>
                    <View>
                        <Text style={{fontSize:16, fontWeight:'700'}}>Total</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:16, fontWeight:'700'}}>₦{total.toLocaleString()}</Text>
                    </View>
                </View>
                <View style={{paddingVertical:10, backgroundColor:'white', paddingHorizontal:15}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('all_categories')} style={{paddingHorizontal:15, backgroundColor:'#F7F7F7', paddingVertical:8, borderColor:'#E0E0E0', borderWidth:1,width:130, borderRadius:30}}>
                        <Text > + Add item</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{backgroundColor:'white',flex:1.5/10, justifyContent:'center',paddingVertical:20, }}>
                <TouchableOpacity onPress={()=>navigation.navigate('checkout', {itemQuantity:cartData.length, itemTotal: total})} style={{borderRadius:30, backgroundColor:'#2F1528',alignItems:'center', justifyContent:'center', paddingVertical:10, marginHorizontal:20}}>
                    <Text style={{color:'white', fontSize:16}}>Proceed to Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


export default memo(OrderSummary);