import { NavigationProp } from '@react-navigation/native';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import React, {useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image, FlatList, ActivityIndicator } from 'react-native';
import { app, db } from '../../firebase-config';

interface CategoriesListProps{
    navigation: NavigationProp<any>
}
const CategoriesList:React.FC<CategoriesListProps> = ({navigation}) => {
    const [categories, setCategories] = React.useState<{name: string, key: string, img_url: string}[]>([])
    useEffect(()=>{
        (async()=>{
            const querySnapshot = await getDocs(collection(db, 'categories'));
            var categoriesData:{name: string, key: string, img_url: string}[] =[];
            try{
                querySnapshot.forEach((doc)=>{
                    categoriesData.push({key: `${doc.id}`, name:doc.data().name, img_url:(doc.data().img_url) })
                })
                categoriesData.pop()
                setCategories(categoriesData)
            }
            catch(error){
                alert(error)
            }
        })()

    })
    
    return (
        <View style={{marginTop:20, marginHorizontal:15, backgroundColor:'white', paddingVertical:10, paddingHorizontal:10, borderRadius:12}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View  >
                    <Text style={{fontWeight:'500', fontSize:16}}>Categories</Text>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('all_categories',{categories})} style={{flexDirection:'row', alignItems:'center'}}>   
                    <Text style={{fontSize:12, fontWeight:400}}>All categories</Text>
                    <Image source={require('../../assets/right.png')} />
                </TouchableOpacity>
            </View>
            <FlatList
                ListEmptyComponent={()=><ActivityIndicator size="large" color='#572C4B' style={{flex:1, justifyContent:'center', alignItems:'center'}} />}
                data={categories}
                numColumns={4}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('products_in_category', {productName: item.name.toLowerCase()})} style={{flex:1/4, marginRight:5}}>
                            <View style={{height:80, justifyContent:'center', borderWidth:1, borderColor:'#F7F7F7'}}>
                                <Image style={{height:80,width:80, resizeMode:'contain'}} source={{uri: item.img_url}} />
                            </View>
                            <Text style={{textAlign:'center', marginVertical:15, fontSize:14}}>{item.name}</Text>
                        </TouchableOpacity>
                    )
                }}
             />
        </View>
    );
};

export default CategoriesList;