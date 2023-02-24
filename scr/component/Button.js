import React from "react";
import styled from "styled-components";
import { Text } from "react-native";

const ButttonContainer = styled.TouchableOpacity`
    background-color: ${(props) => { return props.title === '버튼입니다' ? 'blue' : 'black' }};  
    border-radius: 15px;
    padding: 20px 30px;
    margin: 10px 0px;
    justify-content: center;
    `
const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: ${props => props.theme.text}
`

const Button = (props) => {
    return (
        <ButttonContainer title={props.title}>
            <Title>{props.title}</Title>
        </ButttonContainer>
    )
}

export default Button;