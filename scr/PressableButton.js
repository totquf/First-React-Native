import React from "react";
import { Pressable, Text, StyleSheet, SafeAreaView } from "react-native";

const PressableButton = () => {

    const onPress = () => alert("버튼이 클릭되었습니다")
    
    return (
        <SafeAreaView>
            <Pressable
                style={styles.button}
                onPress={onPress}
                //여기까지 버튼으로 인식o
                pressRetentionOffset={50}
                //여기부터는 버튼으로 인식x
                hitSlop={50}
            >   
                {/* 스타일 여러개 사용시 배열로 작성, 뒤에 오는 스타일일수록 우선적용됨 */}
                <Text style={[styles.text1, styles.text2]}>Pressable Button</Text>
            </Pressable>
            
            <Pressable
                style={styles.button}
                onPress={onPress}
                //여기까지 버튼으로 인식o
                pressRetentionOffset={50}
                //여기부터는 버튼으로 인식x
                hitSlop={50}
            >   
                {/* 클래스 + 인라인 혼합사용 */}
                <Text style={[styles.text1, {color: 'black'}]}>Pressable Button</Text>
            </Pressable>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3366ff',
        margin: 10,
        borderRadius: 8,
    },
    text1: {
        fontSize: 20,
        color: 'white',
        margin: 16,
    },
    text2: {
        fontWeight: "bold",
    }
})

export default PressableButton;