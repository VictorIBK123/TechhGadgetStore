import { collection, doc, getDocs, getFirestore, onSnapshot } from 'firebase/firestore';
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
import { Snackbar } from 'react-native-paper';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface ProductsInCategoryProps{
    navigation: NavigationProp<any>;
    route: RouteProp<any>;
}
const ProductsInCategory: React.FC<ProductsInCategoryProps> = ({navigation, route}) => {
    const [snackBarVisible, setSnackBarVisible] = useState<boolean>(false)
    const [snackBarVisible1, setSnackBarVisible1] = useState<boolean>(false)
    const [addingToCart, setAddingToCart] = useState<boolean>(false)
    const [removingFromCart, setRemovingFromCart] = useState<boolean>(false)
    const context = useContext(UserDetails)
    const [products, setProducts] = React.useState<ProductsData>([])
        useEffect(()=>{
            (async()=>{
                navigation.setOptions({title: route.params?.productName.toUpperCase()})
                await useGetDocs(route.params?.productName,setProducts, context?.userEmail)
            })()
            const unSub= context?.userEmail?onSnapshot(doc(db,'users', context?.userEmail), async()=>await useGetDocs(route.params?.productName,setProducts, context?.userEmail)):undefined
            return unSub
        },[])
    const addToCartFunc = async(item: AProductData)=>{
        await UseAddToCart(item.name,context?.userEmail, setAddingToCart )
        setSnackBarVisible(true)
    }
    const removeFromCartFunc = async(item: AProductData)=>{
        await UseRemoveFromCart(item.name,context?.userEmail, setRemovingFromCart )
        setSnackBarVisible1(true)
    }
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
            <Snackbar 
                onDismiss={()=>setSnackBarVisible(false)}
                visible={snackBarVisible}
                duration={5000}
                icon={()=><MaterialIcons name="cancel" size={24} color="white" />}
                onIconPress={()=>setSnackBarVisible(false)}
            >
                <Text style={{color:'white'}}>Added to Cart successfully</Text>
            </Snackbar>
            <Snackbar 
                onDismiss={()=>setSnackBarVisible1(false)}
                visible={snackBarVisible1}
                duration={5000}
                icon={()=><MaterialIcons name="cancel" size={24} color="white" />}
                onIconPress={()=>setSnackBarVisible1(false)}
            >
                <Text style={{color:'white'}}>Removed from cart successfully</Text>
            </Snackbar>
            <ActivityIndicator size={'large'} color={'#2F1528'} style={{position:'absolute',alignSelf:'center',}} animating={addingToCart||removingFromCart}  />
        </View>
        
    );
};


export default ProductsInCategory;