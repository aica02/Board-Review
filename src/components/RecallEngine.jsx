import { useState } from "react";
import { Eye, Volume2 } from "lucide-react";
import MathView from "./MathView";

export default function RecallEngine({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);

  if (!cards || cards.length === 0) {
    return <div className="empty-state">No formula cards available in vault.</div>;
  }

  const currentCard = cards[currentIndex % cards.length];
  const formula = revealed
    ? currentCard.latexFormula || currentCard.rawFormula
    : currentCard.latexMasked || currentCard.maskedDisplay;

  const handleNext = () => {
    setRevealed(false);
    setCurrentIndex((prev) => prev + 1);
  };

  const speakAudioNote = (text) => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="content-column">
      <div className="recall-header">
        <span>Card {(currentIndex % cards.length) + 1} of {cards.length}</span>
        <span className="recall-topic">
          {currentCard.subject} • {currentCard.topic}
        </span>
      </div>

      <div className="content-panel recall-panel">
        <h3 className="recall-title">{currentCard.title}</h3>

        <div className="formula-display">
          {formula ? (
            <MathView math={formula} inline={false} />
          ) : (
            <span className="formula-unavailable">No formula available</span>
          )}
        </div>

        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="primary-button reveal-button"
          >
            <Eye className="icon" /> Tap to Reveal Variable
          </button>
        ) : (
          <div className="recall-details">
            <div className="detail-box">
              <p><strong>Answer Variable:</strong> {currentCard.answerVariable || "Not specified"}</p>
              <p><strong>Units:</strong> {currentCard.units || "Standard SI/English"}</p>
              {currentCard.constants && (
                <p>
                  <strong>Constants:</strong> <MathView math={currentCard.constants} />
                </p>
              )}
              {currentCard.audioNote && (
                <button 
                  onClick={() => speakAudioNote(currentCard.audioNote)}
                  className="audio-button"
                >
                  <Volume2 className="icon icon-small" /> Play Audio Explanation Note
                </button>
              )}
            </div>

            <div className="rating-actions">
              <button onClick={handleNext} className="rating-button rating-forgot">🔴 Forgot</button>
              <button onClick={handleNext} className="rating-button rating-hesitated">🟡 Hesitated</button>
              <button onClick={handleNext} className="rating-button rating-mastered">🟢 Mastered</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}