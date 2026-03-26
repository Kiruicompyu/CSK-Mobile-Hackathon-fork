import { View, Text, StyleSheet, Image, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150/image=70" }}
          style={styles.avatar}
        />

        <Text style={styles.name}>Kirui Dev</Text>
        <Text style={styles.bio}>Mobile Developer</Text>
        <Text style={styles.desc}>A Passionate mobile developer currently learning and using React Native to build Native applications..</Text>
        <Pressable style={({hovered, pressed }) => [
          styles.button,
          hovered && styles.buttonHover,
          pressed && styles.buttonPressed,
        ]} onPress={() => console.log("Button Pressed")}
        
        >
          <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e3e3",
  },

  card: {
    width: 350,
    padding: 20,
    borderRadius: 12,
    backgroundColor: "white",
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 30, 
  },

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
  },

  bio: {
    marginTop: 4,
    marginBottom: 12,
    color: "#666",
    fontSize: 20,
  },

  desc: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },

  button: {
    backgroundColor: "#eb2535",
    paddingVertical: 9,
    paddingHorizontal: 16,
    borderRadius: 8,
    width: 120,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },

  buttonPressed: {
    backgroundColor: "rgb(255, 8, 0)",
    transform: [
      {
        scale: 1.1,
      }
    ],
  },

  buttonHover: {
    backgroundColor: "#00a0ea"
  }
});
