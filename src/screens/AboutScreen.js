import React from "react";
import { View, Text, SafeAreaView } from "react-native";
function AboutScreen() {
  const currentDate = new Date();
  return (
    <SafeAreaView>
      <View>
        <Text>ToDo App</Text>
        <Text>Version 1.0</Text>
        <Text>Author: Sang Lee</Text>
        <Text>Date : April 04 2024</Text>
        <Text>Current Date: {currentDate.toDateString()}</Text>
      </View>
    </SafeAreaView>
  );
}

export default AboutScreen;
