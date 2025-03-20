function decodeHTML(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

function ResultsComponent({ name, isCorrect, correctAnswer, onStartOver }) {
  return (
    <div>
      {isCorrect ? (
        <p>Congratulations, {name}! You answered correctly.</p>
      ) : (
        <p>
          Sorry, {name}. That’s incorrect. The correct answer is:{' '}
          {decodeHTML(correctAnswer)}
        </p>
      )}
      <button onClick={onStartOver}>Start Over</button>
    </div>
  );
}

export default ResultsComponent;
