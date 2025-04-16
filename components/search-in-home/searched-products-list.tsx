import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

interface SearchedProductsListProps {}

const SearchedProductsList: React.FC<SearchedProductsListProps> = () => {
    const data = [{name:'Iphone 13 Pro  (256 GB)', source: require('../../assets/iphone-13-pro.png'), key:1, discountedPrice: (920050).toLocaleString(), originalPrice:(980050).toLocaleString()},
        {name:'Iphone 16 Pro Max  (512 GB)', source: require('../../assets/iphone-16-pro-max.png'), key:2, discountedPrice: (1700050).toLocaleString(), originalPrice:(1750050).toLocaleString()},
        {name:'Iphone 14  (256 GB)', source: require('../../assets/iphone-14.png'), key:3, discountedPrice:(900060).toLocaleString(), originalPrice: (950060).toLocaleString() },
        {name:'Iphone 12  (128 GB) ', source: require('../../assets/iphone-12.png'), key:4, discountedPrice:(480060).toLocaleString(), originalPrice:(490060).toLocaleString()},
        {name:'Iphone 14  (256 GB)', source: require('../../assets/iphone-14.png'), key:5, discountedPrice:(900060).toLocaleString(), originalPrice: (950060).toLocaleString() },
        {name:'Iphone 12  (128 GB) ', source: require('../../assets/iphone-12.png'), key:6, discountedPrice:(480060).toLocaleString(), originalPrice:(490060).toLocaleString()},
]
    return (
        <FlatList
        style={{flex:17/20, marginBottom:20}}
            contentContainerStyle={{marginTop:20, paddingHorizontal:10, paddingBottom:50}}
            data={data}
            numColumns={2}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity style={{flex:1/2, marginRight:3, marginBottom:10, backgroundColor:'white', borderRadius:4}}>
                        <View style={{justifyContent:'center', height:132}}>
                            <Image style={{alignSelf:'center'}} source={item.source} />
                        </View>
                        <Text style={{textAlign:'center', marginTop:10,marginVertical:5, fontSize:12, fontWeight:'400', paddingHorizontal:3}}>{item.name}</Text>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', paddingBottom:10}}>
                            <Text adjustsFontSizeToFit={true} style={{textAlign:'center', fontSize:14, fontWeight:'700'}}>₦{item.discountedPrice}</Text>
                            <Text style={{fontWeight:'500', fontSize:12, textAlign:'center', textDecorationLine:'line-through', textDecorationStyle:'solid', color:'#8E9295'}}>₦{item.originalPrice}</Text>
                        </View>
                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center', backgroundColor:'#2F1528', paddingVertical:7, borderRadius:20, marginHorizontal:10, marginBottom:20}}>
                            <Text style={{color:'white'}}>Add to Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                )
            }}
            />
    );
};


export default SearchedProductsList;