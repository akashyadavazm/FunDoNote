import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../utils/Dimentions";

const FormButton = ({buttonTitle, onPress, ...rest}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.buttonContainer} {...rest}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    );
  };

export default FormButton;

styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 20,
        width: '100%',
        height: windowHeight / 19,
        backgroundColor: 'green',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
      },
})