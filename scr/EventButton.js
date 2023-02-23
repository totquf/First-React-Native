import React from "react";
import { TouchableOpacity, Text } from "react-native";

const EventButton = () => {
    
    const _onPressIn = () => console.log('press In!!!\n');
    const _onPressOut = () => console.log('press Out!!!\n');
    const _onPress = () => console.log('press!!!\n');
    const _onLongPress = () => console.log('Long press!!!\n');
    
    return (
        <TouchableOpacity
                style={{
                    backgroundColor: '#F1C40F',
                    padding: 16,
                    margin: 10,
                    borderRadius: 8,
                }}
                onPressIn={_onPressIn}
                onPressOut={_onPressOut}
                onPress={_onPress}
                onLongPress={_onLongPress}
                delayLongPress={5000}
            >
                <Text>버튼입니다</Text>
            </TouchableOpacity>    
    )
}

export default EventButton;