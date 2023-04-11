import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PreRegister from './screens/PreRegister.jsx';
import Login from './screens/Login.jsx';
import Registration from './screens/Registration.jsx';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="PreRegister"
          component={PreRegister}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;