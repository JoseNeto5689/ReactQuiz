import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import Question from './question';
import OptionBox from "./optionBox"
import Timer from "./timer"
import Error from './error';

export default function({ question, options, timer }) {
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
        <Question {...question} />
        <OptionBox {...options}/>
        <Timer time = {seconds}/>
      </View>
    </> }

  else{
    return <Error/>
  }
}