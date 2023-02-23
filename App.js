import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header, Contents, Footer } from "./scr/component/Layout";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Contents/>
            <Footer/>
        </SafeAreaView>
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