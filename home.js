import React, { useState } from "react";

const Home = ({ onStart }) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");

    const handleStart = () => {
        if (!name || !category || !difficulty) {
            alert("Please fill in all fields.");
            return;
        }
        onStart(name, category, difficulty);
    };

    return (
        <div>
            <h1>Trivia Quiz</h1>
            <p>Enter your details to start the quiz!</p>
            <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select Category</option>
                <option value="9">General Knowledge</option>
                <option value="18">Science: Computers</option>
                <option value="21">Sports</option>
                <option value="23">History</option>
            </select>
            <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="">Select Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <button onClick={handleStart}>Start Quiz</button>
        </div>
    );
};

export default Home;
