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
      <Text style={styles.heading}>📝 To-Do List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        placeholderTextColor="#6B9080"
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
  container: { flex: 1, padding: 20, backgroundColor: '#fff1e6', justifyContent: 'center', alignItems: 'center' },
  heading: { fontSize: 28, fontWeight: 'bold', marginBottom: 25, color: '#333', marginTop: 20},
  input: { borderColor: '#a4c3b2', backgroundColor: '#f0f5f2' ,borderWidth: 1, padding: 12, marginBottom: 15, borderRadius: 10, width:'100%', fontSize:16 },
  button: { backgroundColor: '#6B9080', padding: 12, borderRadius: 10, alignItems: 'center', width: '100%' },
  buttonText: { color: '#fff', fontWeight: '600' },
  task: { fontSize: 16, marginTop: 10 },



  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ffe6f9',
    borderRadius: 5,
    width: '100%',
    
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
