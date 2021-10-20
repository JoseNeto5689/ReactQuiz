import React from 'react';
import Question from './components/questionFull';
import mocks from './components/mocks';
import Home from './components/home';
import Win from './components/win';
import Error from './components/error';
import { NavigationContainer } from './node_modules/@react-navigation/native';
import { createNativeStackNavigator } from './node_modules/@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }){
  return <Home navigation = { navigation } />
}


function Question01({ navigation }){
  return <>
    <Question { ...mocks.question1 } navigation = { navigation } nextScreen = "Question02"/>
  </>
}

function Question02({ navigation }){
  return <>
    <Question { ...mocks.question2 } navigation = { navigation } nextScreen = "Question03"/>
  </>
}

function Question03({ navigation }){
  return <>
    <Question { ...mocks.question3 } navigation = { navigation } nextScreen = "Question04"/>
  </>
}

function Question04({ navigation }){
  return <>
    <Question { ...mocks.question4 } navigation = { navigation } nextScreen = "Question05"/>
  </>
}

function Question05({ navigation }){
  return <>
    <Question { ...mocks.question5 } navigation = { navigation } nextScreen = "WinScreen"/>
  </>
}

function Winner({ navigation }){
  return <Win navigation = { navigation } />
}

function Erro({ navigation }){
  return <Error navigation = { navigation } />
}



export default function App() {
  return <>
  <NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen" >
      <Stack.Screen name = "HomeScreen" component = { HomeScreen } options = { { headerShown: false } } />
      <Stack.Screen name = "Question01" component = { Question01 } options = { { headerShown: false } } />
      <Stack.Screen name = "Question02" component = { Question02 } options = { { headerShown: false } } />
      <Stack.Screen name = "Question03" component = { Question03 } options = { { headerShown: false } } />
      <Stack.Screen name = "Question04" component = { Question04 } options = { { headerShown: false } } />
      <Stack.Screen name = "Question05" component = { Question05 } options = { { headerShown: false } } />
      <Stack.Screen name = "WinScreen" component = { Winner } options = { { headerShown: false } } />
      <Stack.Screen name = "Error" component = { Erro } options = { { headerShown: false } } />
    </Stack.Navigator>
  </NavigationContainer>
  </>

}



