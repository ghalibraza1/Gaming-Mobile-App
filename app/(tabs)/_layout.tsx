import { Tabs } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../signin";
import CallofDuty from "../CallofDuty"
import OTP from "../OTP";
import SignUp from "../SignUp";
import Profile from "../Profile";
import EmailInputPage from "../EInput";

const Stack = createStackNavigator();

function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "blue", // Active icon color for other tabs
        tabBarInactiveTintColor: "gray", // Inactive icon color
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "black", // Tab bar background color
          borderTopWidth: 0,
          height: 70,
          borderRadius: 20,
          marginHorizontal: 10,
          marginBottom: 10,
          paddingBottom: Platform.OS === "ios" ? 20 : 10,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      {/* Home Screen */}
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: () => null, // Hide label
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                styles.homeButton,
                {
                  backgroundColor: focused ? "blue" : "transparent", // Blue when focused, transparent when not
                },
              ]}
            >
              <Text
                style={[
                  styles.homeText,
                  { color: focused ? "white" : "white" }, // White text when focused, black when not
                ]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      
      {/* Explore Screen */}
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "compass" : "compass-outline"}
              color={focused ? "blue" : color} // Change icon color based on focus state
            />
          ),
        }}
      />

      {/* Notifications Screen */}
      <Tabs.Screen
        name="notifications"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "notifications" : "notifications-outline"}
              color={focused ? "blue" : color} // Change icon color based on focus state
            />
          ),
        }}
      />

      {/* Settings Screen */}
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: () => null,
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "settings" : "settings-outline"}
              color={focused ? "blue" : color} // Change icon color based on focus state
            />
          ),
        }}
      />
    </Tabs>
  );
}


export default function RootLayout() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{ headerShown: false }} // Disable the header
      />
      
      <Stack.Screen
        name="TabLayout"
        component={TabLayout}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="CallofDuty"
        component={CallofDuty}
      /> */}
      <Stack.Screen
        name="OTP"
        component={OTP}
        options={{ headerShown: true }}
      />
       <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="EmailInputPage"
        component={EmailInputPage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  homeButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: "center", // Center align content horizontally
    justifyContent: "center", // Center align content vertically
    position: "absolute", // Position it absolutely within the tab bar
    left: "7%", // Horizontally center it (50% from the left)
    bottom: -3, // Adjust the bottom padding as needed
  },
  homeText: {
    fontWeight: "bold",
  },
});
