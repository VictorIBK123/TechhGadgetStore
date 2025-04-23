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

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='login'  screenOptions={{headerTitleAlign:'center'}}>
        <Stack.Screen name="splashtabs" options={{headerShown:false}} component={SplashTabs} />
        <Stack.Screen name='create_account' options={{headerShown:true, title:'Create your account', headerTitleAlign:'center'}} component={CreateAccount} />
        <Stack.Screen name='personal_info' component={PersonalInformation} options={{title:'Personal Information'}} />
        <Stack.Screen name='login' options={{headerShown:false}} component={Login} />
        <Stack.Screen name="main" options={{headerShown:false}} component={MainTabs} />
        <Stack.Screen name="product_details" options={{headerShown:false}} component={ProductDetails} />
        <Stack.Screen name="checkout" options={{headerShown:false}} component={CheckoutScreen} />
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
