import { StyleSheet } from "react-native";

export default StyleSheet.create({
    QuestionScreencontainer: {
      flex:1, 
      backgroundColor:'#ffff',
      
    },
    resultsScreenQuestions : 
    {
      width: '100%', 
    height: '30%',
     marginTop: 0,
     borderColor: '#42B4EC',
     backgroundColor: 'transparent',
     borderStyle: 'solid',
     borderWidth: 5,
     borderRadius: 10
    },
    homeScreenContainer: {
        flex: 1,
        backgroundColor: '#42B4EC',
        alignItems: 'center',
        justifyContent: 'center',
    },
    finalScreenImage: {
      width: '50%',
      height: '100%',
      alignSelf: 'center',
      
    },
    homeScreenBtn: {
        paddingVertical: 14,
        alignItems: 'center',
        width: '80%',
        height: '8%',
        backgroundColor: '#ffff',
        borderRadius: 15,
        marginTop: 56,
        marginLeft: '2%',
      },
    image: {
      height: 60, 
      width: 60, 
      marginRight: 10,
      marginBottom: 5,
    },
    header: {
      width: '100%', 
      height: '12%', 
      backgroundColor: '#42B4EC', 
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems: 'flex-end'
    },
    text_header: {
      fontWeight:'300%', 
      fontSize:23, 
      marginBottom: 15, 
      marginLeft: 15, 
      fontWeight: 'bold', 
      fontSize: 28, 
      color: '#ffff',
    },
    text: {
        fontSize: 20,
        
        fontWeight :'bold',
        color: '#bb1a3b'
    },
    settingsScreenContainer: {
        flex: 1,
        backgroundColor: '#42B4EC'
    },
    difficultyList: {
        flexDirection: 'row'
    },
    radioBtnCheckedStyle: {
        opacity: 0.5,
        backgroundColor: 'blue'
    },
    homeScreenBtn_text: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#454545',
      },

      questionScreenQuestionBodyStyle:{width: '100%', height: '50%', 
      backgroundColor: '#1d70a3', marginBottom: 10, borderBottomLeftRadius: 40, 
      borderBottomRightRadius: 40,},

    timerViewContainer: {width: '20%', height: '10%', 
    borderStyle: 'solid', borderWidth: 10, borderColor: '#42B4EC',
    backgroundColor: 'transparent', borderRadius: 40, justifyContent: 'center', alignSelf: 'center'}
  });
  