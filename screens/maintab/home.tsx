import { LinearGradient } from 'expo-linear-gradient';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, Dimensions, Touchable, TouchableOpacity } from 'react-native';
import HeaderComponent from '../../components/home/headercomponent';
import CategoriesList from '../../components/home/categorieslist';
import HotDealsComp from '../../components/home/hotdealscomp';
import Header from '../../components/search-in-home/header';
import SearchedProductsList from '../../components/search-in-home/searched-products-list';
import { StatusBar } from 'expo-status-bar';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { NavigationProp } from '@react-navigation/native';
import useGetDocs from '../../hooks/get_docs';
import { UserDetails } from '../../contexts/myContext';
import PopularComp from '../../components/home/popular';
import { AnimatedScrollView } from 'react-native-reanimated/lib/typescript/reanimated2/component/ScrollView';

type HomeScreenNavigationProp = NavigationProp<any>;
const HomeScreen = ({navigation}: {navigation: HomeScreenNavigationProp}) => {
    const {height, width}= Dimensions.get('window');
    const [categoriesInHome, setCategoriesInHome] = useState<{name: string, key: string, img_url: string}[]>([])
    const [textToSearch, setTextToSearch] = useState<string>('')
    const mainPageOpacity = useSharedValue(1)
    const searchTop = useSharedValue(height+20)
    const mainPageAnimatedStyle= useAnimatedStyle(()=>({opacity:mainPageOpacity.value}))
    const searchPageAnimatedStyle= useAnimatedStyle(()=>({top:searchTop.value}))
    const textInputRef = React.useRef<TextInput>(null);
    const defaultTextInputConRef = useRef<TouchableOpacity>(null);
    const [showSearchBarOnly,setShowSearchBarOnly ] = useState<boolean>(false)
    const headerComponentScaleY = useSharedValue(1)
    const headerComponentOpacity = useSharedValue(1)
    const headerScaleY = useSharedValue(0)
    const headerOpacity = useSharedValue(0)
    const top = useSharedValue(0) //80
    // This is for the home screen
    const headerSearchRef = useRef<View>(null)
    // This is for the search screen
    const searchHeaderRef = useRef<View>(null)
    const scrollViewRef = useRef<AnimatedScrollView>(null)
    const context = useContext(UserDetails)
    const headerAnimatedStyle = useAnimatedStyle(()=>({transform:[{scaleY:headerScaleY.value}], opacity:headerOpacity.value}))
    const headerComponentAnimatedStyle = useAnimatedStyle(()=>({transform:[{scaleY:headerComponentScaleY.value}], opacity:headerComponentOpacity.value}))
    const topStyle =useAnimatedStyle(()=>({top:top.value}))

    useEffect(()=>{
        (async()=>{
            await useGetDocs('categories',setCategoriesInHome,context?.userEmail)
        })()
    },[])
    const bringUpSearch =()=>{
        mainPageOpacity.value= withTiming(0, {duration: 500})
        searchTop.value= withTiming(0, {duration: 500})
        textInputRef.current?.focus()
    }
    // This is for bringing down search if brought up by clicking the textInput field
    const bringDownSearch =()=>{ 
        mainPageOpacity.value= withTiming(1, {duration: 300})
        searchTop.value= withTiming(height+20, {duration: 300})
        textInputRef.current?.blur()
     }
    //  when scrolling down
    const handleScroll =(event: any)=>{
            if (headerSearchRef.current){
                defaultTextInputConRef.current?.measure((x, y, width, height, pX, pY)=>{
                    if (pY<=10 ){
                        headerComponentScaleY.value = withTiming(0,{duration:200})
                        headerComponentOpacity.value = withTiming(0,{duration:500})
                        headerScaleY.value = withTiming(1,{duration:500})
                        headerOpacity.value = withTiming(1,{duration:500})
                        top.value = withTiming(-120,{duration:500})
                    }
                    
                })
            }
    }
    // This is for bringing down search if brought up by scrolling
    const bringDownSearch2 =()=>{
        headerComponentScaleY.value = withTiming(1,{duration:500})
        headerComponentOpacity.value = withTiming(1,{duration:500})
        headerScaleY.value = withTiming(0,{duration:500})
        headerOpacity.value = withTiming(0,{duration:500})
        top.value = withTiming(0,{duration:500})
        scrollViewRef.current?.scrollTo({x:0,y:0,animated:false})
    }
    return (
        <View style={{ flex: 1, }}>
            <Animated.View style={[{transformOrigin: 'center top', position:'absolute', zIndex:66, width:'100%', }, headerAnimatedStyle]}>
                    <Header bringDownSearch2={bringDownSearch2}  textInputRef={textInputRef} setTextToSearch={setTextToSearch} onArrowBackClicked={bringDownSearch}  />
            </Animated.View>
            <StatusBar style='light' backgroundColor='#572C4B' />
            <Animated.ScrollView ref={scrollViewRef} scrollEventThrottle={16} onScroll={handleScroll} style={[{},mainPageAnimatedStyle ]}>
                <View>
                    <Animated.View style={[{transformOrigin: 'center top'},headerComponentAnimatedStyle]}>
                        <HeaderComponent headerSearchRef={headerSearchRef} defaultTextInputConRef={defaultTextInputConRef} onTextInputClicked={bringUpSearch} />
                    </Animated.View>
                    <Animated.View style={topStyle}>
                        <CategoriesList categories={categoriesInHome} navigation={navigation} />
                        <HotDealsComp categories={categoriesInHome} navigation={navigation} />
                        <PopularComp categories={categoriesInHome} navigation={navigation} />
                    </Animated.View>
                    
                </View>
            </Animated.ScrollView>
             
            <Animated.View style={[{flex:1,position:'absolute',width, height,  }, searchPageAnimatedStyle]}>
                <Header  textInputRef={textInputRef} setTextToSearch={setTextToSearch} onArrowBackClicked={bringDownSearch}  />
                <SearchedProductsList  searchHeaderRef={searchHeaderRef} categories={categoriesInHome} textToSearch={textToSearch} navigation={navigation} />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default HomeScreen;



