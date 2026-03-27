import { Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/")}
      >
        <Ionicons name="home" size={20} color="#fff" />
        <Text style={styles.buttonText}>Back to Home</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#81cdf0",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#0f172a",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});