import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import EventButton from "./EventButton";
import EventInput from "./EventInput";

const App = () => {
    return (
        <View style={styles.container}>
            <EventButton />
            <EventInput />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ffffff",
    },
})

export default App;