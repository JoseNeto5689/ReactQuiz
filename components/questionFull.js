import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import Question from './question';
import OptionBox from "./optionBox"
import Timer from "./timer"

export default function() {
  const [seconds, setSeconds] = React.useState(15);
  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } 
  });
  if(seconds !== 0){
  return <>
    <StatusBar style="auto" />
    <View style = { { backgroundColor: "#EBEBEB" } } >
      <Question/>
      <OptionBox/>
      <Timer time = {seconds}/>
    </View>
    </>
}
  else{
    return <Text>Olá Mundo</Text>
  }
}