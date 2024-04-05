import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Pressable,
  View,
  Text,
} from "react-native";

function ToDoList({ tasks }) {
  return (
    <>
      <ScrollView>
        <Pressable>
          {tasks.map((task, key) => {
            return (
              <View
                style={[styles.task, key % 2 == 1 && styles.completed]}
                key={key}
              >
                <Text style={styles.taskText}>{task}</Text>
              </View>
            );
          })}
        </Pressable>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  completed: {
    backgroundColor: "#e0e0e0",
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;
