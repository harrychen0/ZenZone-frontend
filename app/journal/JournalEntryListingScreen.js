import React, { useState, useEffect } from "react";
import { SERVER_URL } from "@env";
import { useFocusEffect } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Modal,
} from "react-native";
import JournalEntries from "../../components/JournalEntries";

export default function JournalEntryListingScreen() {
  // Define state variables for the title, entries, and modal visibility
  const [title, setTitle] = useState("");
  const [entries, setEntries] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [content, setContent] = useState("");

  // Function to handle the form submission
  const handleSubmit = () => {
    // Create a new item object using the title and content state
    const newItem = {
      title,
      content,
    };

    // Send a POST request to the /entry endpoint to create a new entry
    fetch(`${SERVER_URL}/entry`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data, newItem); // for testing
        // Fetch the updated list of entries
        fetchEntries();
      })
      .catch((error) => console.error(error));
  };

  // Function to fetch the list of entries from the server
  const fetchEntries = () => {
    fetch(`${SERVER_URL}/entries`)
      .then((response) => response.json())
      .then((data) => setEntries(data.data)) // Set the entries state to the list of entries from the server
      .catch((error) => console.error(error));
  };

  // Use the useFocusEffect hook to refetch the list of entries when the screen comes into focus
  // (e.g., when user leaves edit/delete page)
  useFocusEffect(
    React.useCallback(() => {
      fetchEntries();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.main}>
        {/* Title and Button to Activate Modal Form*/}
        <Text style={styles.title}>Your Journal Entries:</Text>
        <Button
          title="Add Journal Entry"
          onPress={() => setIsModalVisible(!isModalVisible)}
        />

        {/* List of Journal Entries */}
        <View style={styles.spacer}></View>
        <JournalEntries entries={entries} />

        {/* Modal Form to Submit Entry */}
        <Modal
          visible={isModalVisible}
          animationType="slide"
          onRequestClose={() => setIsModalVisible(!isModalVisible)}
        >
          <View style={styles.modalView}>
            {/* Text Inputs */}
            <Text style={styles.subtitle}>Title</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter title"
              value={title}
              onChangeText={setTitle}
            />
            <Text style={styles.subtitle}>Content</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter content"
              value={content}
              onChangeText={setContent}
              multiline
            />

            {/* Buttons to submit or hide form */}
            <View style={styles.spacer}></View>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="Submit"
                  onPress={() => {
                    handleSubmit();
                    setIsModalVisible(!isModalVisible);
                  }}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="Hide Form"
                  onPress={() => setIsModalVisible(!isModalVisible)}
                />
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "plum",
  },
  main: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "plum",
    marginHorizontal: "auto",
  },
  spacer: {
    height: 20,
  },
  modalView: {
    flex: 1,
    backgroundColor: "plum",
    padding: 24,
  },
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: 36,
    color: "#ffffff",
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    color: "white",
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemTitle: {
    fontWeight: "bold",
  },
  itemContent: {
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  button: {
    flex: 1 / 3,
  },
});
