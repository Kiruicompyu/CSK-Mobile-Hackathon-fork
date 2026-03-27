import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark"/>
      <Stack
        screenOptions={{
          headerTitle: "Kirui Flatlists",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#a7e7e5",
          },
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 24,
          }
          }}
      ></Stack>
    </>
  )
}
