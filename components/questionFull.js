import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, StatusBar } from "react-native";
import Question from './question';
import Timer from "./timer"
import Error from './error';
import Option from './option';
import styles from './styles';
import Line from './line';

export default function({ question, options, timer, navigation, answer, nextScreen, additionalBoxStyle, additionalTextStyle }) {
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
    navigation.navigate(nextScreen)
    }
  }
  if(seconds !== 0){
    return <>
      <StatusBar style="auto" />
      <View style = { { backgroundColor: "#EBEBEB", height: "100%", alignItems: "center", justifyContent: "space-between" } } >
        <Question {...question}/>
        <View style = { styles.optionsContainer } >
          <Option boxStyle = { additionalBoxStyle.index } textStyle = { additionalTextStyle.index } content = { options.option1 } action = { () => { clearInterval(time);verify(answer.op1) } } />
          <Option boxStyle = { additionalBoxStyle.index } textStyle = { additionalTextStyle.index } content = { options.option2 } action = { () => { clearInterval(time);verify(answer.op2) } } />
          <Option boxStyle = { additionalBoxStyle.index } textStyle = { additionalTextStyle.index } content = { options.option3 } action = { () => { clearInterval(time);verify(answer.op3) } } />
          <Option boxStyle = { additionalBoxStyle.index } textStyle = { additionalTextStyle.index } content = { options.option4 } action = { () => { clearInterval(time);verify(answer.op4) } } />
        </View>
        <Line/>
        <Timer time = {seconds}/>
      </View>
    </> }

  else{
    clearTimeout(time)
    return <Error navigation = { navigation } />
  }
}

