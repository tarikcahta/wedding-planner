import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PreRegister from './screens/PreRegister.jsx';
import Login from './screens/Login.jsx';
import Home from './screens/Home.jsx';
import Registration from './screens/Registration.jsx';
import Summary from './screens/Summary.jsx';
import MyWedding from './screens/MyWedding.jsx';
import WishList from './screens/WishList.jsx';
import {StyleSheet , Text, Icon} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator screenOptions={{
      drawerPosition: 'right', 
      drawerStyle: {backgroundColor: '#ccab79cb', width: '80%', color:'white'}, 
      drawerLabelStyle: {textAlign: 'center', color: 'white', fontSize: 25},
      drawerItemStyle: {backgroundColor: 'rgba(144, 104, 40, 0.47)', marginTop: 40},
      headerTintColor: '#fff',
      headerTransparent: true,
      headerTitle: '',
      headerShown: false,
      
    }}>

      <Drawer.Screen name="PreRegister" component={PreRegister} options={{headerShown: false, drawerItemStyle: {display: 'none'}}}/>    
      <Drawer.Screen name="Login" component={Login} options={{headerShown: false, drawerItemStyle: {display: 'none'}}}/>
      <Drawer.Screen name="Registration" component={Registration} options={{headerShown: false, drawerItemStyle: {display: 'none'}}}/>
      <Drawer.Screen name="Home" component={Home} options={{headerShown: true, drawerContentContainerStyle: {paddingTop: 60}}}/>
      <Drawer.Screen name="Summary" component={Summary} options={{headerShown: true}}/>
      <Drawer.Screen name="My wedding" component={MyWedding} options={{headerShown: true}}/>
      <Drawer.Screen name="Wish list" component={WishList} options={{headerShown: true}}/>

      <Drawer.Screen name="Log out" component={Login} options={{headerShown: true, drawerItemStyle: {display: 'none'}, drawerItemStyle: {backgroundColor: 'rgba(144, 104, 40, 0.47)', marginTop: 250},}}/>
    </Drawer.Navigator>
  );
}


const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>

          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
};



export default App;