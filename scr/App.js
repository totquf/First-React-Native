import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                gdgdgdgdgd
            </Text>
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
    title: {
        fontSize: 30,
    }
})

export default App;