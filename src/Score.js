import React from "react";

const Score = ({ score, wrong, totalChecked }) => {
  const percentage = (score / totalChecked) * 100;

  return (
    <div>
      <div className="bg-white fixed flex justify-between flex-wrap px-8 score text-3xl">
        <h1>MCQ Practice</h1>
        <h2>Score: {score}</h2>
        <h2>Wrong: {wrong}</h2>
        <h2>Total Questions Checked: {totalChecked}</h2>
        <h2>Percentage: {percentage.toFixed(2)}%</h2>
      </div>
    </div>
  );
};

export default Score;
