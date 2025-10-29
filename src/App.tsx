// src/App.tsx
import React from 'react';
import './App.css';

import {FieldType} from "./models/FieldAttributes";

// import TextField from "./components/Fields/TextField";
import RadioField from "./components/Fields/RadioField";

import QuestionAttributes, {QuestionType} from "./models/QuestionAttributes";
import Questions, {questionSchema} from "./components/Questions";

function App() {
  const [result, setResult] = React.useState<string | null>(null);
  return (
    <main className="main">
      <h1>Bob- Evaluation Form</h1>
      {!result ? (
        <div className="form-container">
          <p>Based on your understanding of the entity Bob, answer the following questions. There are no right or wrong answers.</p>
          <h2>1. Observability</h2>
          <form className="form">
            
            {questionSchema.map((question) => (
              <Questions key={question.name} {...question} />
            ))}

            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <div className="result">
          <h2>Your Evaluation Result</h2>
          <p>{result}</p>
          <button onClick={() => window.location.reload()}>Retake Evaluation</button>
        </div>
      )}
    </main>
  );
}

export default App;  