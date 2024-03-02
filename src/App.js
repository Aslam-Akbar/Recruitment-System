import React, { useState, useEffect } from "react";
import "./App.css";
import questionsData from "./questions.json";
import Header from "./Header";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleOptions(questions) {
  return questions.map((question) => {
    const options = shuffleArray([...question.options]);
    return { ...question, options };
  });
}

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    const shuffledQuestions = shuffleOptions(
      shuffleArray(questionsData).slice(0, 10)
    );
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctOption) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    const shuffledQuestions = shuffleOptions(
      shuffleArray(questionsData).slice(0, 10)
    );
    setQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quiz-app">
      {showScore ? (
        <div className="score-section ">
          <Header />
          <div className="score-container quiz flex flex-col  justify-center items-center  ">
            <div className="bg-white w-3/5 h-2/5 flex flex-col  flex-wrap justify-center items-center my-2">
              <h2>
                Your Score: {score}/{questions.length}
              </h2>
              <button
                className="mx-4 my-9  px-4 py-4 max-w-lg opt flex flex-wrap"
                onClick={handleRestartQuiz}
              >
                Restart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <Header />
          {questions[currentQuestion] ? (
            <div className=" quiz flex flex-col  justify-center items-center ">
              <h2>Question {currentQuestion + 1}</h2>
              <div className="bg-white w-3/5 flex flex-col   flex-wrap justify-center items-center my-2 py-6">
                <p className="w-34  max-w-3xl text-center my-4">
                  {questions[currentQuestion].question}
                </p>

                <div>
                  {questions[currentQuestion].options.map((option, index) => (
                    <button
                      className="mx-4 my-6 px-4 py-4 min-w-96 max-w-96 opt flex flex-wrap"
                      key={index}
                      onClick={() => handleAnswerClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
