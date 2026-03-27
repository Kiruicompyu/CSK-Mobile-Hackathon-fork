


import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";

export default function MyForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (email && password) {
      console.log("Email:", email);
      console.log("Password",password);

      setEmail("");
      setPassword("");

      Alert.alert("Success", `Welcome ${email}`);
    } else {
      Alert.alert("Error", "Please fill in all fields!");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={20}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <View style={styles.card}>
            <Text>Email: </Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              autoFocus
              returnKeyType="next"
            />

            <Text>Password: </Text>
            <TextInput
              style={styles.input}
              value={password}
              secureTextEntry={true}
              onChangeText={setPassword}
              placeholder="Enter your password"
            />

            <Button
              title="Login"
              onPress={handleSubmit}
              
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  container: {
    padding: 20,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  card: {
    width: 350,
    backgroundColor: "rgb(242, 242, 242)",
    padding: 30,
    borderRadius: 10,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    gap: 20,
  },
});