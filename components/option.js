import React from 'react';
import { Text, StyleSheet, TouchableHighlight } from "react-native";
import styles from './styles';

export default function({ action, content, boxStyle, textStyle }) {
    return <>
        <TouchableHighlight style = { [styles.optionBox, boxStyle ] } underlayColor = { "#D44426" } onPress = { () => { action() } } >
            <Text style = { [styles.optionText, textStyle] } > { content } </Text>
        </TouchableHighlight>
    </>
}
