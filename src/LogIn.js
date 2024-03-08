import React,{ useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import FormInput from "./button/FormInput";
import FormButton from './button/FormButton';
import Background from './Background';
import { useAuth } from './navigation/AuthProvider';
import { useNavigation } from '@react-navigation/native';

const LogIn = (props) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const nav = useNavigation();
    const {loginHandle} = useAuth();
    
    const handleLogin = async () => {
      try {
        await loginHandle(email, password);
        console.log('Email:', email);
        console.log('Password:', password);
        // Navigate to the screen upon successful sign-in
        nav.navigat
        nav.navigate('OnBoarding', {screen : 'OnBoarding'});
      } catch (error) {
        Alert.alert('Error')
      }
    }
    
    return (
      <Background >
          
          <View style={styles.container}>
          
            <View >
              { <Image
                source = {require('./logo/fundoNotesLogo.png')}
                style = {styles.logo}
              /> }
            </View>
            
            <Text style = {styles.text}> FunDo Notes</Text>
            
              { 
                <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                />

              }

              { 
                <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
                />
              }

              <FormButton
                buttonTitle="Log In"
                onPress={() => handleLogin(email, password)}
              />

              <TouchableOpacity style={styles.forgotButton}
                onPress={() => {}}>
                <Text style={styles.navButtonText}>
                  Forgot Password?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => props.navigation.navigate('SignUp')}>
                <Text style={styles.navButtonText}>
                    Don't have an acount?
                </Text>
            </TouchableOpacity>
          </View>
        </Background>
    )
}

export default LogIn;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      width : 380,
    },
    logo: {
      height: 150,
      width: 150,
      margin: 10,
    },
    text: {
      fontSize: 40,
      margin : 10,
      color: 'white',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 20
    },
    navButtonText: {
      fontSize: 20,
      color: 'white',
    },
  });