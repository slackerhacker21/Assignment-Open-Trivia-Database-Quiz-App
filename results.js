import React from "react";

const Result = ({ name, isCorrect, onRestart }) => {
    return (
        <div>
            <h2>{isCorrect ? `Congrats ${name}! You got it right!` : `Sorry ${name}, that was incorrect.`}</h2>
            <button onClick={onRestart}>Play Again</button>
        </div>
    );
};

export default Result;
