import { useState, useEffect } from "react";
import React from "react";
import {
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  View,
  Text,
} from "react-native";

function ToDoForm({ tasks, setTasks }) {
  const [taskInput, setTaskInput] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  const handleInputChange = (text) => {
    setTaskInput(text);
  };
  const handleAddTask = () => {
    // Add the new task to the tasks array
    addTask(taskInput);

    // Clear the input field after adding the task
    setTaskInput("");
  };
  return (
    <>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Add a new task..."
          value={taskInput}
          onChangeText={handleInputChange}
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>
    </>
  );
}

// function ToDoForm({ tasks, setTasks }) {
//   const [taskInput, setTaskInput] = useState("");

//   useEffect(() => {
//     // Empty dependency array ensures this effect runs only once when the component mounts
//     addTask("Study for exam");
//   }, []);

//   const addTask = (newTask) => {
//     setTasks([...tasks, newTask]);
//   };

//   const handleInputChange = (text) => {
//     setTaskInput(text);

//     const handleAddTask = () => {
//       // Do something with the entered task value (taskInput)
//       console.log("New task:", taskInput);

//       // Add the new task to the tasks array
//       addTask(taskInput);

//       // Clear the input field after adding the task
//       setTaskInput("");
//     };

//     return (
//       <View style={styles.form}>
//         <TextInput
//           style={styles.input}
//           placeholder="Add a new task..."
//           value={taskInput}
//           onChangeText={handleInputChange}
//         />
//         <Button title="Add" onPress={handleAddTask} />
//       </View>
//     );
//   };

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    //justifyContent: 'space-between',
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;
