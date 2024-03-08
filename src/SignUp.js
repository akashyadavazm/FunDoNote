import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Platform, Alert } from 'react-native';
import FormInput from './button/FormInput';
import FormButton from './button/FormButton';
import Background from './Background';
import {useAuth } from './navigation/AuthProvider';
import SocialButton from './button/SocialButton';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const {signUpHandle} = useAuth();
    const handleSignup = () => {
       signUpHandle(email,password)
    }

    return (
        <Background>
        
          <View style = {styles.container}>

              <Text style = {styles.text}>
                  Create An Account
              </Text>

              <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />

              <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
              />

              <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)}
                placeholderText="Confirm Password"
                iconType="lock"
                secureTextEntry={true}
              />

              <FormButton
               buttonTitle="Sign Up"
               onPress={handleSignup}
              />

              <View style = {styles.textPrivate} >
                <Text style = {styles.color_textPrivate} >
                  By Regestering, you confirm that you accepts our{''} 
                </Text>
                <TouchableOpacity onPress={() => Alert('Terms Clicked!')} >
                  <Text style = {[styles.color_textPrivate, {color:"#e88832"}]} >Terms of service</Text>
                </TouchableOpacity>
                <Text style ={styles.color_textPrivate} > and </Text>
                <TouchableOpacity onPress={() => Alert('Privacy Policy')}>
                  <Text style = {[styles.color_textPrivate, {color:"#e88832"}]}> Privacy Policy </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.navButton}
                onPress={() => navigation.navigate('LogIn')}>
                <Text style={styles.navButtonText}>Do you have an account? Log In</Text>
              </TouchableOpacity>

          </View>
          {Platform.OS === "android" ? (
            <View>
              <SocialButton
            buttonTitle="Sign Up with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => {}}
          />
    
          <SocialButton
            buttonTitle="Sign Up with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {}}
          />

            </View>
          ) : null

          }

        </Background>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
      paddingTop : 100,
      alignItems: 'center',
      width : 380,
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 40,
      marginBottom: 10,
      color: 'white',
    },
    navButton: {
      marginTop: 15,
    },
    navButtonText: {
      fontSize: 20,
      marginVertical: 20,
      color: 'white',
    },
    textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginVertical: 35,
      justifyContent: 'center',
    },
    color_textPrivate: {
      fontSize: 13,
      fontWeight: '400',
      fontFamily: 'Lato-Regular',
      color: 'grey',
    },
})