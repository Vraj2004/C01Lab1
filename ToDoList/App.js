import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';

export default function App() {

  const initialTasks = ['Learn React-Native', 'Do C01 Lab 1', 'Look over notes'];

  return (
    <View style={styles.container}>
      <ToDoList toDos={initialTasks}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
