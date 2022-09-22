import React from "react";
import { Form, Formik, validateYupSchema } from "formik";
import styles from "./style";
import {Text,View,inputtext,ScrollView,StyleSheet,TouchableOpacity,Button,TextInput} from 'react-native';
import * as yup from "yup";
import Buttundesign from "./Buttundesign";



const Ngoschema= yup.object({
    Unique_Registration_ID:yup.number()
    .required('Required'),

   NGO_Name:yup.string()
    .required()
    ,
    Date_of_Registration:yup.date().required(),

    Aadhar:yup.number()
    .required()
    .min(12),
    NGO_Type:yup.string().required(),
    NGO_URL:yup.string().url().required(),
    NGO_District:yup.string().required(),
    NGO_Address:yup.string().required(),
    NGO_State:yup.string().required(),



    NGO_Pan_Number:yup.string()
    .required()
    .min(10),
    CSR_Number:yup.number()
    .required(),

    NGO_Niti_Aayog:yup.string()
    .required()

   
})
const CreateNgo=({navigation}) =>{
    return(
        <View style={{flex: 1,backgroundColor: 'white',alignContent:'center',justifyContent:'space-between'}}>
            <Formik
            initialValues={{
                Unique_Registration_ID:'',
                NGO_Name:'',
                Date_of_Registration:'',
                NGO_Type:'',
                NGO_URL:'',
                NGO_Address:'',
                NGO_District:'',
                NGO_State:'',
                NGO_Pan_Number:'',
                CSR_Number:'',
                NGO_Niti_Aayog:'',
                }}
                validationSchema={Ngoschema}
            onSubmit={(actions)=>{
                
                actions.resetForm();
            }}>
            {(props)=>(
                <View><ScrollView>
                 <Text style={{margin:10,textDecorationLine:'underline', alignSelf:'center', fontSize:25}}>NGO DETAILS</Text>

                    <TextInput
                        style={styles.abc}
                        placeholder='Unique Registration ID :'
                        onChangeText={props.handleChange('Unique_Registration_ID')}
                        value={props.values.Unique_Registration_ID}
                        onBlur={props.handleBlur('Unique_Registration_ID')}

                    />
                       <Text style={styles.errortext}>{props.touched.Unique_Registration_ID && props.errors.Unique_Registration_ID}</Text>

                    <TextInput
                        style={styles.abc}
                        placeholder='NGO Name :'
                        onChangeText={props.handleChange('NGO_Name')}
                        value={props.values.NGO_Name}
                        onBlur={props.handleBlur('NGO_Name')}

                    />
  <Text style={styles.errortext}>{props.touched.NGO_Name && props.errors.NGO_Name}</Text>

                    <TextInput
                        style={styles.abc}
                        placeholder='Date of Registration :'
                        keyboardType='numeric'
                        onChangeText={props.handleChange('Date_of_Registration')}
                        value={props.values.Date_of_Registration}
                        onBlur={props.handleBlur('Date_of_Registration')}

                    />
                                           <Text style={styles.errortext}>{props.touched.Date_of_Registration && props.errors.Date_of_Registration}</Text>

                    <TextInput
                        style={styles.abc}
                        placeholder='NGO Type :'
                        onChangeText={props.handleChange('NGO_Type')}
                        value={props.values.NGO_Type}
                        onBlur={props.handleBlur('NGO_Type')}

                    />
                                           <Text style={styles.errortext}>{props.touched.NGO_Type && props.errors.NGO_Type}</Text>

                    <TextInput
                        style={styles.abc}
                        placeholder='NGO URL :'
                        onChangeText={props.handleChange('NGO_URL')}
                        value={props.values.NGO_URL}
                        onBlur={props.handleBlur('NGO_URL')}

                    />
                                           <Text style={styles.errortext}>{props.touched.NGO_URL && props.errors.NGO_URL}</Text>

                    <TextInput
                        style={styles.abc}
                        placeholder='NGO Address :'
                        onChangeText={props.handleChange('NGO_Address')}
                        value={props.values.NGO_Address}
                        onBlur={props.handleBlur('NGO_Address')}

                    />
                                           <Text style={styles.errortext}>{props.touched.NGO_Address && props.errors.NGO_Address}</Text>

                    <TextInput
                        style={styles.abc}
                        placeholder='NGO District :'
                        onChangeText={props.handleChange('NGO_District')}
                        value={props.values.NGO_District}
                        onBlur={props.handleBlur('NGO_District')}

                    />
                                           <Text style={styles.errortext}>{props.touched.NGO_District && props.errors.NGO_District}</Text>

                    <TextInput
                        style={styles.abc}
                        placeholder='NGO State :'
                        onChangeText={props.handleChange('NGO_State')}
                        value={props.values.NGO_State}
                        onBlur={props.handleBlur('NGO_State')}

                    />
                                           <Text style={styles.errortext}>{props.touched.NGO_State && props.errors.NGO_State}</Text>

                    <TextInput
                        style={styles.abc}
                        placeholder='NGO Pan Number :'
                        keyboardType='numeric'
                        onChangeText={props.handleChange('NGO_Pan_Number')}
                        value={props.values.NGO_Pan_Number}
                        onBlur={props.handleBlur('NGO_Pan_Number')}

                    />
                                           <Text style={styles.errortext}>{props.touched.NGO_Pan_Number && props.errors.NGO_Pan_Number}</Text>

                    <TextInput
                        style={styles.abc}
                        placeholder='CSR Number :'
                        keyboardType='numeric'
                        onChangeText={props.handleChange('CSR_Number')}
                        value={props.values.CSR_Number}
                        onBlur={props.handleBlur('CSR_Number')}

                    />
                                           <Text style={styles.errortext}>{props.touched.CSR_Number && props.errors.CSR_Number}</Text>

                    <TextInput
                        style={styles.abc}
                        placeholder='NGO Niti Aayog :'
                        keyboardType='numeric'
                        onChangeText={props.handleChange('NGO_Niti_Aayog')}
                        value={props.values.NGO_Name}
                        onBlur={props.handleBlur('NGO_Niti_Aayog')}

                    />
                                           <Text style={styles.errortext}>{props.touched.NGO_Niti_Aayog && props.errors.NGO_Niti_Aayog}</Text>

                        <Buttundesign text='SUBMIT' onPress={props.handleSubmit}/>
                     {/* <TouchableOpacity style={styles.Buttoncontainer} onPress={props.handleSubmit}><Text style={styles.Buttontext}>SUBMIT</Text> </TouchableOpacity> */}
                    </ScrollView>
                </View>
            )}
            </Formik>
        </View>
    )
}

  export default CreateNgo;