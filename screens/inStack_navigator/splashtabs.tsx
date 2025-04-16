import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
import FirstView from '../inSplashscreen_tabNavigator/firstview';
import SecondView from '../inSplashscreen_tabNavigator/secondview';
import ThirdView from '../inSplashscreen_tabNavigator/thirdview';
import { StatusBar } from 'expo-status-bar';

const Tab = createMaterialTopTabNavigator();


export default function SplashTabs() {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar hidden />
            <Tab.Navigator screenOptions={{swipeEnabled:true, tabBarStyle: { display: 'none' } }}>
                <Tab.Screen name="first" component={FirstView} />
                <Tab.Screen name="second" component={SecondView} />
                <Tab.Screen name="third" component={ThirdView} />
            </Tab.Navigator>
        </View>
    );
}