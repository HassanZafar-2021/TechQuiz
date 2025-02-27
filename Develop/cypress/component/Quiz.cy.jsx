import React, { useState, useEffect } from "react";

const Quiz = ({ questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    console.log("Questions data:", questions);
  }, [questions]);

  if (!questions || questions.length === 0) {
    return <p>Loading questions...</p>;
  }

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestionIndex(nextQuestion);
    } else {
      alert(`Quiz finished! Your score: ${score}/${questions.length}`);
    }
  };

  return (
    <div>
      {!quizStarted ? (
        <button onClick={() => setQuizStarted(true)}>Start Quiz</button>
      ) : (
        <div>
          <h2>
            {questions[currentQuestionIndex]?.text || "No question available"}
          </h2>
          <div>
            {questions[currentQuestionIndex]?.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option.isCorrect)}
              >
                {option.text}
              </button>
            )) || <p>No options available</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
