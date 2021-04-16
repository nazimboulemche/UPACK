import React from 'react';
import { StyleSheet,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { screensEnabled } from 'react-native-screens';

import Dashboard from './src/screens/dashboard';
import { Parametre } from './src/screens/parametre';
import { Edit } from './src/screens/changeprofile';
import { Bugg } from './src/screens/bug';
import Condition from './src/screens/conditions';
import Delete from './src/screens/deleteaccount';
import signalerVolOuPerte from './src/screens/signalerVolOuPerte';
import annonceDetail from './src/screens/annonceDetail';
import signalerUneAnnonce from './src/screens/signalerUneAnnonce';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import StartScreen from './src/screens/StartScreen';

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='StartScreen'>
     
      <Stack.Screen name="SplashScreen" component={Dashboard} />
      <Stack.Screen name="Parametres" component={Parametre} />
      <Stack.Screen name="EditProfile" component={Edit} />
      <Stack.Screen name="ReportBug" component={Bugg} />
      <Stack.Screen name="APropos" component={Condition} />
      <Stack.Screen name="DeleteAccount" component={Delete} />
      <Stack.Screen name="signalerVolOuPerte" component={signalerVolOuPerte} />
      <Stack.Screen name="annonceDetail" component={annonceDetail} />
      <Stack.Screen name="signalerUneAnnonce" component={signalerUneAnnonce} />
      <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="StartScreen" component={StartScreen} />
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

