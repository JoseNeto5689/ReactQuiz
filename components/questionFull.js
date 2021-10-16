import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, StatusBar } from "react-native";
import Question from './question';
import Timer from "./timer"
import Error from './error';

export default function({ question, options, timer, navigation, answer }) {
  let time
  let [seconds, setSeconds] = React.useState(timer.time);
  React.useEffect( () => {
    if (seconds > 0) {
      time = setInterval(() => setSeconds(seconds - 1), 1000)
      return function cleanUp() {
        clearInterval(time)
    }
    }})

    const verify = (num) => {
      if(num === 0){
        navigation.navigate("Error")
      }
      if(num === 1){
      navigation.navigate("WinScreen")
      }
    }
  if(seconds !== 0){
    return <>
      <StatusBar style="auto" />
      <View style = { { backgroundColor: "#EBEBEB", height: "100%" } } >
        <Question {...question}/>
        <View style = { styles.container } >
          <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => { clearInterval(time) ;verify(answer.op1)} } >
                  <Text style = { styles.optionText } > { options.option1 } </Text>
          </TouchableHighlight>
          <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => { clearInterval(time) ;verify(answer.op2)} } >
                  <Text style = { styles.optionText } > { options.option2 } </Text>
          </TouchableHighlight>
          <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => {clearInterval(time);verify(answer.op3)} } >
                  <Text style = { styles.optionText } > { options.option3 } </Text>
          </TouchableHighlight>
          <TouchableHighlight style = { styles.optionBox } underlayColor = { "#D44426" } onPress = { () => {clearInterval(time);verify(answer.op4)} } >
                  <Text style = { styles.optionText } > { options.option4 } </Text>
          </TouchableHighlight>
        </View>
        <Timer time = {seconds}/>
      </View>
    </> }

  else{
    clearTimeout(time)
    return <Error navigation = { navigation } />
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  optionBox: {
    height: 60,
    width: 270,
    backgroundColor: "orange",
    borderColor: "#D44426",
    borderWidth: 6,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  optionText: {
    fontSize: 20,
    color: "#201F1F",
    fontWeight: "bold",
  }
});