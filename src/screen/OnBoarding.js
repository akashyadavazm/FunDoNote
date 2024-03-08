import React from "react";
import { View, Text, StyleSheet } from "react-native";

const OnBoarding = () => {

    

    return(
        <View style = {styles.text}>
            <Text> Hello Now I'm there </Text>
        </View>
    )
}

export default OnBoarding;

const styles = StyleSheet.create({
    text : {
        margin : 60,
        borderColor: 'blue',
        borderRadius: 10,
        fontSize : 20,
    }
});