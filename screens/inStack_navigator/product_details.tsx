import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Header from '../../components/product_details/header';
import OtherDetails from '../../components/product_details/other_details';
import QuantityCalc from '../../components/product_details/quantity-calc';
import { StatusBar } from 'expo-status-bar';

import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import AddToCartButton from '../../components/product_details/add-to-cart.button';



type Props = {
    navigation: NavigationProp<any>; // Replace 'any' with the specific type if known, e.g., NavigationProp
};

const ProductDetails: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex:1 }}>
            <Header navigation={navigation} />
            <ScrollView style={{}}>
                <View style={{}}>
                    <View style={{backgroundColor:'white', marginBottom:10}}>
                        <Image style={{alignSelf:'center',}} source={require('../../assets/iphone-13-pro-big.png')} />
                    </View>
                    <OtherDetails />
                    <QuantityCalc />
                    <AddToCartButton />
                </View>
            </ScrollView>
        </SafeAreaView>
        
    )
};

export default ProductDetails;