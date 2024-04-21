import { useEffect } from "react";

interface ErrorMsgModalProps {
  showError: boolean;
  toggleShowError: () => void;
}

const ErrorMsgModal = ({ showError, toggleShowError }: ErrorMsgModalProps) => {
  useEffect(() => {
    let timeoutId: number;
    if (showError) {
      timeoutId = setTimeout(() => toggleShowError(), 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [showError, toggleShowError]);

  if (!showError) return null;

  return (
    <div className="GameOverModalContainer">
      <h1>Word is too short!</h1>
    </div>
  );
};

export default ErrorMsgModal;
