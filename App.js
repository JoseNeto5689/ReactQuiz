import React from 'react';
import { View, StatusBar } from 'react-native';
import Option from './components/option';
import OptionBox from './components/optionBox';
import Question from './components/question';
import Timer from './components/timer';

export default function App() {
  return ( <>
    <StatusBar style="auto" />
    <View style = { { backgroundColor: "#EBEBEB" } } >
      <Question/>
      <OptionBox/>
      <Timer/>
    </View>
    </>
  );
}



