
import AddScreen from '../screens/AddScreen';
import GoalScreen from '../screens/GoalScreen';
import Colors from '../shared/colors';

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        style: {
          activeTintColor: Colors.accentColorWhite,
          backgroundColor: Colors.primaryColor,
        },
        activeTintColor: Colors.accentColorBlue,
      }}
    >
      <BottomTab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              color={color}
              name={Platform.OS === 'android' ? 'md-water' : 'ios-journal'}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Goal"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="md-water" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon({ ...props }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}


const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={GoalScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
