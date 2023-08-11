// import ProgressBar from 'react-native-progress/Bar';
// import Progress from '../components/ui/Progress';
// import Quiz from "../components/ui/Quiz";
// import { Text, StyleSheet, View } from "react-native";
// import { LinearGradient } from 'expo-linear-gradient';

// const QuesOneScreen = () => {
//     return (
//         <LinearGradient style={styles.container} colors={[`#443E75`, `#33334F`]}>
//             <Progress />
//             <Quiz />
//         </LinearGradient>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         paddingVertical: 100,
//         paddingHorizontal: 64,
//         flex: 1
//     }
// })

// export default QuesOneScreen;

import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Quiz from '../components/ui/Quiz';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Progress from '../components/ui/Progress';
import { QuizContext } from '../store/quiz-context';

const QuesOneScreen = () => {
    const QuizCtx = useContext(QuizContext);
    useEffect(() => {
        QuizCtx.saveQuiz(score);
    }, [score])
    
  const [score, setScore] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
    const navigation = useNavigation();
  const questions = [
    {
      question: 'How many people did you meet today?',
      options: ['No one', '1-5', '5-10', '10-15'],
      correctAnswer: 'No one',
      answers: ['A', 'B', 'C', 'D']
    },
    {
        question: 'How happy do you feel today?',
        options: ['Not much', 'A little', 'Happy enough', 'Very much'],
        correctAnswer: 'Not much',
        answers: ['A', 'B', 'C', 'D']
      },
      {
        question: 'How productive do you feel today?',
        options: ['Not much', 'A little', 'Productive enough', 'Very much'],
        correctAnswer: 'Not much',
        answers: ['A', 'B', 'C', 'D']
      },
  ];

  const handleAnswerSelected = (isCorrect) => {
      setScore((prevScore) => prevScore + isCorrect);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };
  async function handleSaveQuiz(score)
  {
    QuizCtx.saveQuiz(score);
  }
  if (currentQuestion < questions.length) {
    const currentQuestionData = questions[currentQuestion];
    return (
      <LinearGradient style={styles.container} colors={[`#443E75`, `#33334F`]}>
        {/* <Progress /> */}
        <Quiz
          question={currentQuestionData.question}
          options={currentQuestionData.options}
          correctAnswer={currentQuestionData.correctAnswer}
          onAnswerSelected={handleAnswerSelected}
          answers={currentQuestionData.answers}
        />
      </LinearGradient>
    );
  } else {
    console.log(score);
    handleSaveQuiz(score);
    // QuizCtx.saveQuiz(score);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 100,
    paddingHorizontal: 64,
  },
  scoreText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default QuesOneScreen;
