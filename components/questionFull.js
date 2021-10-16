import React from 'react';
import { View, StatusBar } from 'react-native';
import Question from './question';
import OptionBox from "./optionBox"
import Timer from "./timer"
import Error from './error';

export default function({ question, options, timer, navigation, answer }) {
  const [seconds, setSeconds] = React.useState(timer.time);
  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } 
  });

  if(seconds !== 0){
    return <>
      <StatusBar style="auto" />
      <View style = { { backgroundColor: "#EBEBEB", height: "100%" } } >
        <Question {...question}/>
        <OptionBox {...options} navigation = { navigation } { ...answer }/>
        <Timer time = {seconds}/>
      </View>
    </> }

  else{
    return <Error/>
  }
}