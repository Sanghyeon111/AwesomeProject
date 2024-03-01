/**
 * My To Do List App
 *
 * @format
 */
import { useState, useEffect } from "react";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);

  console.log(tasks);
  return (
    <SafeAreaView>
      <ToDoList tasks={tasks} />
      <ToDoForm tasks={tasks} setTasks={setTasks} />
    </SafeAreaView>
  );
}

export default App;
