import { useEffect, useState } from "react";
import "./index.css";
import allWords from "../../store/wordle/data.json";
import WordleGrid from "../../components/wordle/WordleGrid";
import GameOverModal from "../../components/wordle/GameOverModal";
import ErrorMsgModal from "../../components/wordle/ErrorMsgModal";

export interface GameStatus {
  finished: boolean;
  didWin: boolean;
}

const isSameWord = (word1: string[], word2: string[]): boolean => {
  if (word1.length != word2.length) {
    return false;
  }

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] != word2[i]) {
      return false;
    }
  }

  return true;
};

const WordlePage = () => {
  const [hiddenWord, setHiddenWord] = useState<string[]>([]);
  const [guessWord, setGuessWord] = useState<string[]>([]);
  const [showError, setShowError] = useState<boolean>(false);
  const [guessedWords, setGuessedWords] = useState<string[][]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>({
    finished: false,
    didWin: false,
  });

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * (allWords.length - 1));
    const randomWord = allWords[randomIndex];
    setHiddenWord(randomWord.split(""));
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!/^(?:[A-Za-z]|Backspace|Enter)$/.test(e.key)) {
        return;
      }

      if (e.key === "Backspace") {
        const newGuessWord = [...guessWord];
        newGuessWord.pop();
        setGuessWord(newGuessWord);
      }

      if (e.key === "Enter") {
        if (guessWord.length < 5) {
          setShowError(true);
          return;
        }

        if (isSameWord(hiddenWord, guessWord)) {
          setGameStatus({
            didWin: true,
            finished: true,
          });
        }

        if (guessedWords.length === 5) {
          setGameStatus({
            didWin: false,
            finished: true,
          });
        }

        setGuessedWords((prev) => [...prev, guessWord]);
        setGuessWord([]);
      }

      if (guessWord.length < 5 && e.key != "Backspace") {
        setGuessWord((prev) => [...prev, e.key.toUpperCase()]);
      }
    };

    if (!gameStatus.finished) {
      document.addEventListener("keydown", handleKeyPress);
    }

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [guessWord, gameStatus, hiddenWord, guessedWords]);

  const restartGameHandler = () => {
    location.reload();
  };
  return (
    <div className="WordleContainer">
      <WordleGrid
        hiddenWord={hiddenWord}
        guessedWords={guessedWords}
        guessWord={guessWord}
      />
      <div>HiddenWord : {hiddenWord}</div>
      <ErrorMsgModal
        showError={showError}
        toggleShowError={() => setShowError((prev) => !prev)}
      />
      <GameOverModal
        gameStatus={gameStatus}
        restartGameHandler={restartGameHandler}
      />
      {gameStatus.finished && <div>You win</div>}
    </div>
  );
};

export default WordlePage;
