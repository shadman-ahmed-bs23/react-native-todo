import React, { useState } from 'react'; 
import {View, Text, StyleSheet, FlatList} from 'react-native'; 
import Header from './components/Header';
import TodoItem from './components/TodoItem'; 
import AddTodo from './components/AddTodo';
import uuid from 'uuid-random'; 

const App = () => {
  const [todos, setTodos] = useState([
    {id: uuid(), text: 'Morning walk'}, 
    {id: uuid(), text: 'Exercise'}, 
    {id: uuid(), text: 'Reading books'},
  ]); 

  const deleteTodo = (id) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id != id); 
    })
  }
  const addTodo = (text) => {
    if(!text) {
      Alert.alert(
        "Errror",
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
      <Header />
      <AddTodo addTodo={addTodo} />
      <FlatList 
        data={todos}
        renderItem={({item}) => <TodoItem item={item} deleteTodo={deleteTodo}/>}
      />
    </View> 
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default App; 