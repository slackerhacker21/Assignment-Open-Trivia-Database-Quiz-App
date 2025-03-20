# Assignment-Open-Trivia-Database-Quiz-App

How It Meets the Requirements
1.  Home Page
Welcome Message, Title, Instructions: The HomeComponent includes a title (<h1>Welcome to the Quiz App</h1>) and clear instructions (<p>Please enter your name, select a category and difficulty...</p>).
Text Box for First Name: Provided with a label and input field.
Category Dropdown: Offers four API-supported options: General Knowledge (9), Entertainment: Books (10), Science: Computers (18), and History (23).
Difficulty Dropdown: Includes all three API-supported options: easy, medium, and hard.
Submit Button: Triggers form submission.
Error Message: Displays a red error message if any field is empty, preventing submission.
State Object: Uses a single userInput state object { name: '', category: '', difficulty: '' } to store all inputs, as required.
2. Question Form
Question Display: Shows the fetched question, decoded from HTML entities using decodeHTML.
Answers as Radio Buttons: Loops through a shuffled array of answers (correct and incorrect mixed) using map, displaying them as radio buttons.
Submit Button: Submits the selected answer.
API Error Handling: Conditionally renders an error message if the API call fails or returns no results.
Selection Error: Displays an error if no answer is selected before submission.
   Results Section
Result Message: Uses the user’s name to indicate whether the answer was correct or incorrect.
Correct Answer: Shows the decoded correct answer if the user was wrong.
Start Over Button: Resets the app to the home page for a new question.
4.  Component Requirement
The app uses three separate components (HomeComponent, QuestionComponent, ResultsComponent), all passing props from the App component, exceeding the minimum requirement of two.
