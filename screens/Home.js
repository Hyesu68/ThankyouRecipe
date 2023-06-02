import { useNavigation } from "@react-navigation/core";
import React from "react";
import {FAB} from "@react-native-material/core"
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { auth } from "../firebase";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const Home = () => {

  const navigation = useNavigation();
  const handleNewRecipe = () => {
    navigation.replace("NewRecipe");
  };
  
  return (
    <View style={styles.container}>
      <FAB
        onPress={() => handleNewRecipe()}
        icon ={props => <Icon name="plus" {...props}/>}/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
