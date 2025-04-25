import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
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

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='personal_info'  screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="splashtabs" options={{headerShown:false}} component={SplashTabs} />
        <Stack.Screen name='create_account' options={{headerShown:true, title:'Create your account', headerTitleAlign:'center'}} component={CreateAccount} />
        <Stack.Screen name='personal_info' component={PersonalInformation} options={{title:'Personal Information'}} />
        <Stack.Screen name='login' options={{headerShown:false}} component={Login} />
        <Stack.Screen name="main" options={{headerShown:false}} component={MainTabs} />
        <Stack.Screen name="product_details" options={{headerShown:false}} component={ProductDetails} />
        <Stack.Screen name="checkout" options={{headerShown:false}} component={CheckoutScreen} />
        <Stack.Screen name='products_in_category' options={{headerShown:true, title:'Products in Category'}} component={ProductsInCategory} />
        <Stack.Screen name='all_categories' options={{headerShown:true, title:'Categories'}} component={AllCategoriesComp} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
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
