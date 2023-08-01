// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Tab1 from './screens/tab1';
import Tab2 from './screens/tab2';
import Settings from './screens/settings';
import Screen2 from './screens/screen2';


const Tab1Stack = createNativeStackNavigator();
function Tab1StackScreen() {
  return (
    <Tab1Stack.Navigator>
      <Tab1Stack.Screen name="Tab1" component={Tab1} />
      <Tab1Stack.Screen name="Screen2" component={Screen2} />
    </Tab1Stack.Navigator>
  );
}

const Tab2Stack = createNativeStackNavigator();
function Tab2StackScreen() {
  return (
    <Tab2Stack.Navigator>
      <Tab2Stack.Screen name="Tab2" component={Tab2} />
    </Tab2Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} >
      <Tab.Screen name="Tab1Stack" component={Tab1StackScreen} />
      <Tab.Screen name="Tab2Stack" component={Tab2StackScreen} />
    </Tab.Navigator>
  )
}

const RootStack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="HomeTabs" component={HomeTabs} />
        <RootStack.Screen name="Settings" component={Settings} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;