import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { AllUserDetails } from '../../contexts/myContext';

const DeliveryDetails = () => {
    const allUserDetails = useContext(AllUserDetails)
    return (
        <View style={{flex:4.8/10}}>
            <View style={{paddingHorizontal:10, paddingVertical:10, }}>
                <Text style={{fontSize:14, fontWeight:'500'}}>Delivery details</Text>
            </View>
            <View style={{backgroundColor:'#ffffff', paddingVertical:10}}>
                <View style={[styles.orderSummaryItemContainer, ]}>
                    <View>
                        <Text style={styles.orderSummaryLeftText}>Customer name</Text>
                    </View>
                    <View>
                        <Text style={{fontSize:14}}>{allUserDetails?.values.firstName} {allUserDetails?.values.lastName}</Text>
                    </View>
                </View>
                <View style={[styles.orderSummaryItemContainer, {flexDirection:'row', justifyContent:'space-between'}]}>
                    <View>
                        <View>
                            <Text style={styles.orderSummaryLeftText}>Phone number</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:14}}>07088614267</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize:12, marginRight:3, color:'#2F1528', fontWeight:400}}>Change</Text>
                        <AntDesign name="right" size={15} color="#2F1528" />
                    </TouchableOpacity>
                </View>
                <View style={[styles.orderSummaryItemContainer,{flexDirection:'row', justifyContent:'space-between'}]}>
                    <View>
                        <View>
                            <Text style={[styles.orderSummaryLeftText,]}>Delivery address</Text>
                        </View>
                        <View>  
                            <Text style={{fontSize:14, fontWeight:'500'}}>{allUserDetails?.values.address1}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}>
                        <Text style={{fontSize:12, marginRight:3, color:'#2F1528', fontWeight:'400'}}>Change</Text>
                        <AntDesign name="right" size={15} color="#2F1528" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    orderSummaryItemContainer:{
        flexDirection:'column',
        paddingHorizontal:17,
        paddingVertical:10,
        justifyContent:'space-between',
        alignItems:'flex-start'
    },
    orderSummaryLeftText:{
        color:'#8E9295',
        fontSize:14,
        fontWeight:'500'
    }
})


export default DeliveryDetails;