import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const WelcomeScreen = () => {
  return (
    <View style={{flex:1, alignItems:'center', backgroundColor:'#FFFFFF'}}>
     <View>
      <Image
      source={require('../Images/welcome.png')}
      style={styles.image}
      />
      </View>
      <View>
        <Text style={{fontSize:35, fontWeight:'semibold',textAlign:'center', color:'#1F41BB', marginTop:20, marginBottom:10, marginStart:20, marginEnd:20}}>
          Discover Your Dream Job here
          </Text >
          <Text style={{fontSize:16,fontWeight:'regular',textAlign:'center',color:"#000000",margin:20,justifyContent:'center'}}>
          Explore all the existing job roles based on your interest and study major
             </Text>
           </View>
           <View style={{flexDirection:'row', marginTop:30}}>
          <TouchableOpacity style={styles.loginButton} onPress={()=>console.log('Login, done')}>
          <Text style={styles.buttonText}>
            Login
             </Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.registerButton} onPress={()=>console.log('Register, done')}>
          <Text style={styles.registerbuttonText}>
            Register
            </Text>
            </TouchableOpacity>
            </View>
      </View>  
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
  image:{
    height:370,
    width:363, 
  },
  loginButton:{
    backgroundColor:'#1F41BB', height:60,width:'40%',marginTop:20,borderWidth:1,borderColor:'#1F41BB', justifyContent:'center', borderRadius:10
    },
   buttonText:{
     fontSize:20, fontWeight:'semibold', textAlign:'center', color:'#FFFFFF',
    },
   registerButton:{
      backgroundColor:'white', height:60,width:'40%',marginTop:20,borderWidth:1,borderColor:'#FFFFFF', justifyContent:'center', borderRadius:10
      },
   registerbuttonText:{
        fontSize:20, fontWeight:'semibold', textAlign:'center', color:'#0A0A0A',
       },
       
})

