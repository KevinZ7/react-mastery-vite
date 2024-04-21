import { GameStatus } from "../../pages/wordlePages";
import "./GameOverModal.css";

interface GameOverModalProps {
  gameStatus: GameStatus;
  restartGameHandler: () => void;
}
const GameOverModal = ({
  gameStatus,
  restartGameHandler,
}: GameOverModalProps) => {
  if (!gameStatus.finished) {
    return null;
  }

  return (
    <div className="GameOverModalContainer">
      <h1>
        {gameStatus.didWin
          ? "You found the word!"
          : "You didn't find the word 😭"}
      </h1>

      <button className="RetryButton" onClick={restartGameHandler}>
        {gameStatus.didWin ? "Play again!" : "Try again!"}
      </button>
    </div>
  );
};

export default GameOverModal;
