import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import ContactItem from "../components/ContactItem";

const contacts = [
  {
    id: "1",
    name: "John Doe",
    role: "Mobile Developer",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Mary Smith",
    role: "UI Designer",
    avatar: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Alex Johnson",
    role: "Student",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    name: "Grace Wanjiku",
    role: "Backend Developer",
    avatar: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "5",
    name: "Brian Otieno",
    role: "Cybersecurity Analyst",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: "6",
    name: "Faith Njeri",
    role: "Product Manager",
    avatar: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: "7",
    name: "Kevin Kiptoo",
    role: "Game Developer",
    avatar: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: "8",
    name: "Linda Achieng",
    role: "UX Researcher",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: "9",
    name: "Daniel Mwangi",
    role: "DevOps Engineer",
    avatar: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: "10",
    name: "Techkirui",
    role: "React Native Developer",
    avatar: "https://i.pravatar.cc/150?img=10",
  },
];
const ContactsScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <ContactItem name={item.name} role={item.role} image={item.avatar} />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f2f2f2",
  },
});
