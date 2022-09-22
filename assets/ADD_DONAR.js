import React from "react";
import {Formik } from "formik";
import styles from "./style";
import {Text,View,inputtext,TouchableWithoutFeedback,Keyboard,ScrollView,StyleSheet,TouchableOpacity,Button,TextInput} from 'react-native';
import * as yup from "yup";
import Buttundesign from "./Buttundesign";

const Donarschema= yup.object({
    Name:yup.string()
    .required('Required')
    .min(4),

    Email:yup.string()
    .required()
    .email(),

    Aadhar:yup.number()
    .required()
    .min(12),

    Mobile:yup.number()
    .required()
    .positive()
    .integer()
    .min(10),

    BloodGroup:yup.string()
    .required(),

    Times:yup.number(),

    Address:yup.string()
    .required(),

    OrgID:yup.number()
    .required()
})
const ADD_DONAR=({navigation})=>{
    return(
        <View style={{flex: 1,backgroundColor: 'white',alignContent:'center',justifyContent:'space-between'}}>           
         <Formik 
            initialValues={{
            Name:'' ,
            Email:'' ,
            Aadhar :'',
            Mobile:'',
            BloodGroup:'',
            Times:'',
            Address:'',
            OrgID:''}}

            validationSchema={Donarschema}
            onSubmit={(actions)=>{
                // console.log(values.Name);
                actions.resetForm();
            
            }}
            >
                {(props)=>(
                        <View>
                            <ScrollView>
                                <Text style={{margin:10,textDecorationLine:'underline', alignSelf:'center', fontSize:25}}>DONAR DETAILS</Text>
                            <TextInput 
                            style={styles.abc} 
                            placeholder ="Your name:"
                            onChangeText={props.handleChange('Name')}
                            value={props.values.Name}
                            onBlur={props.handleBlur('Name')}
                            />
                            <Text style={styles.errortext}>{props.touched.Name && props.errors.Name}</Text>
                            <TextInput 
                            style={styles.abc} 
                            placeholder ="Email:"
                            onChangeText={props.handleChange('Email')}
                            value={props.values.Email}
                            keyboardType='email-address'
                            onBlur={props.handleBlur('Email')}
                            />
                            <Text style={styles.errortext}>{props.touched.Email &&props.errors.Email}</Text>

                            <TextInput 
                            style={styles.abc} 
                            placeholder ="Aadhar number:"
                            onChangeText={props.handleChange('Aadhar')}
                            value={props.values.Aadhar}
                            keyboardType='number-pad'
                            onBlur={props.handleBlur('Aadhar')}
                            />
                            <Text style={styles.errortext}>{props.touched.Aadhar &&props.errors.Aadhar}</Text>

                            <TextInput 
                            style={styles.abc} 
                            placeholder ="Contact number:"
                            onChangeText={props.handleChange('Mobile')}
                            value={props.values.Mobile}
                            keyboardType='number-pad'
                            onBlur={props.handleBlur('Mobile')}
                            />
                            <Text style={styles.errortext}>{props.touched.Mobile &&props.errors.Mobile}</Text>

                            <TextInput 
                            style={styles.abc} 
                            placeholder ="Blood type:"
                            onChangeText={props.handleChange('BloodGroup')}
                            value={props.values.BloodGroup}
                            onBlur={props.handleBlur('BloodGroup')}
                            />
                            <Text style={styles.errortext}>{props.touched.BloodGroup &&props.errors.BloodGroup}</Text>

                            <TextInput 
                            style={styles.abcd} 
                            placeholder ="Times donated:"
                            onChangeText={props.handleChange('Times')}
                            value={props.values.Times}
                            keyboardType='numbers-and-punctuation'

                            />

                            <TextInput 
                            multiline minHeight={20}
                            style={styles.abc} 
                            placeholder ="Address:"
                            onChangeText={props.handleChange('Address')}
                            value={props.values.Address}
                            onBlur={props.handleBlur('Address')}
                            />
                            <Text style={styles.errortext}>{props.touched.Address &&props.errors.Address}</Text>

                             <TextInput 
                            style={styles.abc} 
                            placeholder ="Org Id:"
                            onChangeText={props.handleChange('OrgID')}
                            value={props.values.OrgID}
                            keyboardType='number-pad'
                            onBlur={props.handleBlur('OrgID')}
                            />
                            <Text style={styles.errortext}>{props.touched.OrgID &&props.errors.OrgID}</Text>

                            <Buttundesign text='SUBMIT' onPress={props.handleSubmit}/>
                     {/* <TouchableOpacity style={styles.Buttoncontainer} onPress={props.handleSubmit}><Text style={styles.Buttontext}>SUBMIT</Text></TouchableOpacity> */}
                            </ScrollView>
                        </View>
                )}
            </Formik>
        </View>
    )
};
export default ADD_DONAR