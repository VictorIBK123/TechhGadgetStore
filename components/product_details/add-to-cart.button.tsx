import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';



const AddToCartButton: React.FC = ({ }) => {
    return (
        <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Add to Cart</Text>
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