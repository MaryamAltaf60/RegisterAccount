import { StyleSheet, Text, View,Image,TouchableOpacity,TextInput,FlatList } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
const dishes = [
  {
    id:'1',
    image:require('../Images/Frame34544.png')
  },
  {
    id:'2',
    image:require('../Images/Frame34545.png')
  },
    {
      id: '3',
      name: 'Chicken Masala',
      time: '20min',
      rating: 4.5,
      price: 20.50,
      image:require('../Images/Ellipse49.png')
    },
    {
      id: '4',
      name: 'Chicken Masala',
      time: '20min',
      rating: 4.5,
      price: 20.50,
      image:require('../Images/Ellipse49(1).png')
    },
    {
      id: '5',
      name: 'Chicken Masala',
      time: '20min',
      rating: 4.5,
      price: 20.50,
      image:require('../Images/Ellipse49(2).png')
    },
    {
      id: '6',
      name: 'Chicken Masala',
      time: '20min',
      rating: 4.5,
      price: 20.50,
      image:require('../Images/Ellipse49(3).png')
    },
  ]
  
const HomeScreen = () => {
  return(
      <View style={{backgroundColor:'black',flex:1}}>
    <View style={styles.container}>
      <Image
      source={require('../Images/Ellipse.png')} style={styles.profileImage}/>
      <View style={styles.textContainer}>
        <Text style={styles.greeting}>Hi Ime,</Text>
        <View style={styles.locationContainer}>
          <Entypo name="location-pin" size={20} color="#fff"/>
          <Text style={styles.locationText}>23 Lubge, Abuja</Text>
        </View>
      </View>
      <Feather name="menu" size={30} color="#fff" style={styles.menuIcon}/>
    
   </View>
   <View style={styles.inputContainer}>
      <Feather name="search" size={30} color="#fff" />
      <TextInput
        style={styles.input}
        placeholder="Search salads"
        placeholderTextColor="#fff"
      />
      <Feather name="filter" size={30} color="#fff" />
    </View>
    <View>
      <FlatList 
      data={dishes}
      numColumns={2}
       renderItem={({item, index})=>{
      return(
    <View style={styles.imageContainer}>
      <Text style={styles.title}>Explore Delicious Dishes</Text>
      <Image source={item.image}/>
      </View>
      
      )
    }}
    />
    </View>
      <View style={styles.sectionHeader}>
        <Text style={styles.popularText}>Popular</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See All</Text>
        </TouchableOpacity>
      </View>
      
    
      
    
      
      
      <View>
      <FlatList 
      data={dishes}
      numColumns={2}
       renderItem={({item, index})=>{
      return(
        
        <View style={styles.card}>
            <View style={{flexDirection:'row',alignContent:'flex-end'}}>
       < EvilIcons name="heart" size={30} color="#fff" />
       </View>
       <Image source={item.image}/>
       <Text style={styles.name}>{item.name}</Text>
       <View style={{flexDirection:'row'}} >
       <Text style={styles.time}>{item.time}</Text>
      < AntDesign name="staro" size={20} color="yellow"/>
      <Text style={styles.rating}>{item.rating}</Text>
        </View>
        <View style={{ width:'40%',height:30,borderWidth:1,borderColor:'FAF9FF', backgroundColor:'black',borderRadius:30, marginBottom:15,flexDirection:'row' }}>
        <Text style={styles.price}>${item.price}</Text>
       <TouchableOpacity style={styles.button}>
        <AntDesign name="plus" size={20} color="#fff"/>
        
      </TouchableOpacity>
      </View>
      </View>
       
    )
    }} 
     />
</View>
      {/* <View style={{ flexDirection:'row', alignItems:'center', padding:16, backgroundColor:'#131313',justifyContent:'space-between'}}>
       <AntDesign name="home" size={20} color="blue"/>
       <Text style={{marginTop:10, color:'blue'}}>Home</Text>
       <AntDesign name="setting" size={20} color="#A0A0A0"/>
       <Text style={{marginTop:10, color:'#A0A0A0'}}>Setting</Text>
      
      </View> */}
      
  </View>
   )
    
  }

export default HomeScreen

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    padding:16,
    backgroundColor:'#101010'
  },
  profileImage:{
    width:50,
    height:50,
    borderRadius:25,
  },
  textContainer:{
    flex:1,
    marginLeft:10,
  },
  greeting:{
    color:'#fff',
    fontSize:18,
    fontWeight:'bold',
  },
  locationContainer:{
    flexDirection:'row',
    alignItems:'center',
  },
  locationText:{
    color:'#fff',
    marginLeft:5,
  },
  menuIcon:{
    marginLeft:10,
  },
 inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    color: '#fff',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#000',
    padding: 20
  },
  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  image: {
    width: '48%',
    height: 100,
    borderRadius: 10
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  popularText: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#fff'
  },
  seeAllText: {
    fontSize: 14,
    color: '#2F05FF'
  },
  list: {
    alignItems: 'center'
  },
  card: {
    width:'46%',
    height:225,
    margin:7,
    justifyContent:'space-between',
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center'
  },
  dishIimage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  name: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5
  },
  time: {
    color: '#ccc',
    marginBottom: 5
  },
  rating: {
    color: '#fff',
    marginBottom: 5
  },
  price: {
    color: '#fff',
    marginBottom: 10
  },
  button: {
    width:'60%',
    height:35,
    backgroundColor: '#0000ff',
    borderRadius: 30,
    padding: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 10
  },
});

    
