import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from 'react-native-paper';
import Login from "./screens/Login";
import Home from "./screens/Home";
import Register from "./screens/Register";
import UpTabs from "./screens/UpTabs";
import TestScreen from "./TestScreen";
import NewRecipe from "./screens/NewRecipe";
import Chat from "./screens/Chat";
import AddChat from "./screens/AddChat";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="UpTabs" component={UpTabs}
          options={{ headerShown: false }} />
        <Stack.Screen name="NewRecipe" component={NewRecipe}
          options={{ headerShown: false }} />
        <Stack.Screen name="Chat" component={Chat}/>
        <Stack.Screen name="AddChat" component={AddChat}
          options={{ headerShown: false }} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}