import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { fetchQuestions } from './../global/questions'
import CategoryGroup from './CategoryGroup'


import styles from './styles'

const SettingsScreen = (props) => {
    const [difficulty, setDifficulty] = useState("")
    const [pickedCategory, setPickedCategory] = useState("")
    
    const dispatch = useDispatch()
    const isInvalid = props.route.params.invalid

    
  return (
    <View style={styles.settingsScreenContainer}>
        {
            isInvalid ? <Text style={styles.text}>Couldn't find data, please pick another combination or a problem occured with the network, try again.</Text> : <Text></Text>
            
        }


        <Text style={styles.text}>Please select the settings for your game:</Text>
        <TouchableOpacity 
        onPress={() => 
            {   
               dispatch(fetchQuestions({category: pickedCategory, difficulty: difficulty.toLowerCase()}))
                props.navigation.navigate("Question", {questionIndex: 0, score: 0, correctlyAnsweredQuestions: [], incorrectlyAnsweredQuestions: []})
            }
            }
        style={{ paddingLeft: 5,width: '35%', height: '15%', backgroundColor: '#bb1a3b', borderRadius: 50
                                 , justifyContent: 'center', alignItems: 'center'
                                 , alignSelf : 'center'}}>
                <Text>Once you are ready, press here to start playing.</Text>

            </TouchableOpacity>
        <View>
            <Text style={styles.text}>Select the difficulty: </Text>
            <RadioButton.Group onValueChange={(e) => setDifficulty(e)}>
            <RadioButton.Item 
            style={ difficulty == "Easy" ? styles.radioBtnCheckedStyle : "" }
            mode='android'
            label='Easy questions'
            value='Easy'
            
            />
            <RadioButton.Item 
            style={ difficulty == "Medium" ? styles.radioBtnCheckedStyle : "" }
            mode='android'
            label='Medium questions'
            value='Medium'
            
            />
            <RadioButton.Item
            style={ difficulty == "Hard" ? styles.radioBtnCheckedStyle : "" }
            mode='android'
            label='Hard questions'
            value='Hard'
            
            />
            </RadioButton.Group>
        </View>
        <Text></Text>
        <View> 
            <Text style={styles.text}>Select the category:</Text>
           
            <CategoryGroup pickCategory= {setPickedCategory} getterPickedCategory={pickedCategory}/>

        </View>
     
    </View>
  )
}


export default SettingsScreen