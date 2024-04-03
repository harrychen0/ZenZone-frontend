import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SERVER_URL } from "@env";

const JournalEntryDetailScreen = ({ route, navigation }) => {
  const { entry } = route.params;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState(entry.title);
  const [content, setContent] = useState(entry.content);

  const handleEdit = () => {
    setIsModalVisible(true);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${SERVER_URL}/entry/${entry.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error("HTTP status " + response.status);
      }

      navigation.goBack();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = () => {
    Alert.alert("Delete Entry", "Are you sure you want to delete this entry?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: async () => {
          try {
            const response = await fetch(`${SERVER_URL}/entry/${entry.id}`, {
              method: "DELETE",
            });

            if (!response.ok) {
              throw new Error("HTTP status " + response.status);
            }

            navigation.goBack();
          } catch (error) {
            console.error(error);
          }
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(!isModalVisible)}
      >
        <View style={styles.modalView}>
          <Text style={styles.subtitle}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={setTitle}
          />
          <Text style={styles.subtitle}>Content</Text>
          <TextInput
            style={styles.input}
            value={content}
            onChangeText={setContent}
            multiline
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Submit Edit" onPress={handleSubmit} />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={() => setIsModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
      <Text style={styles.title}>{entry.title}</Text>
      <Text style={styles.content}>{entry.content}</Text>
      <Text style={styles.timestamp}>
        {new Date(entry.timestamp).toLocaleString()}
      </Text>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Edit" onPress={handleEdit} />
        </View>
        <View style={styles.button}>
          <Button title="Delete" onPress={handleDelete} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 14,
    color: "gray",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    flex: 1 / 3,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    backgroundColor: "plum",
    padding: 24,
  },
  subtitle: {
    fontSize: 36,
    color: "#ffffff",
    padding: 10,
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    color: "white",
  },
});

export default JournalEntryDetailScreen;
