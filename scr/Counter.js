import React, { useState } from "react";
import { View, Text } from 'react-native';
import MyButton from "./MyButton";

const Counter = () => {
    
    const [count, setCount] = useState(0);
    const [double, setDouble] = useState(0);
    
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Text style={{ fontSize: 30, margin: 10 }}>count: {count}</Text>
            <Text style={{ fontSize: 30, margin: 10 }}>double: {double}</Text>
            <MyButton title='+1' onPress={() => {setCount(count + 1)}}></MyButton>
            <MyButton title='+2' onPress={() => {setDouble(double + 2)}}></MyButton>
            <MyButton title='-1' onPress={() => { setCount(count - 1) }}></MyButton>
            <MyButton title='-2' onPress={() => { setDouble(double - 2) }}></MyButton>
        </View>  
    )
} 

export default Counter;