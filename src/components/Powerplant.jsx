import { useEffect, useState } from "react";
import { TERMS_FOR_PIPE } from "../data/ppsets";
import { ELEMENTS_FLASHING2 } from "../data/ppsets2";
import MathView from "./MathView";

const POWERPLANT_SETS = [
  ...TERMS_FOR_PIPE,
  ...ELEMENTS_FLASHING2,
];
const SET_TOPICS = {
  "set-pdf2-1": "Electrical Fundamentals & Number Sequences",
  "set-pdf2-2": "Algebra & Polynomial Factoring",
  "set-pdf2-3": "Angles & Trigonometry",
  "set-pdf2-4": "Electrical Circuit Laws",
  "set-pdf2-5": "Exponents & Infinite Expressions",
  "set-pdf2-6": "Electrical Measurements",
  "set-pdf2-7": "Logarithms & Number Systems",
  "set-pdf2-8": "Age & Number Word Problems",
  "set-pdf2-9": "Logarithmic Expressions",
  "set-pdf2-10": "Engineering Economics & Valuation",
  "set-pdf2-11": "Labor Relations & Economics",
  "set-pdf2-12": "Number Puzzles & Algebra",
  "set-pdf2-13": "Geometric Sequences",
  "set-pdf2-14": "Triangle Geometry",
  "set-pdf2-15": "Factorials & Combinatorics",
  "set-pdf2-16": "Sequences & Series",
  "set-pdf2-17": "Inequalities",
  "set-pdf2-18": "Coordinate Geometry",
  "set-pdf2-19": "Angles & Geometry",
  "set-pdf2-20": "Trigonometric Functions",
  "set-pdf3-1": "Quadratic Equations",
  "set-pdf3-2": "Limits & Calculus",
  "set-pdf3-3": "Statistics & Averages",
  "set-pdf3-4": "Related Rates & Geometry",
  "set-pdf3-5": "Engineering Economy & Interest",
  "set-pdf3-6": "Algebra & Word Problems",
  "set-pdf3-7": "Mixtures & Concentration",
  "set-pdf3-8": "Complex Numbers",
  "set-pdf3-9": "Chemistry & Material Science",
  "set-pdf3-10": "Geometry & Polygons",
  "set-pdf3-11": "Inventory & Engineering Economy",
  "set-pdf3-12": "Engineering Economy & Depreciation",
  "set-pdf3-13": "Strength of Materials",
  "set-pdf3-14": "Dynamics & Mechanics",
  "set-pdf3-15": "Mechanical Engineering Law",
  "set-pdf3-16": "Algebra Fundamentals",
  "set-pdf3-17": "Triangle Geometry",
  "set-pdf3-18": "Sequences & Series",
  "set-pdf4-1": "Accounting & Financial Ratios",
  "set-pdf4-2": "Algebra & Equations",
  "set-pdf4-3": "Permutations & Combinatorics",
  "set-pdf4-4": "Electrical Circuit Laws",
  "set-pdf4-5": "Radicals & Infinite Expressions",
  "set-pdf4-6": "Electrical Measurements",
  "set-pdf4-7": "Engineering Measurements",
  "set-pdf4-8": "Geometry & Polygons",
  "set-pdf4-9": "Engineering Economy & Annuities",
  "set-pdf4-10": "Coordinate Geometry & Circles",
  "set-pdf4-11": "Limits & Calculus",
  "set-pdf4-12": "Algebra & Variation",
  "set-pdf4-13": "Complex Numbers",
  "set-pdf4-14": "Geometry & Polygons",
  "set-pdf4-15": "Engineering Economy & Depreciation",
  "set-pdf4-16": "Economics & Consumer Goods",
  "set-pdf4-17": "Coordinate Geometry",
  "set-pdf4-18": "Limits & Calculus",
  "set-pdf4-19": "Conic Sections",
  "set-pdf4-20": "Engineering Economy & Interest",
  "set-pdf4-21": "Algorithms & Problem Solving",
  "set-pdf4-22": "Triangle Geometry",
  "set-pdf4-23": "Complex Numbers",
  "set-pdf4-24": "Accounting & Financial Ratios",
  "set-pdf4-25": "Accounting Fundamentals",
  "set-pdf4-26": "Strength of Materials",
};
const STORAGE_KEY = "board-review-powerplant-progress-v1";
const EMPTY_PROGRESS = { activeSetId: null, sets: {} };

function getSetTopic(set) {
  const existingTopic = set.setName.match(/\(([^()]*)\)$/)?.[1];
  return existingTopic ?? SET_TOPICS[set.setId] ?? "Board Exam Practice";
}

function getSetSource(set) {
  const pdfMatch = set.setId.match(/^set-pdf(\d+)-(\d+)$/);
  const pdfNumber = pdfMatch?.[1];
  const setNumber = pdfMatch?.[2] ?? set.setName.match(/Set (\d+)/)?.[1];
  const source = pdfNumber ? `PDF ${pdfNumber}` : "General Evaluation";
  const details = setNumber && `${pdfNumber ? "Source set" : "Set"} ${setNumber}`;
  return details ? `${source} · ${details}` : source;
}

// ── Fill-in-the-blank answer matching ─────────────────────────────────────────
// Case-insensitive, trims whitespace, strips punctuation, collapses spaces.
// Also strips a few leading filler words ("the", "a", "an") and common
// trailing periods so "Kirchhoff's current law." matches "kirchhoffs current law".
function normalizeAnswer(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .replace(/[.,;:'"!?()\[\]{}]/g, "")
    .replace(/\s+/g, " ")
    .replace(/^(the|a|an) /, "")
    .trim();
}

function isAnswerCorrect(userAnswer, question) {
  if (userAnswer == null) return false;
  const normalizedUser = normalizeAnswer(userAnswer);
  if (!normalizedUser) return false;
  const accepted = [
    question.answer,
    ...(Array.isArray(question.acceptedAnswers) ? question.acceptedAnswers : []),
  ];
  return accepted.some((candidate) => normalizeAnswer(candidate) === normalizedUser);
}

function questionHasChoices(question) {
  return Array.isArray(question?.options) && question.options.length > 0;
}

function readProgress() {
  let savedProgress;
  try {
    savedProgress = sessionStorage.getItem(STORAGE_KEY);
  } catch (error) {
    console.error("Could not access saved powerplant progress for this tab.", error);
    return EMPTY_PROGRESS;
  }

  if (!savedProgress) return EMPTY_PROGRESS;

  try {
    const progress = JSON.parse(savedProgress);
    if (progress && typeof progress === "object" && progress.sets && typeof progress.sets === "object") {
      return { activeSetId: progress.activeSetId ?? null, sets: progress.sets };
    }
    console.warn("Saved powerplant progress had an unexpected format; starting fresh.");
  } catch (error) {
    console.error("Could not read saved powerplant progress.", error);
  }

  return EMPTY_PROGRESS;
}

function getSetProgress(progress, setId) {
  const saved = progress.sets[setId];
  return {
    currentIndex: Number.isInteger(saved?.currentIndex) ? saved.currentIndex : 0,
    userAnswers: saved?.userAnswers ?? {},
    revealedAnswers: saved?.revealedAnswers ?? {},
    isComplete: Boolean(saved?.isComplete),
  };
}

export default function Powerplant() {
  const [progress, setProgress] = useState(readProgress);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (error) {
      console.error("Could not save powerplant progress for this tab.", error);
    }
  }, [progress]);

  const selectedSet = POWERPLANT_SETS.find((set) => set.setId === progress.activeSetId);

  const updateSetProgress = (setId, update) => {
    setProgress((previous) => {
      const existing = getSetProgress(previous, setId);
      return {
        ...previous,
        sets: {
          ...previous.sets,
          [setId]: typeof update === "function" ? update(existing) : update,
        },
      };
    });
  };

  const openSet = (setId) => {
    setProgress((previous) => ({ ...previous, activeSetId: setId }));
  };

  const returnToMenu = () => {
    setProgress((previous) => ({ ...previous, activeSetId: null }));
  };

  const restartSet = (setId) => {
    updateSetProgress(setId, {
      currentIndex: 0,
      userAnswers: {},
      revealedAnswers: {},
      isComplete: false,
    });
  };

  if (!selectedSet) {
    return (
      <section className="evaluation-panel">
        <header className="evaluation-header">
          <p className="evaluation-eyebrow">Powerplant practice</p>
          <h1 className="evaluation-title">Powerplant Engineering</h1>
          <p className="evaluation-description">
            Choose an exam set to practice. Your progress stays saved in this tab, even if you refresh.
          </p>
        </header>

        {POWERPLANT_SETS.length === 0 ? (
          <div className="evaluation-empty">No powerplant questions are available yet.</div>
        ) : (
          <div className="evaluation-set-grid">
            {POWERPLANT_SETS.map((set, index) => {
              const setProgress = getSetProgress(progress, set.setId);
              const usesChoices = set.questions.some(questionHasChoices);
              // For fill-in sets, "progress" should reflect submitted (revealed) answers only.
              const answeredCount = usesChoices
                ? Object.keys(setProgress.userAnswers).length
                : Object.keys(setProgress.revealedAnswers).length;
              const completed = setProgress.isComplete;
              const progressPercent = set.questions.length
                ? Math.min(100, (answeredCount / set.questions.length) * 100)
                : 0;

              return (
                <button
                  key={set.setId}
                  className="evaluation-set-card"
                  onClick={() => openSet(set.setId)}
                >
                  <span className="evaluation-set-card-top">
                    <span className="evaluation-set-number">SET {String(index + 1).padStart(2, "0")}</span>
                    {completed && <span className="evaluation-set-complete">Completed</span>}
                  </span>
                  <span className="evaluation-set-name">{getSetTopic(set)}</span>
                  <span className="evaluation-set-source">{getSetSource(set)}</span>
                  <span className="evaluation-set-count">
                    {set.questions.length} {set.questions.length === 1 ? "question" : "questions"}
                  </span>
                  <span className="evaluation-set-progress-track" aria-hidden="true">
                    <span style={{ width: `${progressPercent}%` }} />
                  </span>
                  <span className="evaluation-set-progress-label">
                    {completed
                      ? usesChoices ? "Review your results" : "Review questions"
                      : answeredCount > 0
                        ? `${answeredCount} of ${set.questions.length} ${usesChoices ? "answered" : "reviewed"} · Continue`
                        : "Start this set"}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </section>
    );
  }

  const currentSetProgress = getSetProgress(progress, selectedSet.setId);
  const questions = selectedSet.questions;
  const currentIndex = Math.min(currentSetProgress.currentIndex, Math.max(questions.length - 1, 0));
  const question = questions[currentIndex];
  const questionKey = question?.id ?? `${selectedSet.setId}-question-${currentIndex}`;
  const options = Array.isArray(question?.options) ? question.options : [];
  const hasChoices = options.length > 0;
  const userAnswers = currentSetProgress.userAnswers;
  const revealedAnswers = currentSetProgress.revealedAnswers;

  // For multiple-choice questions, selecting an option is the answer.
  // For fill-in questions, an answer only "counts" once it has been submitted
  // (i.e. revealedAnswers[questionKey] is set) — typing alone must NOT lock the
  // input or trigger correctness feedback.
  const hasAnswered = hasChoices
    ? Object.hasOwn(userAnswers, questionKey)
    : Boolean(revealedAnswers[questionKey]);

  const isRevealed = Boolean(revealedAnswers[questionKey]) || hasAnswered;
  const isCorrect = hasChoices
    ? userAnswers[questionKey] === question?.answer
    : isAnswerCorrect(userAnswers[questionKey], question);
  const typedAnswer = userAnswers[questionKey] ?? "";

  const usesChoices = questions.some(questionHasChoices);
  const answeredCount = usesChoices
    ? Object.keys(userAnswers).length
    : Object.keys(revealedAnswers).length;

  const correctCount = questions.reduce((total, item, index) => {
    const key = item.id ?? `${selectedSet.setId}-question-${index}`;
    if (questionHasChoices(item)) {
      return total + (userAnswers[key] === item.answer ? 1 : 0);
    }
    // For fill-in, only count items that were actually submitted.
    if (!revealedAnswers[key]) return total;
    return total + (isAnswerCorrect(userAnswers[key], item) ? 1 : 0);
  }, 0);

  const updateCurrentSet = (update) => updateSetProgress(selectedSet.setId, update);

  const submitTypedAnswer = () => {
    if (!hasChoices && hasAnswered) return;
    if (!typedAnswer.trim()) return;
    updateCurrentSet((previous) => ({
      ...previous,
      revealedAnswers: { ...previous.revealedAnswers, [questionKey]: true },
    }));
  };

  if (questions.length === 0) {
    return (
      <section className="evaluation-panel">
        <button className="evaluation-back-button" onClick={returnToMenu}>← All exam sets</button>
        <header className="evaluation-header">
          <p className="evaluation-eyebrow">Powerplant practice</p>
          <h1 className="evaluation-title">{selectedSet.setName}</h1>
        </header>
        <div className="evaluation-empty">This set does not have any questions yet.</div>
      </section>
    );
  }

  if (currentSetProgress.isComplete) {
    return (
      <section className="evaluation-panel">
        <button className="evaluation-back-button" onClick={returnToMenu}>← All exam sets</button>
        <header className="evaluation-header">
          <p className="evaluation-eyebrow">Practice complete</p>
          <h1 className="evaluation-title">{selectedSet.setName}</h1>
        </header>
        <div className="evaluation-completion">
          {usesChoices ? (
            <>
              <p className="evaluation-score">
                {correctCount} <span>/ {questions.length}</span>
              </p>
              <p className="evaluation-summary">
                Correct answers · {answeredCount} of {questions.length} questions answered
              </p>
            </>
          ) : (
            <>
              <p className="evaluation-score">
                {correctCount} <span>/ {questions.length}</span>
              </p>
              <p className="evaluation-summary">
                Correct · {answeredCount} of {questions.length} reviewed
              </p>
            </>
          )}
          <div className="evaluation-completion-actions">
            <button
              className="evaluation-button evaluation-button-secondary"
              onClick={() => updateCurrentSet((previous) => ({ ...previous, isComplete: false }))}
            >
              Review answers
            </button>
            <button
              className="evaluation-button evaluation-button-primary"
              onClick={() => restartSet(selectedSet.setId)}
            >
              Start over
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="evaluation-panel">
      <button className="evaluation-back-button" onClick={returnToMenu}>← All exam sets</button>
      <header className="evaluation-header evaluation-header-set">
        <p className="evaluation-eyebrow">{selectedSet.setName}</p>
        <h1 className="evaluation-title">Question {currentIndex + 1}</h1>
        <p className="evaluation-description">
          {hasChoices
            ? "Choose an answer to check it, or reveal the correct answer when you’re ready."
            : "Type your answer, then press Enter or tap Check answer. You can also reveal it."}
        </p>
      </header>

      <div className="evaluation-progress">
        <div className="evaluation-progress-label">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{usesChoices ? `${correctCount} correct` : `${answeredCount} reviewed`}</span>
        </div>
        <div
          className="evaluation-progress-track"
          role="progressbar"
          aria-label="Set progress"
          aria-valuemin={0}
          aria-valuemax={questions.length}
          aria-valuenow={currentIndex + 1}
        >
          <span style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }} />
        </div>
      </div>

      <article className="evaluation-question-card">
        <p className="evaluation-question-number">QUESTION {currentIndex + 1}</p>
        <h2 className="evaluation-question">
          <MathView math={question.question} parseText />
        </h2>

        {hasChoices ? (
          <div className="evaluation-options">
            {options.map((option, optionIndex) => {
              const isSelected = userAnswers[questionKey] === option;
              const isAnswer = option === question.answer;
              const stateClass = isRevealed
                ? isAnswer
                  ? "is-correct"
                  : isSelected
                    ? "is-incorrect"
                    : ""
                : isSelected
                  ? "is-selected"
                  : "";

              return (
                <button
                  key={`${questionKey}-${optionIndex}`}
                  className={`evaluation-option ${stateClass}`}
                  disabled={hasAnswered}
                  onClick={() => {
                    if (!hasAnswered) {
                      updateCurrentSet((previous) => ({
                        ...previous,
                        userAnswers: { ...previous.userAnswers, [questionKey]: option },
                      }));
                    }
                  }}
                >
                  <span className="evaluation-option-marker">{String.fromCharCode(65 + optionIndex)}</span>
                  <span className="evaluation-option-text"><MathView math={option} parseText /></span>
                  {isRevealed && isAnswer && <span className="evaluation-option-status">Correct answer</span>}
                  {isRevealed && isSelected && !isCorrect && (
                    <span className="evaluation-option-status">Your answer</span>
                  )}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="evaluation-fill-blank">
            <input
              type="text"
              className={`evaluation-fill-blank-input ${
                hasAnswered ? (isCorrect ? "is-correct" : "is-incorrect") : ""
              }`}
              placeholder="Type your answer…"
              value={typedAnswer}
              disabled={hasAnswered}
              autoComplete="off"
              onChange={(event) => {
                if (hasAnswered) return;
                const value = event.target.value;
                updateCurrentSet((previous) => ({
                  ...previous,
                  userAnswers: { ...previous.userAnswers, [questionKey]: value },
                }));
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  submitTypedAnswer();
                }
              }}
            />
            {!hasAnswered && (
              <button
                className="evaluation-reveal-button"
                onClick={submitTypedAnswer}
                disabled={!typedAnswer.trim()}
              >
                Check answer
              </button>
            )}
          </div>
        )}

        {isRevealed ? (
          <div className={`evaluation-feedback ${hasAnswered ? (isCorrect ? "is-correct" : "is-incorrect") : ""}`}>
            <strong>
              {hasAnswered
                ? isCorrect
                  ? "That’s right!"
                  : hasChoices
                    ? "Not quite — review the correct answer above."
                    : `Not quite — the correct answer is: ${question.answer}`
                : "Answer revealed"}
            </strong>
            {!hasChoices && !hasAnswered && (
              <div className="evaluation-solution">
                <span className="evaluation-solution-label">Correct answer</span>
                <MathView math={question.answer} parseText />
              </div>
            )}
            {question.solution && (
              <div className="evaluation-solution">
                <span className="evaluation-solution-label">Explanation</span>
                <MathView math={question.solution} parseText />
              </div>
            )}
          </div>
        ) : (
          hasChoices && (
            <button
              className="evaluation-reveal-button"
              onClick={() => updateCurrentSet((previous) => ({
                ...previous,
                revealedAnswers: { ...previous.revealedAnswers, [questionKey]: true },
              }))}
            >
              Show the correct answer
            </button>
          )
        )}

        {!hasChoices && !isRevealed && (
          <button
            className="evaluation-reveal-button evaluation-reveal-secondary"
            onClick={() => updateCurrentSet((previous) => ({
              ...previous,
              revealedAnswers: { ...previous.revealedAnswers, [questionKey]: true },
            }))}
          >
            Reveal answer
          </button>
        )}
      </article>

      <nav className="evaluation-navigation" aria-label="Question navigation">
        <button
          className="evaluation-button evaluation-button-secondary"
          disabled={currentIndex === 0}
          onClick={() => updateCurrentSet((previous) => ({ ...previous, currentIndex: currentIndex - 1 }))}
        >
          Previous
        </button>
        <button
          className="evaluation-button evaluation-button-primary"
          onClick={() => {
            if (currentIndex === questions.length - 1) {
              updateCurrentSet((previous) => ({ ...previous, isComplete: true }));
            } else {
              updateCurrentSet((previous) => ({ ...previous, currentIndex: currentIndex + 1 }));
            }
          }}
        >
          {currentIndex === questions.length - 1 ? "Finish set" : "Next question"}
        </button>
      </nav>
    </section>
  );
}