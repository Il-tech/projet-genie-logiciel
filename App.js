import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import Profile from "./Profile";
import MyTabs from "./MyTabs";
import Page3 from "./Page3";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { SimpleLineIcons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();
const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
  },
};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.title}>
            <AntDesign name="arrowleft" size={20} color="white" />
            Pharmacies à proximité
          </Text>
        </View>
        <View style={styles.middle}>
          <ImageBackground
            source={require("./assets/undraw_lost.png")}
            style={styles.image}
          ></ImageBackground>
        </View>
        <View style={styles.bottom}>
          <NavigationContainer theme={MyTheme}>
            <Tab.Navigator
            >
              <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                  tabBarLabel: "Home",
                  tabBarIcon: ({ color }) => (
                    <SimpleLineIcons
                      name="screen-desktop"
                      size={18}
                      color="#6E78F7"
                    />
                  ),
                }}
              />
              <Tab.Screen
                name="MyTabs"
                component={MyTabs}
                options={{
                  tabBarLabel: "panier",
                  tabBarIcon: ({ color }) => (
                    <SimpleLineIcons name="basket" size={18} color="#6E78F7" />
                  ),
                }}
              />
              <Tab.Screen
                name="Page3"
                component={Page3}
                options={{
                  tabBarLabel: "Account",
                  tabBarIcon: ({ color }) => (
                    <SimpleLineIcons name="people" size={18} color="#6E78F7" />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 0,
    margin: 0,
  },
  top: {
    flex: 0.15,
    backgroundColor: "#6E78F7",
    borderWidth: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: 'stretch',
  },
  title: {
    fontWeight: "900",
    fontSize: 20,
    top: 50,
    flex: 1,
    color: "#fff",
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "sans-serif",
    padding: 20,
  },
  middle: {
    flex: 0.6,
    backgroundColor: "beige",
    borderTopStartRadius: 30,
    borderWidth: 0,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "#fff",
    borderWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
