import React, {useState, useEffect} from 'react';
import Question from './components/questionFull';
import mocks from './components/mocks';
export default function App() {
  return <>
    <Question { ...mocks.question1 } />
  </>

}



