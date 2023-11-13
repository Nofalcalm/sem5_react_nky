import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreens from './screens/HomeScreens'
import DetailsScreens from './screens/DetailsScreens'
import PaymentScreens from './screens/PaymentScreens'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Details" component={DetailsScreens} options={{animation:'slide_from_bottom'}}></Stack.Screen>
        </Stack.Navigator>
     </NavigationContainer>
    );  
};

export default App;

const style =StyleSheet.create({});