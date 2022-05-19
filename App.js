import React from "react";
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Menu from "./Componenten/Menu";
import Multiplayer from "./Componenten/Multiplayer";
import Singleplayer from "./Componenten/Singleplayer";


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = (navigation) => {
  return (
    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="Menu" component={Menu} />

      <Stack.Screen name="Multiplayer" component={Multiplayer} />
      <Stack.Screen name="Singleplayer" component={Singleplayer} />
    

    </Stack.Navigator>
  </NavigationContainer>
  )
}
export default App;