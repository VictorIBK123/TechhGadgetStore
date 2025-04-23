import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Header from '../../components/cart-components/header';
import OrderSummary from '../../components/cart-components/order-summary';
import { NavigationProp } from '@react-navigation/native';

type CartScreenNavigationProp = NavigationProp<any>;

const CartScreen = ({navigation}: {navigation: CartScreenNavigationProp}) => {
    return (
        <View style={{flex:1}}>
            <Header navigation={navigation} />
            <OrderSummary navigation={navigation} />
        </View>
    );
};



export default CartScreen;