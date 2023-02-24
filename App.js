import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import { Header, Contents, Footer } from "./scr/component/Layout";
import Shadow from "./scr/component/Shadow";
import Button from "./scr/component/Button";
import Input from "./scr/component/Input";
import { theme } from './scr/component/theme';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
//스위치
import { Switch } from "react-native";
import { lightTheme, darkTheme } from "./scr/component/theme";

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.backgroud};`

const App = () => {

    const [isDark, setIsDark] = useState(false);
    const _toggleChange = () => {
        setIsDark(!isDark)
    }
    return (
        //2) ThemeProvider를 최상위 컴포넌트로 설정, theme속성 부여
        <ThemeProvider theme={ isDark ? darkTheme : lightTheme }>
            <Container>
                <Switch
                    value={isDark}
                    onValueChange={_toggleChange}    
                />
                <Button title='버튼입니다' />
                <Button title='버튼이 아닙니다' />
                <Input borderColor={'blue'} />
                <Input borderColor={'purple'} />
            </Container>
        </ThemeProvider>
    )
}

export default App;