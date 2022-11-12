import React, { useState } from "react";

function Quiz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "What is the capital of India?",
      options: [
        { id: 0, text: "Telanagana", isCorrect: false },
        { id: 1, text: "Kashmir", isCorrect: false },
        { id: 2, text: "Gujarat", isCorrect: false },
        { id: 3, text: "New Delhi", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of India written?",
      options: [
        { id: 0, text: "1950", isCorrect: true },
        { id: 1, text: "1945", isCorrect: false },
        { id: 2, text: "1959", isCorrect: false },
        { id: 3, text: "1953", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the India?",
      options: [
        { id: 0, text: "Sarvepalli Radhakrishnan", isCorrect: true },
        { id: 1, text: "Rajendra Prasad", isCorrect: false },
        { id: 2, text: "Zakir Husain", isCorrect: false },
        { id: 3, text: "Varahagiri Venkata Giri", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the India?",
      options: [
        { id: 0, text: "Telangana", isCorrect: false },
        { id: 1, text: "Rajasthan", isCorrect: true },
        { id: 2, text: "West bengal", isCorrect: false },
        { id: 3, text: "kashmir", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the India?",
      options: [
        { id: 0, text: "pakistan", isCorrect: false },
        { id: 1, text: "myanmar", isCorrect: false },
        { id: 2, text: "afghanistan ", isCorrect: false },
        { id: 3, text: "Thailand", isCorrect: true },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1> Quiz App</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Quiz;





