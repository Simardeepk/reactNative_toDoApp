import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };
  const deleteTask = (indexToDelete: number) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📝 ToDo App</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
      />
      <Pressable style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <View style= {styles.taskItem}>
            <Text style={styles.task}>{index + 1}. {item}</Text>
            <Pressable style={styles.deleteButton} onPress={() => deleteTask(index)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: '#007bff', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  task: { fontSize: 16, marginTop: 10 },

  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: 'red',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  
});
