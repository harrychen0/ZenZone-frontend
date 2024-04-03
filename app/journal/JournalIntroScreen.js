//Home screen for the main app. This is the first screen that the user sees when they open the app. It has a button to navigate to the Journal screen.

import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

export default function JournalIntroScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Title and Subtitle */}
      <Text style={styles.title}>ZenZone</Text>
      <Text style={styles.subtitle}>
        A new way to stay in touch with your mental health.
      </Text>

      {/* Spacing */}
      <View style={{ height: 50 }} />

      {/* Button to go to Journal Page */}
      <Pressable onPress={() => navigation.navigate("Journal")}>
        <View style={styles.button}>
          <Text style={styles.link}>Get Started </Text>
          <Icon name="arrow-forward" size={36} color="#ffffff" />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#29465B",
    justifyContent: "center",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "left",
  },
  subtitle: {
    fontSize: 36,
    color: "#ffffff",
    textAlign: "left",
  },
  link: {
    fontSize: 36,
    color: "#ffffff",
    textAlign: "left",
    fontWeight: "bold",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
});
