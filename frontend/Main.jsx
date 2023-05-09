import { View, Text, SafeAreaView , StatusBar, Platform} from 'react-native'
import React from 'react'
import  { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/Home'
import ProductDetails from './screens/ProductDetails'
import  Toast  from 'react-native-toast-message'



const Stack = createNativeStackNavigator()

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'  screenOptions={{headerShown:false}}>
        <Stack.Group>
          <Stack.Screen name="home" component={Home}/>
          <Stack.Screen name="productdetails" component={ProductDetails}/>
        </Stack.Group>
      </Stack.Navigator>
      {/* position du message Toast  avec offset possible avec topOffset*/}
      <Toast position="top"  />
    </NavigationContainer>
    
  )
}

export default Main