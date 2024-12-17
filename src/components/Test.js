import React, { useState } from 'react';
import JourneyFeaturette from './JourneyFeaturette';

export default function Quiz() {
  const questions = [
    {
      question: "Where was our first date?",
      options: ["Nandan", "Hiland Park", "Patuli", "Lake"],
      answer: "Patuli"
    },
    {
      question: "What are my favorite colors?",
      options: ["Blue & Black", "Red & white", "Green & Yellow", "Purple & Grey"],
      answer: "Blue & Black"
    },
    {
      question: "When did we talk for the first time?",
      options: ["5th Dec, 2023", "18th Nov, 2023", "24th November, 2023", "19th November, 2023"],
      answer: "18th Nov, 2023"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };


  return (
    <div className="py-5">
      <div className="text-center mb-5">
        <h1 className='display-2 fw-bold'>Welcome to Our Special Quiz!</h1>
        <p>Test how well you remember our special moments. Have fun!</p>
      </div>
      {showScore ? (
        <div className="alert alert-success text-center" role="alert">
          You scored {score} out of {questions.length}!
        </div>
      ) : (
        <div className="card text-center">
          <div className="card-body">
            <h2 className="card-title">{questions[currentQuestion].question}</h2>
            <div className="d-flex flex-column mt-4" role="group">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  className="btn btn-lg secondary-btn mb-2"
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>

          </div>
          <div className="text-center mb-5">
            <p className='lead fw-bold p-0 m-0'>Having problems answering those quizes?</p>
            <p>Scroll down, Explore our Jouney and find out!</p>
          </div>
        </div>
      )}
      <JourneyFeaturette />
    </div>
  );
}

