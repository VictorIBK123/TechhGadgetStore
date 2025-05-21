import React, { useCallback, useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import Header from '../../components/cart-components/header';
import OrderSummary from '../../components/cart-components/order-summary';
import { NavigationProp } from '@react-navigation/native';
import { useGetCartProducts } from '../../hooks/get_cart_products';
import { CategoriesContext, UserDetails } from '../../contexts/myContext';
import { ProductsData } from '../../Types/product_data';
import useGetDocs from '../../hooks/get_docs';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../../firebase-config';
import { StatusBar } from 'expo-status-bar';
import { onAuthStateChanged } from 'firebase/auth';

type CartScreenNavigationProp = NavigationProp<any>;

const CartScreen = ({navigation}: {navigation: CartScreenNavigationProp}) => {
    const userContext = useContext(UserDetails)
    const categoriesContext = useContext(CategoriesContext)
    const [loadingCart, setLoadingCart]= useState<boolean>(false)
    const [cartData, setCartData] = useState<ProductsData>([])
    const [categories, setCategories] = useState<{ name: string; key: string; img_url: string; }[]>([])
    const [total, setTotal] = useState<number>(0)
    const getCartPrFunc =async()=>{
        await useGetDocs('categories',setCategories,userContext?.userEmail)
        if (userContext?.userEmail){
            const result=await useGetCartProducts(userContext?.userEmail,categories)
            setCartData(result.map((element)=>(
                {...element, quantity:1}
            )))
        }
    }
    useEffect(()=>{
        (async()=>await getCartPrFunc())()
        const unSub = userContext?.userEmail?onSnapshot(doc(db,'users', userContext?.userEmail), async()=>await getCartPrFunc()):undefined
        return unSub
    },[])
    useEffect(()=>{
        let sum:number=0;
        cartData.forEach((e)=>{
            if (e.quantity){
                sum+=parseInt(e.price)*e.quantity
            }
            
            
        })
        setTotal(sum)
    },[cartData])

    useEffect(()=>{
        (async()=>{
            if (userContext?.userEmail){
                const result = await useGetCartProducts(userContext?.userEmail,categories)
                setCartData(result.map((element)=>(
                    {...element, quantity:1}
                )))
            }

        })()
        
    },[categories])
    const calcQuantity = useCallback((operation: string, index:number)=>{
        if (operation=='add'){
            setCartData( [...cartData.slice(0,index),{name: cartData[index].name, key: cartData[index].key, img_url: cartData[index].img_url, price:cartData[index].price, description:cartData[index].description, inCart: cartData[index].inCart, quantity: cartData[index].quantity!=undefined?cartData[index].quantity+1:0}, ...cartData.slice(index+1, cartData.length) ] )
        }
        else {
            setCartData( [...cartData.slice(0,index),{name: cartData[index].name, key: cartData[index].key, img_url: cartData[index].img_url, price:cartData[index].price, description:cartData[index].description, inCart: cartData[index].inCart, quantity: cartData[index].quantity!=undefined && cartData[index].quantity>1 ?cartData[index].quantity-1:1}, ...cartData.slice(index+1, cartData.length) ] )
        }
    },[cartData,setCartData])
    if (userContext?.userEmail) {
        return (
            <View style={{flex:1}}>
                <StatusBar style='light' translucent={false} backgroundColor='#572C4B' />
                <Header navigation={navigation} />
                <OrderSummary navigation={navigation} cartData={cartData} total={total} calcQuantity={calcQuantity} />
            </View>
        );
    }
    else{
        return(
            <View style={{justifyContent:'center', alignItems:'center',flexDirection:'row', flex:1, marginHorizontal:10}}>
                <TouchableOpacity onPress={()=>navigation.navigate('login')}>
                    <Text style={{color:'blue', fontSize:16}}>Login</Text>
                </TouchableOpacity>
                <Text style={{marginHorizontal:10}}>or</Text>
                <TouchableOpacity onPress={()=>navigation.navigate('create_account')}>
                    <Text style={{color:'blue', fontSize:16}}>Sign Up</Text>
                </TouchableOpacity>
                <Text style={{marginHorizontal:10}}>to continue</Text>
            </View>
        )
    }
    
};



export default CartScreen;