import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dubai', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of India?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'Kabul', isCorrect: false },
      { answerText: 'Paris', isCorrect: false },
      { answerText: 'Delhi', isCorrect: true },
    ],
  },
  {
    questionText: 'What is the capital of Afghanistan?',
    answerOptions: [
      { answerText: 'London', isCorrect: false },
      { answerText: 'Mumbai', isCorrect: false },
      { answerText: 'Kabul', isCorrect: true },
      { answerText: 'Dubai', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Pakistan?',
    answerOptions: [
      { answerText: 'LA', isCorrect: false },
      { answerText: 'Islamabad', isCorrect: true },
      { answerText: 'Paris', isCorrect: false },
      { answerText: 'Dehradun', isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const NextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswered(false); // Reset answered state for the next question
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      setShowScore(true); // Show score if there are no more questions
    }
  };

  return (
    <div className="quiz-app-container">
      <div className="quiz-card">
        <div className="quiz-title">Quiz App</div>
        {showScore ? (
          <div className="results-container">
            <p className="results-score">You scored {score} out of {questions.length}</p>
          </div>
        ) : (
          <>
            <div>{questions[currentQuestion].questionText}</div>
            {questions[currentQuestion].answerOptions.map((option, index) => {
              const buttonClass = `quiz-button ${
                answered
                  ? option.isCorrect
                    ? "bg-green-200"
                    : selectedAnswer === index
                      ? "bg-red-200"
                      : ""
                  : ""
              }`;

              return (
                <button
                  key={index}
                  className={buttonClass}
                  onClick={() => handleAnswerOption(index, option.isCorrect)}
                >
                  {option.answerText}
                </button>
              );
            })}
            
            <button
              className="next-question-button"
              disabled={!answered} // Disable button if not answered
              onClick={NextQuestion}
            >
              Next Question
            </button>
            <p className="question-counter">Question {currentQuestion + 1} of {questions.length}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;