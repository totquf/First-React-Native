import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, TextInput, Text} from 'react-native';

const EventInput = () => {
    const [text, setText] = useState('');
    const _onChangeText = text => setText(text)

    // const _onChange = (e) => {
    //     setText(e.nativeEvent.text)
    // }


    return (
        <SafeAreaView>
            <Text>text: { text }</Text>
            <TextInput
                style={styles.input}
                //onChange: text, eventCount, target을 호출하는 함수에 인자로 전달
                //nativeEvent: {
                //  text: ...
                //  eventCount: ...
                //  target: ...
                //  }
                //onChangeText: text만을 호출하는 함수에 인자로 전달( 더 간편한 버전 )
                onChangeText={_onChangeText}
                placeholder="당신의 이름은 무엇인가요?"
                placeholderTextColor='grey'
                keyboardType='default'
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        fontSize: 20,
    },
});

export default EventInput;