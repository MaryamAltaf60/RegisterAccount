import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const CustomButton = (props) => {
  return (
    <TouchableOpacity style={styles.signUpButton} onPress={()=>console.log('Sign up, done')}>
          <Text style={styles.buttonText } >
            Sign Up
             </Text>
         </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    signUpButton:{
        backgroundColor:'#1F41BB', height:64,width:'90%',marginTop:15,borderWidth:1,borderColor:'#1F41BB', justifyContent:'center', borderRadius:10
        },
     buttonText:{
         fontSize:20, fontWeight:'semibold', textAlign:'center', color:'#FFFFFF',
        },
})