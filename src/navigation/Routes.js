import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import Home from '../Home';

const Routes = () => {

    const [user, setUser] = useContext(AuthContext);
    const [initializing, setInitializing] = useState(true);

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect( () => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [])

    if(initializing) return null;

    return(
        <NavigationContainer>
            {user ? <AuthStack/> : <Home/>}
        </NavigationContainer>
    );
}

export default Routes;