import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { FAB } from "@react-native-material/core"
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { TextInput } from 'react-native-paper';

const NewRecipe = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const userState = onAuthStateChanged(auth, (user) => {

    });
    return userState;
  }, []);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Image source={{uri: 'https://images.squarespace-cdn.com/content/v1/54e7a1a6e4b08db9da801ded/7f2dae36-5650-4b84-b184-684f46fe68aa/98.jpg'}}
       style={{width: 400, height: 400}} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry={true}
        />
        <TextInput
          placeholder="Nickname"
          value={nickname}
          onChangeText={(text) => setNickname(text)}
          style={styles.input}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default NewRecipe;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'black',
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#0782F9",
  },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    width: "90%",
  },
  buttonContainer: {
    width: "80%",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#0782F9",
    width: "90%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginLeft: 10,
    borderColor: "#0782F9",
    padding: 15,
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    marginTop: 10,
    width: "90%",
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  }
});
