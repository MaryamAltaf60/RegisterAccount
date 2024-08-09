import { StyleSheet, Text, View, TextInput,TouchableOpacity, Image} from 'react-native'
 import React from 'react'
 import CustomInput from '../Components/CustomInput'
import CustomButton from '../Components/CustomButton'
const SignupScreen = () =>{
  return (
    <View style={{justifyContent:'center',backgroundColor:'white',flex:1}}>
        <View>
          <Text style={{fontSize:30, fontWeight:'bold',textAlign:'center', color:'#1F41BB', marginBottom:10}}>
            Create Account </Text>
          <Text style={{fontSize:14,fontWeight:'medium',textAlign:'center',color:"#000000", marginBottom:20}}>
            Create an account so ypu can explore all the existing jobs </Text>
       </View>
      <View style={{alignItems:'center', justifyContent:'center', marginTop:10}}>
        <CustomInput placeholder={'Email'} keyType={'email-address'}/>
        <CustomInput placeholder={'Password'} keyType={'default'}/>
        <CustomInput placeholder={'Confirm Password'} keyType={'default'}/>
       <CustomButton />
         <Text style={styles.text}>Already have an account</Text>
       </View>
     <View style={{alignItems:'center',justifyContent:'center',marginTop:25}}>
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
export default SignupScreen
const styles = StyleSheet.create({
 text:{
  fontSize:14,fontWeight:'semibold', marginTop:15,
 },
 continueText:{
  fontSize:16, fontWeight:'semibold',color:'#1F41BB', marginTop:10
 },
 images:{
  width:60, height:44, marginEnd:15
  }
 })
