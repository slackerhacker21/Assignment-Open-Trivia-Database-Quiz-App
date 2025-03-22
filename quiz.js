import React, { useState, useEffect } from "react";

const Quiz = ({ name, category, difficulty, onFinish }) => {
    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [correctAnswer, setCorrectAnswer] = useState("");

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=1&type=multiple&category=${category}&difficulty=${difficulty}`)
            .then((response) => response.json())
            .then((data) => {
                const fetchedQuestion = data.results[0];
                setQuestion(fetchedQuestion);
                setCorrectAnswer(fetchedQuestion.correct_answer);
            });
    }, [category, difficulty]);

    const handleSubmit = () => {
        onFinish(selectedAnswer === correctAnswer);
    };

    if (!question) return <p>Loading...</p>;

    return (
        <div>
            <h2>{question.question}</h2>
            {question.incorrect_answers.concat(question.correct_answer).sort().map((answer) => (
                <div key={answer}>
                    <input type="radio" name="answer" value={answer} onChange={() => setSelectedAnswer(answer)} />
                    {answer}
                </div>
            ))}
            <button onClick={handleSubmit}>Submit Answer</button>
        </div>
    );
};

export default Quiz;
