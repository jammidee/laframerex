// AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" 
          screenOptions={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        >
        {/* Drawer items */}
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Notifications"
          component={NotificationsScreen}
          options={{
            drawerIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        {/* Drawer items */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
