import { useState } from 'react';
import HomeComponent from './HomeComponent';
import QuestionComponent from './QuestionComponent';
import ResultsComponent from './ResultsComponent';

function App() {
  const [currentStage, setCurrentStage] = useState('home');
  const [questionData, setQuestionData] = useState(null);
  const [error, setError] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = async (userInput) => {
    setName(userInput.name);
    const url = `https://opentdb.com/api.php?amount=1&category=${userInput.category}&difficulty=${userInput.difficulty}&type=multiple`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.response_code === 0) {
        setQuestionData(data.results[0]);
        setError(null);
        setCurrentStage('question');
      } else {
        setQuestionData(null);
        setError('No questions found for this category and difficulty. Please try different settings.');
        setCurrentStage('question');
      }
    } catch (err) {
      setQuestionData(null);
      setError('Failed to fetch question. Please try again.');
      setCurrentStage('question');
    }
  };

  const handleAnswerSubmit = (selectedAnswer) => {
    const correct = selectedAnswer === questionData.correct_answer;
    setIsCorrect(correct);
    setCurrentStage('results');
  };

  const handleStartOver = () => {
    setQuestionData(null);
    setError(null);
    setCurrentStage('home');
  };

  return (
    <div>
      {currentStage === 'home' && <HomeComponent onSubmit={handleSubmit} />}
      {currentStage === 'question' && (
        <QuestionComponent
          questionData={questionData}
          error={error}
          onAnswerSubmit={handleAnswerSubmit}
        />
      )}
      {currentStage === 'results' && (
        <ResultsComponent
          name={name}
          isCorrect={isCorrect}
          correctAnswer={questionData.correct_answer}
          onStartOver={handleStartOver}
        />
      )}
    </div>
  );
}

export default App;
