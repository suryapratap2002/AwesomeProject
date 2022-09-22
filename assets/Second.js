import React from 'react'
import { StyleSheet, Text,TouchableOpacity, View ,Button} from 'react-native';
import styles from './style';

const Second=({navigation})=>{
  return(
    <View style={{alignItems:'center'}}>
    <Text>
      SEcond Page
    </Text>
    <Button title='Go back' onPress={()=>navigation.navigate('Home')}/>
  </View>
  );

};
 export default Second
