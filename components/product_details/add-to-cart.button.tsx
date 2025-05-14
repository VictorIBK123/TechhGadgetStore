import React, { useContext, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { AProductData, ProductsData } from '../../Types/product_data';
import UseAddToCart from '../../hooks/add_to_cart';
import { UserDetails } from '../../contexts/myContext';
import useGetDocs from '../../hooks/get_docs';
import UseRemoveFromCart from '../../hooks/remove_from_cart';



const AddToCartButton: React.FC<any> = ({navigation,item, category}) => {
    const context = useContext(UserDetails)
    const [inCartOnPage, setInCartOnPage] = useState<boolean>(item.inCart)
    const [addingToCart, setAddingToCart]= useState<boolean>(false)
    const [removingFromCart, setRemovingFromCart] = useState<boolean>(false)
    const addToCartFunc = async(item: AProductData)=>{
        setAddingToCart(true)
        try {
            await UseAddToCart(item.name,context?.userEmail, setAddingToCart )
            setAddingToCart(false)
            setInCartOnPage(true)
        } catch (error) {
            setAddingToCart(false)
            alert(error)
        }
        
    }
    const removeFromCartFunc =async (item:AProductData)=>{
        setRemovingFromCart(true)
        try {
            await UseRemoveFromCart(item.name,context?.userEmail, setAddingToCart )
            setRemovingFromCart(false)
            setInCartOnPage(false)
        } catch (error) {
            setRemovingFromCart(false)
            alert(error)
        }
    }
    return (
        !inCartOnPage?
        <TouchableOpacity onPress={()=>(addToCartFunc(item))} style={styles.button} >
            <Text style={styles.buttonText}>Add to Cart</Text>
            <ActivityIndicator style={{position:'absolute', marginTop:5}} color={'blue'} animating={addingToCart} size={'large'}  />
        </TouchableOpacity>:
        <TouchableOpacity onPress={()=>removeFromCartFunc(item)} style={styles.button} >
            <Text style={styles.buttonText}>Remove from Cart</Text>
            <ActivityIndicator style={{position:'absolute', marginTop:5}} color={'blue'} animating={removingFromCart} size={'large'}  />
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