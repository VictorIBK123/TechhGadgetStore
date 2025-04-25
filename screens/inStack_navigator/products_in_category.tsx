import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { app, db } from '../../firebase-config';
import { ProductsData } from '../../Types/product_data';

import { NavigationProp, RouteProp } from '@react-navigation/native';

interface ProductsInCategoryProps{
    navigation: NavigationProp<any>;
    route: RouteProp<any>;
}
const ProductsInCategory: React.FC<ProductsInCategoryProps> = ({navigation, route}) => {
    const [laptops, setLaptops] = React.useState<ProductsData>([])
        useEffect(()=>{
            navigation.setOptions({title: route.params?.productName.toUpperCase()})
            async function getData(){
                const querySnapshot = await getDocs(collection(db, route.params?.productName));
                var laptopsData: ProductsData =[]
                querySnapshot.forEach((doc)=>{
                    laptopsData.push({key: `${doc.id}`, name:doc.data().name,description:doc.data().description,  price:doc.data().price, img_url:(doc.data().img_url) })
                })
                setLaptops(laptopsData)
            }
            try{
                getData()
            }
            catch(error){
                console.log('the error')
            }
    
        },[])
    const data = laptops
    return (
        <FlatList
        style={{flex:17/20, marginBottom:20}}
            contentContainerStyle={{marginTop:20, paddingHorizontal:10, paddingBottom:50}}
            ListEmptyComponent={()=><ActivityIndicator size="large" color='#572C4B' style={{flex:1, justifyContent:'center', alignItems:'center'}} />}  
            data={data}
            numColumns={2}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('product_details',{item})} style={{flex:1/2, marginRight:3, marginBottom:10, backgroundColor:'white', borderRadius:4}}>
                        <View style={{justifyContent:'center', height:132}}>
                            <Image style={{alignSelf:'center', height:130, width:130, resizeMode:'contain'}} source={{uri:item.img_url}} />
                        </View>
                        <Text style={{textAlign:'center', marginTop:10,marginVertical:5, fontSize:12, fontWeight:'400', paddingHorizontal:3}} numberOfLines={1}>{item.name}</Text>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', paddingBottom:10}}>
                            <Text adjustsFontSizeToFit={true} style={{textAlign:'center', fontSize:14, fontWeight:'700'}}>₦{parseFloat(item.price).toLocaleString()}</Text>
                            <Text style={{fontWeight:'500', fontSize:12, textAlign:'center', textDecorationLine:'line-through', textDecorationStyle:'solid', color:'#8E9295'}}>₦{(parseFloat(item.price)/2).toLocaleString()}</Text>
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


export default ProductsInCategory;