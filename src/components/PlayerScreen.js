import React, { useState } from 'react';
import questions from '../data/questions';

const PlayerScreen = () => {
  const [playerName, setPlayerName] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const joinGame = () => {
    alert(`${playerName} has joined the game!`);
  };

  const submitAnswer = (option) => {
    setAnswer(option);
    const correctAnswer = questions[currentQuestion].correctAnswer;

    // Check if the selected answer is correct
    if (option[0] === correctAnswer) {
      setFeedback(`Congratulations ${playerName}, you answered correctly!`);
    } else {
      setFeedback(`Sorry ${playerName}, that answer is incorrect.`);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer('');
      setFeedback('');
    } else {
      setFeedback('Game Over! You have answered all the questions.');
    }
  };

  return (
    <div>
      <h1>Enter your name to join the game:</h1>
      <input 
        type="text" 
        value={playerName} 
        onChange={(e) => setPlayerName(e.target.value)} 
      />
      <button onClick={joinGame}>Join</button>

      <h2>{questions[currentQuestion].question}</h2>
      {questions[currentQuestion].options.map((option, index) => (
        <button onClick={() => submitAnswer(option[0])} key={index}>
          {option}
        </button>
      ))}

      {feedback && <h2>{feedback}</h2>}
      {feedback && (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default PlayerScreen;
