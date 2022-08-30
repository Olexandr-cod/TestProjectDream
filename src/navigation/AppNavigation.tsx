import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/Login/LoginScreen';
import HomeScreen from '../screens/Home/HomeScreen';

const Stack = createStackNavigator();
const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitle: '',
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerTitle: 'Login'}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerTitle: 'Home', headerBackTitle: 'Log Out'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
