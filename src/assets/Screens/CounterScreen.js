import React, { useEffect, useState } from 'react';
import {  View, Text, Button, StyleSheet, TextInput } from 'react-native';

const CounterScreen = () => {
  const[count,setCount] = useState(0);
  const [value, setValue] = useState(0);
  useEffect(() => {
    setCount(5 )
  },[])

  const AddByValue = () => {
    setCount(value+count)
  }
  
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  const decrement = () =>{if (count > 0){ setCount(count - 1)}};

   return (
    <View style={styles.mainView}>
     <TextInput
        style={styles.inputStyle}
        onChangeText={(input)=> setValue(Number(input))}
        placeholder='Enter number here'
        keyboardType='numeric'
        />
        <Text style={styles.counterText}>{count}</Text>
         <View style={styles.button}>
          <View style={{margin:10}}>
          <Button title="Increment" onPress={increment} />
            </View>
            <View style={{margin:10}}>
          <Button title="Reset" onPress={reset} />
            </View>
            <View style={{margin:10}}>
          <Button title="Decrement" onPress={decrement} />
            </View>
            <View style={{margin:10}}>
          <Button title="AddByAmount" onPress={AddByValue} />
            </View>
        </View>
      </View>
    
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle:{
    width:'90%',
    height:70,
    borderWidth:1,
    borderColor:'black',
    borderRdius:10,
    margin:10,
    paddingLeft:10,
    textColor:'black',
 },
  button: {
    flexDirection: 'coulmn',
    justifyContent: 'space-between',
    width: '605',
    
  },
  counterText: {
    fontSize: 48,
    marginBottom: 20,
  },
 });

export default CounterScreen;
