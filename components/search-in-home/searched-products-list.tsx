import React, { useEffect, useState } from 'react';
import { View, Text,  FlatList, Image, TouchableOpacity, Animated, ActivityIndicator } from 'react-native';
import CategoriesList from '../home/categorieslist';
import HotDealsComp from '../home/hotdealscomp';
import { NavigationProp } from '@react-navigation/native';
import { ProductsData } from '../../Types/product_data';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import PopularComp from '../home/popular';

interface SearchedProductsListProps {
    navigation: NavigationProp<any>,
    textToSearch: string,
    categories: {name: string, key: string, img_url: string}[],
    searchHeaderRef: React.RefObject<View>,
}

const SearchedProductsList: React.FC<SearchedProductsListProps> = ({ navigation, textToSearch, categories, searchHeaderRef}) => {
    const [searhResult, setSearchResult] = useState<ProductsData>([])
    var snapShot;
    useEffect(()=>{
        var fetchedData:{
            name: string;
            key: string;
            img_url: string;
            price: string;
            description: string;
            inCart: boolean;
        }[];
        categories.forEach(async(element)=>{
            snapShot = await getDocs(collection(db,element.name.toLowerCase() ))
            snapShot.forEach((doc)=>{
                fetchedData.push({
                    key: `${doc.id}`, 
                    name:doc.data().name,
                    description:doc.data().description,  
                    price:doc.data().price, 
                    img_url:(doc.data().img_url),
                    inCart: false //not needed here just put it to satisfy the product data type
                })
            })
            setSearchResult(fetchedData)
        })
    },[textToSearch])
    
    return (
        <View style={{flex:18/20,}}>
        
         <FlatList
            style={{flex:1, marginBottom:0, display:textToSearch.length==0?'none':'flex'}}
            ListEmptyComponent={()=><ActivityIndicator style={{alignSelf:'center'}} size={'large'} color={'#2F1528'} />}
            contentContainerStyle={{marginTop:20, paddingHorizontal:10, paddingBottom:50}}
            data={searhResult}
            numColumns={2}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity style={{flex:1/2, marginRight:3, marginBottom:10, backgroundColor:'white', borderRadius:4}}>
                        <View style={{justifyContent:'center', height:132}}>
                            <Image style={{alignSelf:'center'}} source={{uri:item.img_url}} />
                        </View>
                        <Text style={{textAlign:'center', marginTop:10,marginVertical:5, fontSize:12, fontWeight:'400', paddingHorizontal:3}}>{item.name}</Text>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', paddingBottom:10}}>
                            <Text adjustsFontSizeToFit={true} style={{textAlign:'center', fontSize:14, fontWeight:'700'}}>₦{item.price}</Text>
                            <Text style={{fontWeight:'500', fontSize:12, textAlign:'center', textDecorationLine:'line-through', textDecorationStyle:'solid', color:'#8E9295'}}>₦{item.price}</Text>
                        </View>
                        <TouchableOpacity style={{alignItems:'center', justifyContent:'center', backgroundColor:'#2F1528', paddingVertical:7, borderRadius:20, marginHorizontal:10, marginBottom:20}}>
                            <Text style={{color:'white'}}>Add to Cart</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                    
                )
            }}
            />
            <Animated.ScrollView style={{flex:1,display:textToSearch.length==0?'flex':'none', marginBottom:80}}>
                <View>
                    <CategoriesList categories={categories} searchHeaderRef={searchHeaderRef} navigation={navigation} />
                    <HotDealsComp categories={categories} navigation={navigation} />
                    <PopularComp categories={categories} navigation={navigation} />
                </View>
            </Animated.ScrollView>
            </View>
    );
};


export default SearchedProductsList;