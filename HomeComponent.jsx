import { useState } from 'react';

function HomeComponent({ onSubmit }) {
  const [userInput, setUserInput] = useState({ name: '', category: '', difficulty: '' });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!userInput.name || !userInput.category || !userInput.difficulty) {
      setErrorMessage('All fields are required.');
    } else {
      setErrorMessage('');
      onSubmit(userInput);
    }
  };

  return (
    <div>
      <h1>Welcome to the Quiz App</h1>
      <p>Please enter your name, select a category and difficulty, then click Submit to get a question.</p>
      <form onSubmit={handleFormSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="name"
            value={userInput.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Category:
          <select
            name="category"
            value={userInput.category}
            onChange={handleChange}
          >
            <option value="">Select category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="18">Science: Computers</option>
            <option value="23">History</option>
          </select>
        </label>
        <br />
        <label>
          Difficulty:
          <select
            name="difficulty"
            value={userInput.difficulty}
            onChange={handleChange}
          >
            <option value="">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default HomeComponent;
