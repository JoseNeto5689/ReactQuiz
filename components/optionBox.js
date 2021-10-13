import React from "react";
import Option from "./option";
import { View, StyleSheet } from "react-native";

export default function(){

    return (
    <View style = { styles.container } >
      <Option content = { "<Texto> </Texto>" } />
      <Option content = { "<Text> </Text>" } />
      <Option content = { "<p> </p>" } />
      <Option content = { "<Text/>" } />
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