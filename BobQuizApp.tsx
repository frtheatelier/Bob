import React from "react";
import HardcodedSection from "./src/components/Sections/HardcodedSection";
import AiSection from "./src/components/Sections/AiSection";
import QuestionAttributes from "./src/models/QuestionAttributes";
import ResultPage from "./src/components/Sections/Results";

const BobQuizApp: React.FC = () => {
  const [phase, setPhase] = React.useState<"hardcoded" | "ai" | "result">("hardcoded");
  const [answers, setAnswers] = React.useState<{ [key: string]: string }>({});
  const [aiQuestions, setAiQuestions] = React.useState<QuestionAttributes[]>([]);
  const [results, setResults] = React.useState<string | null>(null);

  const handleHardcodedSubmit = async (answers: { [key: string]: string }) => {
    // send answers to backend to get generated questions
    const res = await fetch("http://localhost:5000/api/generate_questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answers),
    });
    const data = await res.json();
    setAiQuestions(data.questions); // expected to return [{ name, label, type }]
    setPhase("ai");
  };

  const handleAiSubmit = async (answers: { [key: string]: string }) => {
    // send final combined answers to backend for "analysis"
    const res = await fetch("http://localhost:5000/api/generate_result", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...answers }),
    });
    const data = await res.json();
    setResults(data.result);
    setPhase("result");
  };

  return (
    <div>
      {phase === "hardcoded" && (
        <HardcodedSection onSubmit={handleHardcodedSubmit} />
      )}

      {phase === "ai" && (
        <AiSection questions={aiQuestions} onSubmit={handleAiSubmit} />
      )}

      {phase === "result" && results && (
        <ResultPage summary={results} />
      )}
    </div>
  );
};

export default BobQuizApp;