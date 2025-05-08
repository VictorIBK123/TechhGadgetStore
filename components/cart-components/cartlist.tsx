import { View, TouchableHighlight,Image,Text } from "react-native";
import { AProductData } from "../../Types/product_data";
import React, { memo } from "react";

interface cartItem{
    item:AProductData, 
    index:number , 
    calcQuantity:(operation:string, index:number)=>void
}
const CartItemComp:React.FC<cartItem> =({item, index, calcQuantity}) => (
    <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical:20, alignItems:'center', paddingHorizontal:15, borderBottomWidth:2, borderColor:'#F7F7F7'}}>
        <View style={{flexDirection:'row', alignItems:'center',flex:1.5/3, }}>
            <View style={{marginRight:10, borderColor:'#F7F7F7', borderWidth:1, padding:3, borderRadius:5}}>
                <Image style={{height:45, width:45}} source={{uri: item.img_url}} />
            </View>
            <View>
                <Text style={{marginBottom:5, fontSize:14, fontWeight:'500',}}>{item.name}</Text>
                <Text style={{fontSize:12, color:'#8E9295'}}>₦{parseInt(item.price).toLocaleString()}</Text>
            </View>
        </View>
        <View style={{flex:1/3}}>
            <View style={{flexDirection:'row', alignItems:'center', }}>
                <TouchableHighlight underlayColor={'green'} onPress={()=>calcQuantity('subtract', index)} style={{paddingHorizontal:17, borderRightWidth:0.5, paddingVertical:7, borderTopLeftRadius:20, borderBottomLeftRadius:20, backgroundColor:'#E0E0E0'}}>
                    <Text>-</Text>
                </TouchableHighlight>
                <View style={{paddingHorizontal:17, paddingVertical:7,  borderRightWidth:0.5,backgroundColor:'#E0E0E0'}}>
                    <Text >{item.quantity}</Text>
                </View>
                <TouchableHighlight underlayColor={'green'} onPress={()=>calcQuantity('add', index)} style={{paddingHorizontal:17, paddingVertical:7,  borderLeftWidth:0, borderTopRightRadius:20, borderBottomRightRadius:20, backgroundColor:'#E0E0E0'}}> 
                    <Text >+</Text>
                </TouchableHighlight>
            </View>
        </View>
        
    </View>
)
export default memo(CartItemComp)