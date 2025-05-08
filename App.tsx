import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import CheckoutScreen from './screens/inStack_navigator/checkout';
import SplashTabs from './screens/inStack_navigator/splashtabs';
import MainTabs from './screens/inStack_navigator/main';
import ProductDetails from './screens/inStack_navigator/product_details';
import CreateAccount from './screens/auth/createaccount';
import PersonalInformation from './screens/auth/personalinfo';
import Login from './screens/auth/login';
import ProductsInCategory from './screens/inStack_navigator/products_in_category';
import AllCategoriesComp from './screens/inStack_navigator/all_categories';
import { useState } from 'react';
import { CategoriesContext, UserDetails } from './contexts/myContext';
import { ProductsData } from './Types/product_data';
import ProductsInDeals from './screens/inStack_navigator/products_in_deals';

export default function App() {
  const Stack = createStackNavigator()
  const [userEmail, setUserEmail] = useState<string>('')
  const [categoriesGlobal, setCategoriesGlobal] = useState<{name: string, key: string, img_url: string}[]>([])
  return (
    <CategoriesContext.Provider value={{categoriesGlobal, setCategoriesGlobal}}>
      <UserDetails.Provider value={{userEmail, setUserEmail}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="splashtabs"  screenOptions={{headerTitleAlign:'center'}}>
            <Stack.Screen name="splashtabs" options={{headerShown:false}} component={SplashTabs} />
            <Stack.Screen name='create_account' options={{headerShown:true, title:'Create your account', headerTitleAlign:'center', headerStyle:{height:70}}} component={CreateAccount} />
            <Stack.Screen name='personal_info' component={PersonalInformation} options={{title:'Personal Information'}} />
            <Stack.Screen name='login' options={{headerShown:false}} component={Login} />
            <Stack.Screen name="main" options={{headerShown:false}} component={MainTabs} />
            <Stack.Screen name="product_details" options={{headerShown:false}} component={ProductDetails} />
            <Stack.Screen name="checkout" options={{headerShown:false}} component={CheckoutScreen} />
            <Stack.Screen name='products_in_category' options={{headerShown:true, title:'Products in Category',headerStyle:{height:70}}} component={ProductsInCategory} />
            <Stack.Screen name='all_categories' options={{headerShown:true, title:'Categories',headerStyle:{height:70}}} component={AllCategoriesComp} />
            <Stack.Screen name='products_in_deals' options={{headerShown:true, title:'Products in Deals',headerStyle:{height:70}}} component={ProductsInDeals} />
          </Stack.Navigator>
        </NavigationContainer>
      </UserDetails.Provider>
    </CategoriesContext.Provider>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
