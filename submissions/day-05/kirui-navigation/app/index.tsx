import { Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/screens/ProfileScreen")}
      >
        <Ionicons name="person" size={20} color="#fff" />
        <Text style={styles.buttonText}>Go to Profile</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/screens/ContactsScreen")}
      >
        <Ionicons name="call" size={20} color="#fff" />
        <Text style={styles.buttonText}>Go to Contacts</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#cdf098"
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
    marginVertical: 8,
    width: 200,
    justifyContent: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});