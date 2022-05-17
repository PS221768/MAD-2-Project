import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HelloWorldApp = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Text>Hello, world!</Text>
    </View>
  )
}
export default HelloWorldApp;