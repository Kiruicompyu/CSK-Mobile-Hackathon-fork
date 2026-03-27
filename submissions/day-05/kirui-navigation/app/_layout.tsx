import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
    screenOptions={{
        headerStyle: {
          backgroundColor: "#111",
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        animation: "slide_from_right",
    }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
          gestureEnabled: true,
        }} />
      <Stack.Screen
        name="screens/ProfileScreen"
        options={{
          title: "Profile",
          gestureEnabled: true,
        }} />
      <Stack.Screen
        name="screens/ContactsScreen"
        options={{
          title: "Contacts",
          gestureEnabled: true,
        }} />
</Stack>
  );
}