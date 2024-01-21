import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleAddTask = () => {
    if (title.trim() !== '') {
      onAddTask(title.trim());
      setTitle('');
    }
  };

  return (
    <View style={styles.boxContainer}>
      <Text style={styles.boxText}></Text>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={text => setTitle(text)}
          placeholder='Enter your task here'
          placeholderTextColor="#d3d3d3"
        />
      </View>
      <Button title="Add Task" onPress={handleAddTask} color="green" />
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center'
  },
  boxText: {
    marginBottom: 10,
    color: '#555'
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    padding: 8,
    fontSize: 16
  }
});

export default AddTask;