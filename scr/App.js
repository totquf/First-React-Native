import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
    let name = '태현'
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {name == '태현' ? `내 이름은 ${name} 입니다` : `이름이 없습니다`}
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
    text: {
        fontSize: 30,
    }
})

export default App;