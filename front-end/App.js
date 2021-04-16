import React from 'react';
import { StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { screensEnabled } from 'react-native-screens';

import Dashboard from './components/dashboard';
import { Parametre } from './components/parametre';
import { Edit } from './components/changeprofile';
import { Bugg } from './components/bug';
import Condition from './components/conditions';
import Delete from './components/deleteaccount';

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='SplashScreen'>
     
      <Stack.Screen name="SplashScreen" component={Dashboard} />
      <Stack.Screen name="Parametres" component={Parametre} />
      <Stack.Screen name="EditProfile" component={Edit} />
      <Stack.Screen name="ReportBug" component={Bugg} />
      <Stack.Screen name="APropos" component={Condition} />
      <Stack.Screen name="DeleteAccount" component={Delete} />
    </Stack.Navigator>
  </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#fff',
    paddingTop: 100,
    padding: 20,
  }
});

