import React, {useState, useEffect} from 'react';
import {Provider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {theme} from '../core/theme';
import 'react-native-gesture-handler';
import {LoginFinger, LoginUser, Register, Home, Profile} from '../screens';
import {firebaseAuth} from '../enviroment/config.js';

const Stack = createStackNavigator();
export default () => {
  const [intialRoute, setIntialRoute] = useState('Home');
  useEffect(() => {
    firebaseAuth.onAuthStateChanged(
      (user) => {
        if (user) {
          setIntialRoute('Profile');
        } else {
          setIntialRoute('Home');
        }
      },
      (err) => {
        setIntialRoute('Home');
      },
    );
  }, []);

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={intialRoute}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="LoginFinger" component={LoginFinger} />
          <Stack.Screen name="LoginUser" component={LoginUser} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
