import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/home/headercomponent';
import CategoriesList from '../../components/home/categorieslist';
import HotDealsComp from '../../components/home/hotdealscomp';
import Header from '../../components/search-in-home/header';
import SearchedProductsList from '../../components/search-in-home/searched-products-list';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { NavigationProp } from '@react-navigation/native';


type HomeScreenNavigationProp = NavigationProp<any>;

const HomeScreen = ({navigation}: {navigation: HomeScreenNavigationProp}) => {
    const {height, width}= Dimensions.get('window');
    const mainPageOpacity = useSharedValue(1)
    const searchTop = useSharedValue(height+20)
    const mainPageAnimatedStyle= useAnimatedStyle(()=>({opacity:mainPageOpacity.value}))
    const searchPageAnimatedStyle= useAnimatedStyle(()=>({top:searchTop.value}))
    const textInputRef = React.useRef<TextInput>(null);
    const defaultTextInputConRef = useRef<TouchableOpacity>(null);
    const headerComponentRef = useRef<View>(null)
    const bringUpSearch =()=>{
        mainPageOpacity.value= withTiming(0, {duration: 500})
        searchTop.value= withTiming(0, {duration: 500})
        textInputRef.current?.focus()
    }
    const bringDownSearch =()=>{ 
        mainPageOpacity.value= withTiming(1, {duration: 300})
        searchTop.value= withTiming(height+20, {duration: 300})
        textInputRef.current?.blur()
     }
    const handleScroll =()=>{
        // defaultTextInputConRef.current?.measure((x,y,width,height,px, py)=>{
        //     console.log(x,y,width,height,px, py);
        // })
        if (headerComponentRef.current){
            headerComponentRef.current.measure((x,y,width,height,px, py)=>{
                console.log(x,y,width,height,px, py);
            })
        }
        
    }
    return (
        <View style={{ flex: 1, }}>
            <ExpoStatusBar style='light' backgroundColor='#572C4B' />
            <Animated.ScrollView onScroll={handleScroll} style={[{},mainPageAnimatedStyle ]}>
            <View>
                <HeaderComponent headerComponentRef={headerComponentRef} defaultTextInputConRef={defaultTextInputConRef} onTextInputClicked={bringUpSearch} />
                <CategoriesList />
                <HotDealsComp navigation={navigation} />
                <CategoriesList />
            </View>
            </Animated.ScrollView>
             
            <Animated.View style={[{flex:1,position:'absolute',width, height,  }, searchPageAnimatedStyle]}>
                <Header textInputRef={textInputRef} onArrowBackClicked={bringDownSearch}  />
                <SearchedProductsList  />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default HomeScreen;