import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/maintab/home';
import CheckoutScreen from './screens/inStack_navigator/checkout';
import SplashTabs from './screens/inStack_navigator/splashtabs';
import MainTabs from './screens/inStack_navigator/main';
import ProductDetails from './screens/inStack_navigator/product_details';

export default function App() {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ProductDetails'>
        <Stack.Screen name="checkout" component={CheckoutScreen} />
        <Stack.Screen name="main" options={{headerShown:false}} component={MainTabs} />
        <Stack.Screen name="splashtabs" options={{headerShown:false}} component={SplashTabs} />
        <Stack.Screen name="product_details" options={{headerShown:false}} component={ProductDetails} />
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
