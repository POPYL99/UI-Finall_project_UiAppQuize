import React, { useEffect, useState } from 'react'
import { View, 
  Text, 
  Image,
  TouchableOpacity,
  Alert,
  FlatList, 
} from 'react-native'
import { useSelector } from 'react-redux'


import AntDesign from 'react-native-vector-icons/AntDesign'

import QuestionBody from './QuestionBody'
import Timer from './Timer'

import styles from './styles.js'

const QuestionsScreen = (props) => {

  
 
  const questions = useSelector((state) => state.questionsGetter.value)

  const [answer, setAnswer] = useState("")
  
  const [maximized,setMaximized] = useState(false)
  const qIndex = props.route.params.questionIndex;
  const score = props.route.params.score;
  const [movedOn,setMovedOn] = useState(false)
  if(!questions){
    props.navigation.navigate("Settings", {invalid: true})
  }
  
 const currentQuestion = questions[qIndex]
  let questionAnswers = []
  try {
      
    questionAnswers = [...currentQuestion.incorrect_answers, currentQuestion.correct_answer]

    } catch (error) {
      
    }
  useEffect(() => {
    setAnswer("")
    setMovedOn(false)

  
  },[qIndex])

  return (
    <View style={styles.QuestionScreencontainer}>

      {/* Header Part */}
      <View style={styles.header}>
        <Text style={styles.text_header}>{`Question ${qIndex == 20 ? 20 : qIndex + 1} out of 20`}</Text>

        {
          qIndex < 20 && answer != "" ?
          <TouchableOpacity 
        style={{marginBottom: 17}}
        onPress={() => {
          setMovedOn(true)
          props.navigation.navigate("Question", {questionIndex: qIndex+1, 
            score: answer == currentQuestion.correct_answer ? score + 1 : score,
            invalid: false,
          correctlyAnsweredQuestions: [...props.route.params.correctlyAnsweredQuestions, answer == currentQuestion.correct_answer ? currentQuestion : {}],
          incorrectlyAnsweredQuestions: [...props.route.params.incorrectlyAnsweredQuestions, answer != currentQuestion.correct_answer ? currentQuestion : {}]})
        }}>

          <AntDesign name='forward' size={30} color='white'/>
          </TouchableOpacity> :
          <Text></Text>
        }
        
        <Image
          source={require('../assets/logo.png')}
          style={styles.image}
        />
      </View>

      <View style={[styles.questionScreenQuestionBodyStyle, qIndex == 20 ? {backgroundColor: 'transparent'} : {}]}>

      {
          maximized && qIndex == 20 ?
         

        <TouchableOpacity 
        
        onPress={() => setMaximized(!maximized)}>
          <AntDesign name='minus' size={30} color='blue'/>
        </TouchableOpacity>
        : <Text></Text>
        }
        
      {
        props.route.params.questionIndex == 20 && props.route.params.score < 15 ? 
        <Image 
        style={[styles.finalScreenImage,]}
        source={require('./../assets/failed_character.png')}
        resizeMode='stretch'  />
        
        :
         props.route.params.questionIndex == 20 && props.route.params.score >= 15 ?
         <Image 
         style={[styles.finalScreenImage, ]}
         source={require('./../assets/success_character.png')}
         resizeMode='stretch'/>
         :  
         <QuestionBody 
         setterAnswer = {setAnswer}
         answer = {answer}
         questionIndex = {qIndex}
         questions={questions}
         questionAnswers = {questionAnswers}
         />
      }
      
     
      </View>

      {/* Timer */}
      {
        qIndex < 20 && questions.length != 0 ? <Timer 
        navigator={props.navigation.navigate}
        currentState={{questionIndex: qIndex, 
          score:  score,
          correctlyAnsweredQuestions: props.route.params.correctlyAnsweredQuestions,
              incorrectlyAnsweredQuestions: props.route.params.incorrectlyAnsweredQuestions }}
      movedOnGetter = {movedOn}
      qIndex={qIndex} styles={styles}
      answer={answer}
      questions={questions}/> : <Text></Text>
      }
      
     
      {/* Forefit part */}
     
        <TouchableOpacity 
        
        style={[{marginTop: qIndex == 20 ? -20 : 50,
          justifyContent: 'center' , alignItems: 'center', width: '100%', height: '10%', 
        borderRadius: 40, backgroundColor: '#125881'}]}
        onPress={() => {
          
          props.navigation.reset({index: 0,
          routes: [{name: 'Home'}]})
          
          
        }
          
          } >
          {
            qIndex < 20 ?
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}} >You can exit any time, press here.</Text> :
            score > 15 ? <Text style={[{fontSize: 20, fontWeight: 'bold', color: 'white'}, {color: 'green'}]}>You win with {score} points. Press here to exit.</Text> :
            <Text style={[{fontSize: 20, fontWeight: 'bold', color: 'white'}, {color: 'red'}]}>Atleast 15 points are needed to win, you recieved {score}. Press here to exit.</Text>
          }
        
        </TouchableOpacity>
        {
          !maximized && qIndex == 20 ?
          <TouchableOpacity 
        
        onPress={() => setMaximized(!maximized)}>
          <AntDesign name='plus' size={30} color='blue'/>
        </TouchableOpacity> 
        :

        <Text></Text>
        }
        
          {
            qIndex == 20 ?
            <View style={[styles.resultsScreenQuestions, maximized ? {
              height: '70%', marginTop: -469, backgroundColor: '#42B4EC',
              borderRadius: 0, borderColor: 'transparent'
            } : {}]}>
              <FlatList
              data={props.route.params.correctlyAnsweredQuestions.concat(props.route.params.incorrectlyAnsweredQuestions).
                filter(x => 
                Object.keys(x).length != 0)}
              keyExtractor={(item,index) => index}
              renderItem={({item}) => {

                return (
                <TouchableOpacity 
                
                onPress={()=> { return ( Alert.alert("Answers", `${
                  item.incorrect_answers.length == 1 ?
                  '- ' + item.incorrect_answers[0] + '\n' +
                  '- CORRECT >> ' + item.correct_answer
                  
                  :
                  '- ' +item.incorrect_answers[0] + '\n' +
                  '- ' + item.incorrect_answers[1] + '\n' +
                  '- ' + item.incorrect_answers[2] + '\n' +
                  '- CORRECT >> ' + item.correct_answer
                }`,
                ))}}
                style={{flexDirection: 'row', alignItems: 'center', margin: 5, marginLeft: -4}}>
                  
                  <Text style={[{fontSize: 10, paddingLeft: 5},
                  maximized ? {fontSize:  20} : {}]}>{item.question}</Text>
                  
                  <AntDesign name={props.route.params.correctlyAnsweredQuestions.findIndex( x => x == item) == -1
                  ? 'close' : 'check'}
                  
                  size={15} color={
                    props.route.params.correctlyAnsweredQuestions.findIndex(x => x == item) == -1
                  ? 'red' : 'green'
                  }/>
                </TouchableOpacity>
                )
                
              }
               
            }
              />

              

          </View> :
          <Text></Text>
          }
          


    </View>
  )
}




export const screenOptions = (navData) => {
  return {
    headerShown: false
  }
}


export default QuestionsScreen


