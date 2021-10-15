import React from "react";
import Option from "./option";
import { View, StyleSheet } from "react-native";

export default function({ option1, option2, option3, option4 }){

    return (
    <View style = { styles.container } >
      <Option content = { option1 } />
      <Option content = { option2 } />
      <Option content = { option3 } />
      <Option content = { option4 } />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      //backgroundColor: "blue",
      alignItems: 'center',
      marginTop: 20,
    }
  });