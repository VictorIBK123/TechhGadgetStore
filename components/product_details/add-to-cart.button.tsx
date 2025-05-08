import React, { useContext, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { AProductData } from '../../Types/product_data';
import UseAddToCart from '../../hooks/add_to_cart';
import { UserDetails } from '../../contexts/myContext';
import useGetDocs from '../../hooks/get_docs';



const AddToCartButton: React.FC<any> = ({item, category}) => {
    const context = useContext(UserDetails)
    const [addingToCart, setAddingToCart]= useState<boolean>(false)
    const addToCartFunc = async(item: AProductData)=>{
        await UseAddToCart(item.name,context?.userEmail, setAddingToCart )
        await useGetDocs(category,setAddingToCart, context?.userEmail)
    }
    return (
        !item.inCart?
        <TouchableOpacity onPress={()=>(addToCartFunc(item))} style={styles.button} >
            <Text style={styles.buttonText}>Add to Cart</Text>
            <ActivityIndicator color={'#2F1528'} size={'large'} animating={addingToCart} />
        </TouchableOpacity>:
        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Remove from Cart</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#2F1528',
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        marginHorizontal:15,
        paddingVertical:15,
        marginBottom:30
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default AddToCartButton;