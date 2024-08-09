import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomInput = (prop) => {
  return (
    <TextInput
     placeholder= {prop.placeholder}
      keyboardType={prop.keyType}
      secureTextEntry={true}
      style={styles.inputText}
    
     />
  )
}

export default CustomInput

const styles = StyleSheet.create({
    inputText:{
        width:'90%',height:64,borderWidth:1,borderColor:'#E8E7E9', backgroundColor:'#F1F4FF',borderRadius:10, marginBottom:15
      },
})