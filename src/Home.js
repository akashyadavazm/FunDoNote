import React from 'react';
import {StyleSheet, View, Text } from 'react-native';
import Background from "./Background"
import Btn from './button/Btn';
import { darkGreen, green } from './Constants';


const Home = (props) => {
    return(
        <Background>
             <View style={styles.container}>
                <Text style={styles.textStyle}> Let's start </Text>
                <Text style={styles.textStyle}> Working </Text>
                <Btn bgColor='green' textColor='white' btnLabel="Login" Press = {() => props.navigation.navigate("LogIn")}/>
                <Btn bgColor='white' textColor={darkGreen} btnLabel="Signup" Press = {() => props.navigation.navigate("SignUp")}/>
            </View>
        </Background>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        alignItems: 'center',
        marginVertical: 200,
    },
    textStyle: {
        color: 'white',
        fontSize: 64,
    },
})

