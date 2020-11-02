 import React from 'react'; 
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'; 
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const TodoItem = ({ item, deleteTodo }) => {
  return (
    <TouchableOpacity style={styles.todoItem}>
      <View style={styles.todoItemView}>
        <Text style={styles.itemText}>{item.text}</Text> 
        <Icon
          name="remove" 
          size={20} 
          color="firebrick"
          onPress={() => deleteTodo(item.id)} 
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 15,
    backgroundColor: '#ededed',
    borderBottomWidth: 1, 
    borderBottomColor: '#aaa', 
  },
  todoItemView: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
  }
});

export default TodoItem; 