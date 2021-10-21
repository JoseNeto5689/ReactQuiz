import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from "react-native";
import styles from './styles';

export default function({ action, content, boxStyle, textStyle }) {
    return <>
        <TouchableHighlight style = { [styles.optionBox, boxStyle ] } underlayColor = { "#2F717A" } onPress = { () => { action() } } >
            <Text style = { [styles.optionText, textStyle] } > { content } </Text>
        </TouchableHighlight>
    </>
}
