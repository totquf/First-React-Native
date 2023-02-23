import React from "react";
import { View, StyleSheet } from 'react-native';
import EventButton from "./scr/EventButton";
import EventInput from "./scr/EventInput";

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