import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ContactItem = ({ name, role, image }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.avatar} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
    </View>
  );
};

export default ContactItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    elevation: 3,
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
  },

  textContainer: {
    marginLeft: 15,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  role: {
    color: "#666",
    marginTop: 2,
  },
});