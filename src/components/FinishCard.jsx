import React from "react";

const FinishCard = ({ score, time }) => {
  return (
    <div className="card-container">
      Правильных ответов: <h1>{score}</h1> за <h1>{time}</h1> cек
    </div>
  );
};

export default FinishCard;
