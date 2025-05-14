import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { app, db } from '../../firebase-config';
import { AProductData, ProductsData } from '../../Types/product_data';
import { useContext } from 'react';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import UseAddToCart from '../../hooks/add_to_cart';
import { UserDetails } from '../../contexts/myContext';
import useGetDocs from '../../hooks/get_docs';
import UseRemoveFromCart from '../../hooks/remove_from_cart';
import useFetchDeals from '../../hooks/fetch_deals';

interface ProductsInCategoryProps{
    navigation: NavigationProp<any>;
    route: RouteProp<any>;
}
const ProductsInDeals: React.FC<ProductsInCategoryProps> = ({navigation, route}) => {
    const [addingToCart, setAddingToCart] = useState<boolean>(false)
    const [removingFromCart, setRemovingFromCart] = useState<boolean>(false)
    const context = useContext(UserDetails)
    const [products, setProducts] = React.useState<ProductsData>([])
        useEffect(()=>{
            (async()=>{
                navigation.setOptions({title: route.params?.productName.toUpperCase()})
                var queryResults: ProductsData=[]
                queryResults = await useFetchDeals(route.params?.productName,route.params?.categories,context?.userEmail?context.userEmail:'')
                setProducts(queryResults)
            })()
        },[route.params?.categories])
    const addToCartFunc = async(item: AProductData)=>{
        await UseAddToCart(item.name,context?.userEmail, setAddingToCart )
        var queryResults: ProductsData=[]
        queryResults = await useFetchDeals(route.params?.productName,route.params?.categories,context?.userEmail?context.userEmail:'')
        setProducts(queryResults)    }

    const removeFromCartFunc = async(item: AProductData)=>{
        await UseRemoveFromCart(item.name,context?.userEmail, setRemovingFromCart )
        var queryResults: ProductsData=[]
        queryResults = await useFetchDeals(route.params?.productName,route.params?.categories,context?.userEmail?context.userEmail:'')
        setProducts(queryResults)    }
    const data = products
    return (
        <View style={{flex:1}}>
            <FlatList
                style={{flex:17/20, marginBottom:20}}
                contentContainerStyle={{marginTop:20, paddingHorizontal:10, paddingBottom:50}}
                ListEmptyComponent={()=><ActivityIndicator size="large" color='#572C4B' style={{flex:1, justifyContent:'center', alignItems:'center'}} />}  
                data={data}
                numColumns={2}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity disabled={addingToCart} onPress={()=>navigation.navigate('product_details',{item})} style={{flex:1/2, marginRight:3, marginBottom:10, backgroundColor:'white', borderRadius:4}}>
                            <View style={{justifyContent:'center', height:132}}>
                                <Image style={{alignSelf:'center', height:130, width:130, resizeMode:'contain'}} source={{uri:item.img_url}} />
                            </View>
                            <Text style={{textAlign:'center', marginTop:10,marginVertical:5, fontSize:12, fontWeight:'400', paddingHorizontal:3}} numberOfLines={1}>{item.name}</Text>
                            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', paddingBottom:10}}>
                                <Text adjustsFontSizeToFit={true} style={{textAlign:'center', fontSize:14, fontWeight:'700'}}>₦{parseFloat(item.price).toLocaleString()}</Text>
                                <Text style={{fontWeight:'500', fontSize:12, textAlign:'center', textDecorationLine:'line-through', textDecorationStyle:'solid', color:'#8E9295'}}>₦{(parseFloat(item.price)+ ((10/100) * parseFloat(item.price))).toLocaleString()}</Text>
                            </View>
                            {!item.inCart &&
                                <TouchableOpacity disabled={addingToCart} onPress={()=>addToCartFunc(item)} style={{alignItems:'center', justifyContent:'center', backgroundColor:'#2F1528', paddingVertical:7, borderRadius:20, marginHorizontal:10, marginBottom:20}}>
                                    <Text style={{color:'white'}}>Add to Cart</Text>
                                </TouchableOpacity>
                            }
                            {item.inCart && 
                                <TouchableOpacity disabled={addingToCart} onPress={()=>removeFromCartFunc(item)} style={{alignItems:'center', justifyContent:'center', backgroundColor:'#2F1528', paddingVertical:7, borderRadius:20, marginHorizontal:10, marginBottom:20}}>
                                    <Text style={{color:'white'}}>Remove from cart</Text>
                                </TouchableOpacity>
                            }
                        </TouchableOpacity>
                    )
            }}
            />
            <ActivityIndicator size={'large'} color={'#2F1528'} style={{position:'absolute',alignSelf:'center',}} animating={addingToCart||removingFromCart}  />
        </View>
        
    );
};


export default ProductsInDeals;