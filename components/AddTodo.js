import React, { useState } from 'react'; 
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'; 
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');

  const onChange = (textValue) => {
    setText(textValue);
  }

  return (
    <View>
      <TextInput 
        style={styles.textInput}
        placeholder="Add Todo ..."
        onChangeText={onChange}
      />

      <TouchableOpacity 
        style={styles.btn}
        onPress={() => addTodo(text)} >
        <Text style={styles.btnText}>
          <Icon 
            name="plus"
            size={20}
          />
          Add Todo
        </Text>
      </TouchableOpacity>
    </View>
  );
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
    height: 40, 
    padding: 8, 
    margin: 10,
    backgroundColor: 'coral',
  },
  btnText: {
    fontSize: 18, 
    textAlign: 'center', 
    borderColor: '#aaa',

  }
})

export default AddTodo; 