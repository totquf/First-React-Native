import React from "react";
import { Text, View, StyleSheet } from 'react-native';

const App = () => {
    //dfdfdf
    let name = '태현'
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {(() => {
                    if (name == "태현") return "태현입니다"
                    else if (name == "서경") return "서경입니다"
                    else return "이름이 없습니다"
                })()}
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