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
    },
    {
      question: "When did I propose to you?",
      options: ["14th Nov, 2024", "10th Feb, 2024", "18th November, 2024", "14th Feb, 2024" ],
      answer: "14th Feb, 2024"
    },
    {
      question: "When did we kiss in the rain for the first time?",
      options: ["3rd June, 2024", "15th June, 2024", "9th May, 2024", "12th May"],
      answer: "9th May, 2024"
    },
    {
      question: "When did we go to watch IPL at the Eden Gardens?",
      options: ["14th April, 2024", "20th April, 2024", "3rd May, 2024", "29th April, 2024"],
      answer: "14th April, 2024"
    },
    {
      question: "When did we go to Dakshineshwar for Puja?",
      options: ["9th Aug, 2024", "15th Jun, 2024", "29th June, 2024", "13th July, 2024"],
      answer: "29th June, 2024"
    },
    {
      question: "What was the first restaurant where we had lunch?",
      options: ["Arsalan", "Rang de Basanti Dhaba", "Chowman", "Shanghai" ],
      answer: "Rang de Basanti Dhaba"
    },
    {
      question: "Where did we watch Stree 2?",
      options: ["Hiland Park", "Priya Cinemas", "SVF: Narendrapur", "Navina Cinema"],
      answer: "Navina Cinema"
    },
    {
      question: "Where did we celebrate our first holi?",
      options: ["Dhakuria Lake", "Victoria Memorial", "Nandan", "Upohar"],
      answer: "Dhakuria Lake"
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

