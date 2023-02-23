import React from "react";
import { StyleSheet, View, Text } from "react-native";

export const Header = () => {
    return (
        <View style={[styles.container, styles.header]}>
            <Text style={styles.text}>Header</Text>
        </View>
    )
}

export const Contents = () => {
    return (
        <View style={[styles.container, styles.contents]}>
            <Text style={styles.text}>Contents</Text>
        </View>
    )
}

export const Footer = () => {
    return (
        <View style={[styles.container, styles.footer]}>
            <Text style={styles.text}>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 0,
        backgroundColor: "#f1c40f",
    },
    contents: {
        flex: 1,
        backgroundColor: "#1abc9c",
        height: 640,
    },
    footer: {
        flex: 0,
        backgroundColor: '#3498db',
    },
    text: {
        fontSize: 26,
    }
})