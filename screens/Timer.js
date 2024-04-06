import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
const Timer = (props) => {

    const [seconds, setSeconds] = useState(props.qIndex <= 10 ? 30 : 
      props.qIndex >= 10 && props.qIndex <= 15 ? 15 : 10)

   let timer;
   const qIndex = props.qIndex;
   const score = props.currentState.score;
   const questions = props.questions
   const currentQuestion = questions[qIndex]

   useEffect(() => {
    if(props.qIndex < 20){
      timer = setInterval(() => {
        setSeconds(seconds-1)
        if(seconds == 0){
          clearInterval(timer);
        }
        
    }, 1000)

    if(seconds == 0){
      clearInterval(timer)
      props.navigator("Question", {questionIndex: qIndex+1, 
        score: props.answer == currentQuestion.correct_answer ? score + 1 : score,
        invalid: false,
      correctlyAnsweredQuestions: [...props.currentState.correctlyAnsweredQuestions, props.answer == currentQuestion.correct_answer ? currentQuestion : {}],
      incorrectlyAnsweredQuestions: [...props.currentState.incorrectlyAnsweredQuestions, props.answer != currentQuestion.correct_answer ? currentQuestion : {}]})
      setSeconds(props.qIndex <= 10 ? 30 : 
      props.qIndex >= 10 && props.qIndex <= 15 ? 15 : 10)
    }
    else if(seconds != 0 && props.movedOnGetter){
      clearInterval(timer)
      setSeconds(props.qIndex <= 10 ? 30 : 
      props.qIndex >= 10 && props.qIndex <= 15 ? 15 : 10)
      
    }
    }
        
        
        
    return () => clearInterval(timer)
   })
  return (
    <View
      style={styles.timerViewContainer}>
        <Text style={[props.styles.text, {alignSelf: 'center', color: '#42B4EC', fontSize: 30}]}>{seconds}</Text>
      </View>
  )
}

export default Timer