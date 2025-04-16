import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import CartScreen from '../maintab/cart';
import HomeScreen from '../maintab/home';

const Tab = createMaterialTopTabNavigator();


export default function MainTabs() {
    return (
        <View style={{ flex: 1 }}>
            <Tab.Navigator tabBarPosition='bottom' screenOptions={{swipeEnabled:true,tabBarStyle:{height:60} }}>
                <Tab.Screen name="home" options={{tabBarIcon:({focused, color})=>(focused? <Entypo name="home" size={24} color="black" />: <Feather name="home" size={24} color="black" /> ), title:'Home'}} component={HomeScreen} />
                <Tab.Screen name="cart" options={{tabBarIcon:({focused, color})=>(focused? <Entypo name="shopping-cart" size={24} color="black" />: <AntDesign name="shoppingcart" size={24} color="black"  /> ), title:'Cart'}} component={CartScreen} />
            </Tab.Navigator>
        </View>
    );
}