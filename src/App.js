import React, { useState, useEffect } from "react";
import "./App.css";
import FinishCard from "./components/FinishCard";
import QuestionCard from "./components/QuestionCard";
import { state } from "./state";

const App = () => {
  const [start, setStart] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (start) {
      setIntervalId(
        setTimeout(() => {
          setTime(time + 1);
        }, 1000)
      );
    } else {
      setIntervalId(clearInterval(intervalId));
    }
  }, [time, start]);

  const handleStartButton = () => {
    setStart(true);
    setCurrentQuestion(0);
    setScore(0);
    setIsFinished(false);
  };

  const handleClickOnAnswer = (id) => {
    if (currentQuestion === state.length - 1) {
      setIsFinished(true);
      setStart(false);
    } else {
      setCurrentQuestion((currentQuestion) => currentQuestion + 1);
    }

    if (id === state[currentQuestion].correctAnswerIndex) {
      setScore((score) => score + 1);
    }
  };

  return (
    <div className="container">
      {start ? (
        <QuestionCard
          handleClickOnAnswer={handleClickOnAnswer}
          currentQuestion={state[currentQuestion]}
          length={state.length}
          setTime={setTime}
          time={time}
          intervalId={intervalId}
          setIntervalId={setIntervalId}
        />
      ) : (
        <button
          type="button"
          className="button"
          onClick={() => {
            setStart(handleStartButton);
          }}
        >
          START
        </button>
      )}
      {isFinished && <FinishCard score={score} time={time} />}
    </div>
  );
};

export default App;
