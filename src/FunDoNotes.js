import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from './Home';
import LogIn from './LogIn';
import SignUp from './SignUp';
import OnBoarding from "./screen/OnBoarding";
const Stack = createNativeStackNavigator();

const FunDONotes = () => {
  return(
    
    <NavigationContainer>
      
      <Stack.Navigator >
        <Stack.Screen name = " " component={Home}/>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="OnBoarding" component={OnBoarding}/>
      </Stack.Navigator>
    
    </NavigationContainer>
   
  )
}

export default FunDONotes;