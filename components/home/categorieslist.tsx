import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image, FlatList } from 'react-native';

const CategoriesList = () => {
    const data = [{name:'Phones', source: require('../../assets/phone.png'), key:1},
            {name:'Laptops', source: require('../../assets/laptop.png'), key:2},
            {name:'Tablets', source: require('../../assets/tablet.png'), key:3},
            {name:'Consoles', source: require('../../assets/console.png'), key:4},
    ]
    return (
        <View style={{marginTop:20, marginHorizontal:15, backgroundColor:'white', paddingVertical:10, paddingHorizontal:10, borderRadius:12}}>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View  >
                    <Text style={{fontWeight:'500', fontSize:16}}>Categories</Text>
                </View>
                <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>   
                    <Text style={{fontSize:12, fontWeight:400}}>All categories</Text>
                    <Image source={require('../../assets/right.png')} />
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                numColumns={4}
                renderItem={({item})=>{
                    return(
                        <View style={{flex:1/4, marginRight:5}}>
                            <View style={{height:80, justifyContent:'center', borderWidth:1, borderColor:'#F7F7F7'}}>
                                <Image  source={item.source} />
                            </View>
                            <Text style={{textAlign:'center', marginVertical:15, fontSize:14}}>{item.name}</Text>
                        </View>
                    )
                }}
             />
        </View>
    );
};

export default CategoriesList;