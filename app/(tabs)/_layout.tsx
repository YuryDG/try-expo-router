import { Tabs } from 'expo-router/tabs';
import { FontAwesome } from '@expo/vector-icons';

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="tab1"
        options={{
          title: 'Tab 1',
          tabBarIcon: ({ size, color }) => <FontAwesome name="home" size={size} color={color} />
        }} />

      <Tabs.Screen name="tab2" options={{
        title: 'Tab 2',
        tabBarIcon: ({ size, color }) => <FontAwesome name='address-book' size={size} color={color} />
      }} />
    </Tabs>
  );
}