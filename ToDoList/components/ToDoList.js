import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import AddTask from './AddTask';

const ToDoList = ({ toDos = [] }) => {
  const [toDosState, setToDosState] = useState(
    toDos.map(title => ({ id: uuidv4(), title }))
  );

  const addToDo = newTitle => {
    setToDosState(prevState => [
      ...prevState,
      { id: uuidv4(), title: newTitle }
    ]);
  };

  const removeToDo = id => {
    setToDosState(prevState => prevState.filter(todo => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      {toDosState.map(todo => (
        <View key={todo.id} style={styles.taskContainer}>
          <Text style={styles.taskText}>{todo.title}</Text>
          <Button title="Remove" onPress={() => removeToDo(todo.id)} color="red" />
        </View>
      ))}
      <AddTask onAddTask={addToDo} />
    </View>
  );
};

ToDoList.defaultProps = {
  toDos: []
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5
  },
  taskText: {
    flex: 1,
    marginRight: 10
  }
});

export default ToDoList;