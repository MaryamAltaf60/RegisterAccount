import { StyleSheet, Text, View,TextInput,Button, FlatList } from 'react-native'
import React, {useState} from 'react'
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ContactScreen = () => {
    const [name,setName] =useState('')
    const [phone,setPhone] =useState('')
    const [contacts,setContacts]=useState([])
    const [searchInput,setSearchInput]=useState([])
    const [showSearch,setShowSearch]=useState(false)

    const SaveContact = () => {
        const contact=[...contacts,{name,phone}]
        setContacts(contact)
       }
    const Delete = (phone)=>{
        const updatedContacts=contacts.filter((text)=>text.phone!==phone)
        setContacts(updatedContacts)
        }
    const Search= ()=>{
        const searchContacts=contacts.filter((text)=>text.name==name)
         setShowSearch(true)
    }
  return (
    <View style={styles.container}>
              <Text style={{fontSize:30, fontWeight:'bold',textAlign:'center', color:'#1F41BB', marginBottom:10}}>Contacts</Text>
        <View style={styles.inputContainer}>
        <Feather name="search" size={30} color="black" />
    <TextInput
        placeholder="Search Name"
        onPress={()=>Search(searchInput)}
        onChangeText={(text) => setSearchInput(text)}
    />
    </View>
    <Text style={{fontSize:30, fontWeight:'bold',textAlign:'center', color:'#1F41BB', marginBottom:10}}>Create new contact</Text>
        <View style={styles.inputContainer}>
        <AntDesign name="user" size={30} color="black" />
    <TextInput
        placeholder="Enter Name"
        onChangeText={text => setName(text)}
    />
    </View>
     
    <View style={styles.inputContainer}>
        <Ionicons name="call-outline" size={30} color="black" />
    <TextInput
        placeholder="Enter Phone"
        onChangeText={text => setPhone(text)}
    />
    </View>
    <View>
     <Button title="Save Contact" onPress={SaveContact}/> 
      </View>
    
  {showSearch? <FlatList
        data={Search}
        renderItem={(({item,index})=>{
            return(
                <View>
                    <Text>{item.name}</Text>
                </View>
            ) } ) }
        />:
         <FlatList
        data={contacts}
        renderItem={(({item,index})=>{
            return(
                <View>
                    <Text>{item.name}</Text>
                    <Text>{item.phone}</Text>
                    <Button title="Delete"  onPress={()=>Delete(item.phone)} />
               </View>
            ) } ) }
        />}
         </View>
  )
}

export default ContactScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor:'#C4BAB7'
    },

     inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderColor:'black',
        marginBottom:10,
      },
})