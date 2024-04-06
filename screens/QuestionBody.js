import { Text, FlatList } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';

import styles from './styles';
const QuestionBody = (props) => {
    
  const qIndex = props.questionIndex;
  //const score = props.score;
  const questions = props.questions
  const currentQuestion = questions[qIndex]
  const questionAnswers = props.questionAnswers
  const answer = props.answer




  return (
    
    <RadioButton.Group 
    onValueChange={(val) =>  props.setterAnswer(val)}>
    {
      currentQuestion ?  <Text style={[styles.text, {color: currentQuestion.difficulty == 'hard' ? '#8e052f' :
        currentQuestion.difficulty == 'medium' ? '#aa7305' : '#0bb808'}]}>{currentQuestion.difficulty.toUpperCase()} Question</Text> :
        <Text></Text>
    }
 

<Text
style={[styles.text, {color: '#0c3271'}]}

>{questions.length != 0 ? questions[qIndex].question : "Loading...\nIf it takes too long, it may be that a questionnaire couldn't be generated" + 
" or it may be a network problem, try to run different settings or check your network."}</Text> 
<FlatList 
data={ qIndex < 10 ? questionAnswers.sort((a,b) => a == b ? 0 : a < b ? -1 : 1) : questionAnswers}
keyExtractor={(item,index) => index}
renderItem={({item}) => {
return( <RadioButton.Item 
  style={answer == item ? styles.radioBtnCheckedStyle : ""}
  label={item}
  labelStyle={[styles.text, {color: '#091e5a'}]} 
  value={item}/>)
}}/>


</RadioButton.Group> 
    
  )
}

export default QuestionBody

