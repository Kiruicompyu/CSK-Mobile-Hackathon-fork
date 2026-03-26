import Card from "@/components/Card";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 20,
  }
})

export default function Index() {
  return (
    <View style={styles.container}>
      <Card
        avatar="https://i.pravatar.cc/150?img=3"
        title=" Dev Kirui"
        desc="I am a software engineer"
        buttonText="Hire Me"
      />
      <Card
        avatar="https://i.pravatar.cc/150?img=5"
        title="Kirui Dev"
        desc="I am an organ donor"
        buttonText="Follow For more"
      />
    </View>
  );
}
