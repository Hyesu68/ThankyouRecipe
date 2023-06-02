import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from './Home';
import Type from './Type';
import Ingredient from './Ingredient';
import Shopping from './Shopping';
import { AppBar, HStack, IconButton, TextInput } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

function UpperTabs() {
  return (
    <View>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarStyle: { backgroundColor: 'powderblue' },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="Type"
          component={Type}
          options={{ tabBarLabel: 'Type' }}
        />
        <Tab.Screen
          name="Ingredient"
          component={Ingredient}
          options={{ tabBarLabel: 'Ingredient' }}
        />
        <Tab.Screen
          name="Shopping"
          component={Shopping}
          options={{ tabBarLabel: 'Shopping' }}
        />
      </Tab.Navigator>
    </View>
  );
}

function UpTabs() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" style={styles.textinputContainer} component={UpperTabs} options={{
        headerTitle: () => <TextInput
          label="Search..."
          variant="outlined"
          style={styles.textinput}
          trailing={props => (
            <IconButton icon={props => <Icon name="magnify" {...props} />} {...props} />
          )}
        />
      }} />
      <Drawer.Screen name="My Page" component={Type} />
      <Drawer.Screen name="Stars" component={Type} />
      <Drawer.Screen name="My Recipe" component={Type} />
      <Drawer.Screen name="Settings" component={Type} />
    </Drawer.Navigator>
  );
}

export default UpTabs;

const styles = StyleSheet.create({
  textinputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  textinput: {
    width: '100%',
  },
});
