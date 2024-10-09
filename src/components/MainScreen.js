import React, { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import questions from '../data/questions';
import './MainScreen.css';

const MainScreen = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (option) => {
    const correctAnswer = questions[currentQuestion].correctAnswer;

    if (option === correctAnswer) {
      setFeedback('Congratulations! You answered correctly.');
    } else {
      setFeedback('Sorry, that answer is incorrect.');
    }
    setIsAnswered(true);
  };

  const nextQuestion = () => {
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    setFeedback('');
    setIsAnswered(false);
  };

  return (
    <div>
      <h1 className='heading'>Join the Game by Scanning the QR Code</h1>
      {/* Update local IP address like http://192.168.1.10:3000/player */}
      <QRCodeCanvas value="http:// add your device Id:3000/player" size={150} />

      <h2 className='heading'>{questions[currentQuestion].question}</h2>
      {questions[currentQuestion].options.map((option, index) => (
        <button
            className='btn-element'
            key={index}
            onClick={() => handleAnswer(option[0])}
            disabled={isAnswered}
          >
          {option}
        </button>
      ))}
      {feedback && <h2 className='feedback'>{feedback}</h2>}
      {isAnswered && currentQuestion < questions.length - 1 && (
        <button className='btn-next' onClick={nextQuestion}>Next Question</button>
      )}
      {isAnswered && currentQuestion === questions.length - 1 && (
        <h2 className='heading'>Game Over! You've answered all the questions.</h2>
      )}
    </div>
  );
};

export default MainScreen;
