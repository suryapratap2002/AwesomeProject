import React from 'react'
import { StyleSheet, Text,TouchableOpacity,Modal, View ,Button} from 'react-native';
import styles from './style';
import { useState } from 'react';

const Home=({navigation})=>{
    return (
      <View styles={styles.container}> 
      <View style={styles.Header}>
        <Text style={{fontSize:30,color:'red'}}>WELCOME</Text>
        <Text style={{fontSize:26,textDecorationLine:'underline',fontWeight:'bold'}}>BLOOD DONAR </Text>
      </View>
       <View style={styles.Body}>
        <TouchableOpacity  style={styles.Buttoncontainer} onPress={() => navigation.navigate('Second')}><Text style={styles.Buttontext}>GET NGO LIST</Text></TouchableOpacity>
        <TouchableOpacity  style={styles.Buttoncontainer} onPress={() =>navigation.navigate('CreateNgo')}><Text style={styles.Buttontext}>CREATE NGO</Text></TouchableOpacity>
        <TouchableOpacity  style={styles.Buttoncontainer}  onPress={() => navigation.navigate('Second')}><Text style={styles.Buttontext}>UPDATE NGO</Text></TouchableOpacity>
        <TouchableOpacity  style={styles.Buttoncontainer}  onPress={() => navigation.navigate('Second')}><Text style={styles.Buttontext}>DELETE NGO</Text></TouchableOpacity>
        <TouchableOpacity  style={styles.Buttoncontainer} onPress={() => navigation.navigate('ADD_DONAR')}><Text style={styles.Buttontext}>ADD  DONAR</Text></TouchableOpacity>
    
      </View>
   </View>

)};
export default Home