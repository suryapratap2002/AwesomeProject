import React from "react"
import { StyleSheet,View,TouchableOpacity,Text } from "react-native";
import styles from "./style"

const Buttundesign =({text,onPress})=>{
    return (
            <TouchableOpacity style={styles.Buttoncontainer}>
                <View>
                    <Text style={styles.Buttontext}> {text}</Text>
                </View>
            </TouchableOpacity>
    )
}

export default Buttundesign;