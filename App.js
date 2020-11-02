import React, {useState} from 'react'; 
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import uuid from 'uuid-random';  
import Header from './components/Header';
import TodoItem from './components/TodoItem'; 
import AddTodo from './components/AddTodo'; 

const App = () => {
  const [todos, setTodos] = useState([
    {id: uuid(), text: 'react-native'},
    {id: uuid(), text: 'react-native tutorials'},
    {id: uuid(), text: 'el-classico'}
  ]);

  const deleteTodo = (id) => {
    setTodos(prevTodos => {
      return (prevTodos.filter(todo => todo.id != id));
    })
  }

  const addTodo = (text) => {
    if(!text) {
      Alert.alert(
        "Error",
        `Please enter a valid item`,  
        [
          {
            text: "Ok",  
            style: "ok"
          }
        ],
        { cancelable: false }
      );
    } else {
      setTodos(prevTodos => {
        return [{id: uuid(), text: text}, ...prevTodos];
      });
    }
  }
  return (
    <View style={styles.container}> 
      <Header title="Todo List"/>
      <AddTodo addTodo={addTodo}/>
      <FlatList 
        data={todos}
        renderItem={({ item }) => <TodoItem item={item} deleteTodo={deleteTodo} />}
      />
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  
})

export default App; 