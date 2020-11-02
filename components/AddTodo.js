import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'; 

const AddTodo = ({addTodo}) => {
  const [text, setText] = useState(''); 

  const onChange = (textValue) => {
    setText(textValue);
  }
  return (
    <View>
      <TextInput 
        style={styles.textInput}
        placeholder="Add Todo"
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addTodo(text)}>
        <Text style={styles.btnText}>    
          <Icon 
            name="plus"
            size={20}
          />
        </Text> 
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  
  textInput: {
    height: 50,
    padding: 8, 
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#aaa',
  },
  btn: {
    height: 50, 
    padding: 10, 
    margin: 10,
    backgroundColor: 'coral',
  },
  btnText: {
    fontSize: 20, 
    textAlign: 'center', 
    justifyContent: 'center',
    borderColor: '#aaa',
  }
})

export default AddTodo; 