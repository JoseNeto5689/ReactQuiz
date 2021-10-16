import React from 'react';
import { View, StatusBar } from 'react-native';
import Question from './question';
import OptionBox from "./optionBox"
import Timer from "./timer"
import Error from './error';

export default function({ question, options, timer, navigation, answer }) {
  let time
  let [seconds, setSeconds] = React.useState(timer.time);
  React.useEffect( () => {
    if (seconds > 0) {
      time = setInterval(() => setSeconds(seconds - 1), 1000)
      return function cleanUp() {
        clearTimeout(time)
        time = null
    }
    }})
  if(seconds !== 0){
    return <>
      <StatusBar style="auto" />
      <View style = { { backgroundColor: "#EBEBEB", height: "100%" } } >
        <Question {...question}/>
        <OptionBox {...options} navigation = { navigation } { ...answer } />
        <Timer time = {seconds}/>
      </View>
    </> }

  else{
    clearTimeout(time)
    return <Error navigation = { navigation } />
  }
}