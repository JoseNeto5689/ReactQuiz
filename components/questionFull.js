import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, StatusBar } from "react-native";
import Question from './question';
import Timer from "./timer"
import Error from './error';
import Option from './option';

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
      <View style = { { backgroundColor: "#EBEBEB", height: "100%", alignItems: "center" } } >
        <Question {...question}/>
        <View style = { styles.container } >
          <Option boxStyle = { additionalBoxStyle } textStyle = { additionalTextStyle } content = { options.option1 } action = { () => { clearInterval(time);verify(answer.op1) } } />
          <Option boxStyle = { additionalBoxStyle } textStyle = { additionalTextStyle } content = { options.option2 } action = { () => { clearInterval(time);verify(answer.op2) } } />
          <Option boxStyle = { additionalBoxStyle } textStyle = { additionalTextStyle } content = { options.option3 } action = { () => { clearInterval(time);verify(answer.op3) } } />
          <Option boxStyle = { additionalBoxStyle } textStyle = { additionalTextStyle } content = { options.option4 } action = { () => { clearInterval(time);verify(answer.op4) } } />
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
    width: "100%",
  },
  optionBox: {
    height: 60,
    width: 300,
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

/*

          <TouchableHighlight style = { [styles.optionBox,additionalBoxStyle.index ] } underlayColor = { "#D44426" } onPress = { () => { clearInterval(time) ;verify(answer.op1)} } >
                  <Text style = { [styles.optionText, additionalTextStyle.index] } > { options.option1 } </Text>
          </TouchableHighlight>
          <TouchableHighlight style = { [styles.optionBox,additionalBoxStyle.index ] } underlayColor = { "#D44426" } onPress = { () => { clearInterval(time) ;verify(answer.op2)} } >
                  <Text style = { [styles.optionText, additionalTextStyle.index] } > { options.option2 } </Text>
          </TouchableHighlight>
          <TouchableHighlight style = { [styles.optionBox,additionalBoxStyle.index ] } underlayColor = { "#D44426" } onPress = { () => { clearInterval(time);verify(answer.op3)} } >
                  <Text style = { [styles.optionText, additionalTextStyle.index] } > { options.option3 } </Text>
          </TouchableHighlight>
          <TouchableHighlight style = { [styles.optionBox,additionalBoxStyle.index ] } underlayColor = { "#D44426" } onPress = { () => { clearInterval(time);verify(answer.op4)} } >
                  <Text style = { [styles.optionText, additionalTextStyle.index] } > { options.option4 } </Text>
          </TouchableHighlight>

*/