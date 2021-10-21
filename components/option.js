import React from 'react';
import { Text, TouchableHighlight } from "react-native";
import styles from './styles';

export default function({ action, content, boxStyle, textStyle }) {
    return <>
        <TouchableHighlight style = { [styles.optionBox, boxStyle ] } underlayColor = { "#ff7900" } onPress = { () => { action() } } >
            <Text style = { [styles.optionText, textStyle] } > { content } </Text>
        </TouchableHighlight>
    </>
}
