import React from "react";

const QuestionCard = ({ currentQuestion, length, handleClickOnAnswer }) => {
  return (
    <div className="card-container">
      <span>
        Это {currentQuestion.id} вопрос из {length}
      </span>
      <h1>{currentQuestion.question}</h1>
      {currentQuestion.answers.map((item, index) => {
        return (
          <button
            type="button"
            onClick={() => {
              handleClickOnAnswer(index);
            }}
            key={item}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default QuestionCard;
