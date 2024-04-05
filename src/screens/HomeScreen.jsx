import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";
import { useState } from "react";
import { SafeAreaView, Button } from "react-native";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();
  const [tasks, setTasks] = useState(["Do laundry", "Go to gym", "Walk dog"]);
  const handleAddTask = (newTask) => {
    //setTasks((previousTasks) => [...tasks, newTask]);
    setTasks(tasks.concat(newTask));
  };
  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} />
        <ToDoForm addTask={handleAddTask} />
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </SafeAreaView>
    </MainLayout>
  );
}
export default HomeScreen;
