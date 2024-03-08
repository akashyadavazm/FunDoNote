import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({labelValue, placeholderText, iconType, ...rest}) => {


  const [error, setError] = useState({field : '', message : ''})

  const onSubmit = () => {
    let logInError = {field : '', message : ''};
    if (email === ''){
        logInError.field = 'email';
        logInError.message = 'Email is required';
        setError(logInError);
    }else if (password === ''){
        logInError.field = 'password';
        logInError.message = 'Password is required';
        setError(logInError);
    }

  }

  return (
    <View style={styles.inputContainer}>
      
      <View style={styles.iconStyle}>
        <AntDesign name={iconType} size={20} color="darkgreen" />
      </View>
      
      <TextInput
        value={labelValue}
        style={styles.input}
        numberOfLines={1}
        placeholder={placeholderText}
        placeholderTextColor="darkgreen"
         {...rest}
      />
       {error.field === labelValue && (
        <Text style = {styles.error}>{error.message}</Text>
       )}
       {onSubmit}

    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    marginBottom: 10,
    height: 50,
    borderColor: 'blue',
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
    backgroundColor: 'lightgreen',
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: 'green',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 15,
  },
  error : {
    marginLeft : 30,
    marginTop : 10,
    color : 'red'
},

});