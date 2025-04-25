import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { app, db } from '../../firebase-config';
import { NavigationProp } from '@react-navigation/native';

interface AllCategoriesCompProp {
    navigation: NavigationProp<any>;
}

const AllCategoriesComp: React.FC<AllCategoriesCompProp> = ({navigation}) => {
    const [categories, setCategories] = React.useState<{name: string, key: string, img_url: string}[]>([])
         useEffect(()=>{
                (async()=>{
                    const querySnapshot = await getDocs(collection(db, 'categories'));
                    var categoriesData:{name: string, key: string, img_url: string}[] =[];
                    try{
                        querySnapshot.forEach((doc)=>{
                            categoriesData.push({key: `${doc.id}`, name:doc.data().name, img_url:(doc.data().img_url) })
                        })
                        setCategories(categoriesData)
                    }
                    catch(error){
                        alert(error)
                    }
                })()
        
            })
  
    return (
        <FlatList
        style={{flex:17/20, marginBottom:20}}
            contentContainerStyle={{marginTop:20, paddingHorizontal:10, paddingBottom:50}}
            data={categories}
            numColumns={2}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('products_in_category',{productName: item.name.toLowerCase()})} style={{flex:1/2, marginRight:3, marginBottom:10, backgroundColor:'white', borderRadius:4}}>
                        <View style={{justifyContent:'center', height:132}}>
                            <Image style={{alignSelf:'center', height:130, width:130, resizeMode:'contain'}} source={{uri: item.img_url}} />
                        </View>
                        <Text style={{textAlign:'center', marginTop:10,marginVertical:5, fontSize:12, fontWeight:'400', paddingHorizontal:3}}>{item.name}</Text>
                    </TouchableOpacity>
                )
            }}
            />
    );
};


export default AllCategoriesComp;