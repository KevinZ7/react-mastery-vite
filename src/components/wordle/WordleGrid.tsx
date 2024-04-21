import React from "react";
import "./WordleGrid.css";

interface WordleGridProps {
  hiddenWord: string[];
  guessedWords: string[][];
  guessWord: string[];
}
const WordleGrid = ({
  hiddenWord,
  guessedWords,
  guessWord,
}: WordleGridProps) => {
  const currentWordIndex = guessedWords.length;

  return (
    <div className="WordleGrid">
      {Array.from({ length: 6 }, (row, rowIndex) => (
        <div key={rowIndex} className="WordRow">
          {Array.from({ length: 5 }, (cell, cellIndex) => {
            let letter = "";
            let containedInAnswer = false;
            let correctPosition = false;

            if (rowIndex < currentWordIndex) {
              letter = guessedWords[rowIndex][cellIndex] || "";
              containedInAnswer = hiddenWord.includes(letter);
              correctPosition = letter === hiddenWord[cellIndex];
            }

            if (rowIndex === currentWordIndex) {
              letter = guessWord[cellIndex] || "";
            }

            // Build class names dynamically based on game logic
            const classNames = ["LetterBox"];
            if (containedInAnswer) classNames.push("yellow");
            if (correctPosition) classNames.push("green");

            return (
              <div key={cellIndex} className={classNames.join(" ")}>
                {letter}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default WordleGrid;
