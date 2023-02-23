import React from "react";
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import propTypes from 'prop-types';

//커스텀 버튼 컴포넌트
const MyButton = ({title, onPress, children}) => {
    return (
        //onPress속성을 사용가능한 컴포넌트
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}> 
            <Text style={styles.button_text}> 
                {children || title}
            </Text>
        </TouchableOpacity>  
    )
}

//컴포넌트의 props에 기본값을 지정해서 props가 없을경우 기본값을 출력
MyButton.defaultProps = {
    title: 'buttton',
}

//PropTypes을 통해 컴포넌트(MyButton)에서 전달받아야 하는 props의 타입.필수여부를 지정할 수 있음
MyButton.propTypes = {
    title: propTypes.string.isRequired,
    onPress: propTypes.func.isRequired,
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3498DB',
        padding: 14,
        margin: 10,
        borderRadius: 8,
    },
    button_text: {
        fontSize: 24,
        color: '#fff',
    },

})

export default MyButton;