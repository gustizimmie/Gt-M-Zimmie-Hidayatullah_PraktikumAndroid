import { Stack } from "expo-router";

export default function About() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="details/[id]"
        options={{
          headerTitle: "Detail",
          headerTransparent: true,
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
