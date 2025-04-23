import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderSummary:React.FC = () => {
    return (
        <View style={{marginTop:90}} >
            <View style={{paddingHorizontal:10, paddingVertical:10, }}>
                <Text style={{fontSize:14, fontWeight:'500'}}>Order summary</Text>
            </View>
            <View style={{backgroundColor:'#ffffff'}}>
                <View style={styles.orderSummaryItemContainer}>
                    <View>
                        <Text style={styles.orderSummaryLeftText}>Item total (3)</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:14}}>₦2,003,450</Text>
                    </View>
                </View>
                <View style={styles.orderSummaryItemContainer}>
                    <View>
                        <Text style={styles.orderSummaryLeftText}>Delivery fee</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:14}}>₦3,450</Text>
                    </View>
                </View>
                <View style={styles.orderSummaryItemContainer}>
                    <View>
                        <Text style={[styles.orderSummaryLeftText,{fontSize:16}]}>Total</Text>
                    </View>
                    <View>  
                        <Text style={{fontSize:16, fontWeight:'800'}}>₦2,003,450</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    orderSummaryItemContainer:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingVertical:17,
        justifyContent:'space-between',
        alignItems:'center'
    },
    orderSummaryLeftText:{
        color:'#8E9295',
        fontSize:14,
        fontWeight:'500'
    }
})


export default OrderSummary;