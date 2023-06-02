import React, {useLayoutEffect, useState} from "react";
import { StyleSheet, Text, View } from "react-native";
import {Button, Input} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome"
import { db } from "../firebase"
import { addDoc, collection, query, orderBy, onSnapshot } from "firebase/firestore";

const AddChat = ({navigation}) =>{
    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new chat",
            headerBackTitle: "Chats",
        })
    }, [navigation])

    const createChat = async () => {
        addDoc(collection(db, "chats"), {
            chatName: input
        }).then((docRef) => {
            const id = docRef.id;
            const chatName = input;
            navigation.navigate("Chat", {
                id,
                chatName,
            });
        }).catch(error => alert(error.message));
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter a chat name"
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={createChat}
                leftIcon={
                    <Icon name={"wechat"} type="antdesign" size={24} color="black"/>
                }
            />
            <Button disabled={!input} onPress={createChat} title={"Create New Chat"}/>
        </View>
    )
}

export default AddChat

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 30,
        height: "100%",
    }
})