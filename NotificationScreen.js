// NotificationsScreen.js
import React from 'react';
import { Button, View, StyleSheet } from 'react-native';

function NotificationsScreen({ navigation }) {
  return (
    <>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button style={styles.button} onPress={() => navigation.openDrawer()} title="Open navigation drawer" />
            <Button style={styles.button} onPress={() => navigation.goBack()} title="Go back home" />
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button style={styles.button} onPress={() => navigation.openDrawer()} title="Open navigation drawer" />
            <Button style={styles.button} onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    </>

  );
}

const styles = StyleSheet.create({
    buttonContainer: {
      width: 320,
      height: 68,
      marginHorizontal: 20,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 3,
    },
    button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 8,
    },
    buttonLabel: {
      color: '#fff',
      fontSize: 16,
    },
  });

NotificationsScreen.navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <MaterialCommunityIcons name="bell" size={24} color={tintColor} />
    ),
};


export default NotificationsScreen;
