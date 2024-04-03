import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const GoalsEntries = ({ entries }) => {
  const navigation = useNavigation();
  return (
    <View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 170 }}
        showsVerticalScrollIndicator={false}
      >
        {entries.map((entry, index) => (
          <Pressable
            key={index}
            style={styles.entry}
            onPress={() => navigation.navigate("GoalEntryDetail", { entry })}
          >
            <Text style={styles.title}>{entry.title}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  entry: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: "lightpink",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    fontSize: 14,
  },
});

export default GoalsEntries;
