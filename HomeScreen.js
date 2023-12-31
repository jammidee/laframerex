// HomeScreen.js
import React from 'react';
import { Button, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.openDrawer()} title="Open navigation drawer" />
      <Button onPress={() => navigation.navigate('Notifications')} title="Go to notifications" />
    </View>
  );
}

HomeScreen.navigationOptions = {
  drawerIcon: ({ tintColor }) => (
    <MaterialCommunityIcons name="home" size={24} color={tintColor} />
  ),
};

export default HomeScreen;
