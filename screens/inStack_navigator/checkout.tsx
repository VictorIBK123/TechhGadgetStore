import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/checkout/header';
import OrderSummary from '../../components/checkout/order-summary';
import ScientificCalculator from '../../components/checkout/delivery-details';
import PayButton from '../../components/checkout/pay-button';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { NavigationProp } from '@react-navigation/native';

interface CheckoutScreenProps {
    navigation: NavigationProp<any>;
}
const CheckoutScreen:React.FC<CheckoutScreenProps> = ({navigation}) => {
    return (
        <View>
            <Header navigation={navigation} />
            <ScrollView>
            <ExpoStatusBar style='light' backgroundColor='black' /> 
                <View style={styles.container}>
                    <OrderSummary />
                    <ScientificCalculator />
                    <PayButton />
                </View>
            </ScrollView>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
   
});

export default CheckoutScreen;