import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image } from 'react-native'
import React from 'react'
import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'

const LoginScreen = () => {
  return (
    <View style={{justifyContent:'center',backgroundColor:'white',flex:1}}>
        <View>
          <Text style={{fontSize:30, fontWeight:'bold',textAlign:'center', color:'#1F41BB', marginBottom:15}}>
            Login here
          </Text>
          <Text style={{fontSize:20,fontWeight:'SemiBold',textAlign:'center',color:"#000000",}}>
          Welcome back you’ve been missed!
          </Text>
        </View>
    <View style={{alignItems:'center', justifyContent:'center', marginTop:10}}>
    <CustomInput placeholder={'Email'} keyType={'email-address'} />
     <CustomInput placeholder={'Password'} keyType={'default'}/>
      </View>
       <View>
        <Text style={styles.forgotpassword}>Forgot your password?</Text>
        </View>
       <View style={{justifyContent:'center', alignItems:'center'}}>
          <CustomButton/>
         <Text style={styles.text}>Create new account</Text>
        </View>
     <View style={{alignItems:'center',justifyContent:'center',marginTop:15}}>
        <Text style={styles.continueText}>or continue with </Text>
      <View style={{flexDirection:'row'}}>
          <Image
          source={require('../Images/google.png')}
          style={styles.images}
          />
         <Image
          source={require('../Images/facebook.png')}
          style={styles.images}
          />
          <Image
          source={require('../Images/apple.png')}
          style={styles.images}
         />
         </View>
         </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
   text:{
     fontSize:17,fontWeight:'semibold', marginTop:17,color:'#100F0F', marginBottom:25,
    },
    continueText:{
     fontSize:17, fontWeight:'semibold',color:'#1F41BB', marginTop:15
    },
    images:{
      width:60, height:44, marginEnd:15, marginTop:5,
      
     }
})


