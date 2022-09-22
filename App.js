import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,TouchableOpacity, View ,TouchableWithoutFeedback,Keyboard} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './assets/Home';
import Second from './assets/Second'
import styles from './assets/style';
import { Formik } from "formik";
import CreateNgo from './assets/CreateNgo';
import ADD_DONAR from './assets/ADD_DONAR'
// import Buttundesign from "./Buttundesign";

const Stack= createNativeStackNavigator();

const App= ()=>{
  return (
  <NavigationContainer>
    <Stack.Navigator>
     
      <Stack.Screen component={Home} name='Home'/>
      <Stack.Screen component={Second} name='Second'/>
      <Stack.Screen component={CreateNgo} name='CreateNgo'/>
      <Stack.Screen component={ADD_DONAR} name='ADD_DONAR'/>



    </Stack.Navigator>
  </NavigationContainer>
  );
};

 export default App;