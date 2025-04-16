import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import HeaderComponent from '../../components/home/headercomponent';
import CategoriesList from '../../components/home/categorieslist';
import HotDealsComp from '../../components/home/hotdealscomp';
import Header from '../../components/search-in-home/header';
import SearchedProductsList from '../../components/search-in-home/searched-products-list';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            { false && <ScrollView>
            <View>
                <HeaderComponent />
                <CategoriesList />
                <HotDealsComp />
            </View>
            </ScrollView>}
            {true && 
            <View style={{flex:1}}>
                <Header />
                <SearchedProductsList />
            </View>}
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default HomeScreen;