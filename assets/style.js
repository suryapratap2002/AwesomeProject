import { StyleSheet,Dimensions } from "react-native";
const styles = StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      backgroundColor:'grey',
      height:'100%',
      width:'100%'
    },
    Header:{
      paddingTop:60,
      alignItems:'center',
      backgroundColor:'grey',
      height:180
    },
    Body:
    {
     marginVertical:10

    },
    Buttoncontainer:
    {
      elevation: 8,
    backgroundColor: "grey",
    borderRadius: 0,
    paddingVertical: 12,
    paddingHorizontal: 60,
    marginVertical:30,
    Width:100,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    borderRadius:15
    },

    Buttontext:{
      fontSize:15,
      color:'white'
    },

    donar:{
        backgroundColor:'#36485f',
        flex:1,
        justifyContent:'center',
        paddingLeft:60,
        paddingRight:60,
        alignSelf:'stretch'
    },

    formheader:{
        fontSize:25,
        paddingBottom:10,
        marginBottom:40,
        borderBottomColor:'white',
        borderBottomWidth:1,
        color:'white'
    },
    inputtext:{
        color:'white',
        borderBottomColor:'white',
        borderBottomWidth:1,
        alignItems:'stretch',
        padding:10,
        height:40
        

    },
    abc:{
      padding:8,
      marginLeft:5,
      marginRight:5,
      marginTop:10,
      fontSize:15,
      alignContent:'center',
      borderBottomColor:'grey',
      borderWidth:1,
      borderRadius:15
    },
    abcd:{
      padding:8,
      marginLeft:5,
      marginRight:5,
      marginTop:10,
      marginBottom:10,
      fontSize:15,
      alignContent:'center',
      borderBottomColor:'grey',
      borderWidth:1,
      borderRadius:15
    },
    
    errortext:{
      color:'crimson',
      fontWeight:'bold',
      textAlign:'center',
      marginBottom:5,
      
    }

  });
  
  export default styles;