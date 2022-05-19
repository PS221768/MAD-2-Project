import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// import { Image } from 'react-native-web';
const staticImage = require("/MAD2/TTTM/assets/logo.png");
export default function App({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity  mode="contained" onPress={() => navigation.navigate("Singleplayer")}>
          <Text style={styles.text}>Singleplayer</Text>
        </TouchableOpacity>
        <Image style={styles.imgLogo} source={staticImage}></Image>
        <TouchableOpacity  mode="contained" onPress={() => navigation.navigate("Multiplayer")}>
          <Text style={styles.text}>Multiplayer</Text>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  
  },
  text: {
    color: 'red',
    padding:5,
    fontSize: 20,
    marginLeft:20,
    marginRight:20,
  },
  menu: {
    padding: 20,
    backgroundColor: 'blue',
    flexDirection: "row",
    alignSelf: 'flex-center',

   
    height: '10%',
    justifyContent: 'top',
    marginTop: 20,

  },

  imgLogo: {
    width: 40,
    height: 40,

  },
});
