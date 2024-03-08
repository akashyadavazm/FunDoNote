import React, {createContext, useContext, useState} from "react";
import auth from '@react-native-firebase/auth';
import { Alert } from "react-native";


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    
    const signUpHandle = async (email, password) => {
        try {
          const response = await auth().createUserWithEmailAndPassword(email, password).then(() => {
            Alert.alert("User Created");
          });
          setUser(response.user);
        } catch (error) {
          console.error('Error signing up:', error.message);
        }
      };

    const loginHandle = async(email, password) => {
        try{
            const responseLogin = await auth().signInWithEmailAndPassword(email,password);
            setUser(responseLogin.user);
        } catch(error) {
            console.error('Error login', error.message);
        }
    };

    const logOutHandle = async(email, password) => {
        try{
            const responseLogOut = await auth().signOut(email, password);
            setUser(responseLogOut.user);
        }catch (error){
            console.error('Error Logout', error.message);
        }
    };

      const value = {
        user,
        signUpHandle,
        loginHandle,
        logOutHandle,
      }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);