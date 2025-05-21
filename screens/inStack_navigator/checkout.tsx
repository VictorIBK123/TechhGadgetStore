import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/checkout/header';
import OrderSummary from '../../components/checkout/order-summary';
import ScientificCalculator from '../../components/checkout/delivery-details';
import PayButton from '../../components/checkout/pay-button';
import { StatusBar } from 'expo-status-bar';
import { NavigationProp, Route, RouteProp } from '@react-navigation/native';
import DeliveryDetails from '../../components/checkout/delivery-details';

interface CheckoutScreenProps {
    navigation: NavigationProp<any>;
    route: RouteProp<any>
}
const CheckoutScreen:React.FC<CheckoutScreenProps> = ({navigation, route}) => {
    const itemQuantity= route.params?.itemQuantity
    const itemTotal = route.params?.itemTotal
    return (
        <ScrollView keyboardShouldPersistTaps={false} style={{flex:1, }}>
            <StatusBar style='light' translucent={false} backgroundColor='#572C4B' />
            <Header navigation={navigation} />
            {/* <ScrollView> */}
                <View style={styles.container}>
                    <OrderSummary itemQuantity={itemQuantity} itemTotal={itemTotal} />
                    <DeliveryDetails />
                    <PayButton />
                </View>
            {/* </ScrollView> */}
        </ScrollView>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#ffffff',
    },
   
});

export default CheckoutScreen;