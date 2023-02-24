import React from "react";
import { View, StyleSheet, Platform } from 'react-native';

export default Shadow = () => {
    return <View style={styles.shadow}></View>
}

const styles = StyleSheet.create({
    shadow: {
        backgroundColor: "#fff",
        width: 200,
        height: 200,
        //ios와 안드로이드에서 그림자 효과를 다르게 적용
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: {
                    width: 5,
                    height: 5,
                },
                shadowOpacity: 0.2,
                shadowRadius: 10,
            },
            android: {
                //안드로이드에서 사용할 수 있는 그림자 효과, elevation에 값을 지정하면 그 값만큼 ui가 z축으로 튀어나와 그림자가 진다
                elevation: 20,
            }
        })
    }
})