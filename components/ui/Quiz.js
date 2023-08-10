import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../constants/styles';

const Quiz = ({ question, options, correctAnswer, onAnswerSelected, answers }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleOptionPress = (option) => {
    if (!showResult) {
      setSelectedOption(option);
    }
  };

  const handleNextQuestion = () => {
    setSelectedOption(null);
    setShowResult(false);
    onAnswerSelected(selectedOption);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question}</Text>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selectedOption === index && styles.selectedOption,
            showResult && option === correctAnswer ? styles.correctOption : null,
          ]}
          onPress={() => handleOptionPress(index)}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === index && styles.selectedOptionText,
              showResult && option === correctAnswer ? styles.correctOptionText : null,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
      {selectedOption !== null && (
        <TouchableOpacity style={styles.nextButton} onPress={handleNextQuestion}>
          <Text style={styles.nextButtonText}>Next Question</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 64,
    color: Colors.white
  },
  optionButton: {
    borderWidth: 1,
    borderColor: Colors.white,
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.white
  },
  selectedOption: {
    borderWidth: 2,
    backgroundColor: Colors.white,
    borderColor: '#000000'
  },
  selectedOptionText: {
    color: '#000000',
    fontWeight: 'bold'
  },
  correctOption: {
    borderColor: '#00b894',
    borderWidth: 2,
  },
  correctOptionText: {
    color: '#00b894',
  },
  nextButton: {
    backgroundColor: '#F8C6A4',
    padding: 12,
    borderRadius: 8,
    marginTop: 32,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
});

export default Quiz;
