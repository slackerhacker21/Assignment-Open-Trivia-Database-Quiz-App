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

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

