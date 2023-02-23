import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import MyButton from "./MyButton";

const onPress = () => {
    return alert("버튼이 클릭되었습니다")
}

const Button = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>커스텀 버튼 컴포넌트</Text>
            <MyButton title='MyButton' onPress={onPress} />

            {/*태그 사이에 지정된 값(Children Props)은 자식 컴포넌트(TouchableOpacity,Text)의 props에 childen이라는 이름으로 전달됨*/}
            <MyButton title='MyButton' onPress={onPress}>Children Props</MyButton>

            <MyButton onPress={onPress} />
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
        fontSize: 20,
        marginBottom: 10,
    },
})

export default Button;