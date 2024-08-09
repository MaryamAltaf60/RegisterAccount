import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Modal,
  StyleSheet,
  Button,
  Alert,
} from 'react-native';

const ContactApp = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editedContact, setEditedContact] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = () => {
    const newContact = { name, phone };
    setContacts([...contacts, newContact]);
    setName('');
    setPhone('');
  };

  const handleEdit = (index) => {
    setEditedContact(contacts[index]);
    setModalVisible(true);
  };

  const handleUpdate = () => {
    const updatedContacts = contacts.slice();
    updatedContacts[editedContact.index] = editedContact;
    setContacts(updatedContacts);
    setModalVisible(false);
  };

  const handleDelete = (index) => {
    Alert.alert('Delete Contact', 'Are you sure?', [
      {
        text: 'Cancel',
        style: 'cancel',
    },
    {
      text: 'Delete',
      onPress: () => {
        const updatedContacts = contacts.slice();
        updatedContacts.splice(index, 1);
        setContacts(updatedContacts);
      },
    },
  ]);
};

const handleSearch = (text) => {
  setSearchQuery(text);
  const filteredContacts = contacts.filter((contact) =>
    contact.name.includes(text) || contact.phone.includes(text)
  );
  setContacts(filteredContacts);
};

return (
  <View style={styles.container}>
    <Modal
      visible={modalVisible}
      animationType="slide"
      transparent={false}
    >
      <View style={styles.modalContent}>
        <Text>Edit Contact</Text>
        <TextInput
            value={editedContact ? editedContact.name : ''}
          onChangeText={(text) =>
            setEditedContact({ ...editedContact, name: text })
          }
        />
        <TextInput
          value={editedContact ? editedContact.phone :''}
          onChangeText={(text) =>
            setEditedContact({ ...editedContact, phone: text })
          }
        />
        <Button title="Update" onPress={handleUpdate} />
      </View>
    </Modal>
    <FlatList
      data={contacts}
      renderItem={({ item, index }) => (
        <View style={styles.contact}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.phone}>{item.phone}</Text>
          <Button title="Edit" onPress={() => handleEdit(index)} />
          <Button title="Delete" onPress={() => handleDelete(index)} />
        </View>
      )}
    />
    <TextInput
      style={styles.input}
      placeholder="Search"
      value={searchQuery}
      onChangeText={handleSearch}
    />
    <TextInput
      style={styles.input}
      placeholder="Name"
      value={name}
      onChangeText={(text) => setName(text)}
    />
    <TextInput
      style={styles.input}
      placeholder="Phone"
      value={phone}
      onChangeText={(text) => setPhone(text)}
    />
    <Button title="Add Contact" onPress={handleSubmit} />
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  padding: 20,
  backgroundColor: 'white',
  borderRadius: 10,
},
contact: {
  padding: 20,
  borderBottomColor: 'gray',
  borderBottomWidth: 1,
},
name: {
  fontSize: 18,
  fontWeight: 'bold',
},
phone: {
  fontSize: 16,
},
input: {
  height: 40,
  borderColor: 'gray',
  borderWidth: 1,
  padding: 10,
  width: 200,
},
});

export default ContactApp;

