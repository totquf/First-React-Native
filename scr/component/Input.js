import React from "react";
import styled from "styled-components";

//attrs를 이용하면 스타일을 설정하는 곳에서 porps의 값에 따라 컴포넌트의 속성을 다르게 적용할 수 있다
                                               //()쓰는 이유 = 객체생성
const StyledTextInput = styled.TextInput.attrs(props => ({
    placeholder: "하위",
    placeholderTextColor: props.borderColor
}))`
    width: 200px;
    height: 60px;
    margin: 10px;
    padding: 10px;
    border: 2px;
    border-color: ${props => props.borderColor};
    border-radius: 10px;
`
const Input = (props) => {
    return (
        <StyledTextInput borderColor={props.borderColor} />
    )
}

export default Input;