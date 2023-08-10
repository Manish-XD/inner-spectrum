import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const QuizContext = createContext({
    answers: '',
    quizCompleted: false,
    saveQuiz: (string) => {},
    deleteQuiz: () => {}
  });

  
  function QuizContextProvider({ children }) {
      const [quizAnswers, setQuizAnswers] = useState();
      
      useEffect(()=>{
        async function getQuiz()
        {
            const str = await AsyncStorage.getItem('quiz');
            setQuizAnswers(str);
        }
        getQuiz();
    }, [])
    
    function deleteQuiz()
    {
        setQuizAnswers(null);
        AsyncStorage.removeItem('quiz');
    }
    function saveQuiz(string) {
      setQuizAnswers(string);
      AsyncStorage.setItem('quiz', string);
    }
  
    const value = {
      answers: quizAnswers,
      quizCompleted: !!quizAnswers,
      saveQuiz: saveQuiz,
      deleteQuiz: deleteQuiz
    };
  
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
  }
  
  export default QuizContextProvider;