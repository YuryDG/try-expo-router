import { Stack } from 'expo-router';

export default function SettingLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="screen1" />
      <Stack.Screen name="screen2" />
    </Stack>
  );
}