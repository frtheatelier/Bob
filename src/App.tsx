// src/App.tsx
import React from 'react';
import './App.css';

import {FieldType} from "./models/FieldAttributes";

// import TextField from "./components/Fields/TextField";
import RadioField from "./components/Fields/RadioField";

import QuestionAttributes, {QuestionType} from "./models/QuestionAttributes";
import Questions, {questionSchema} from "./components/Quiz";

function App() {
  return (
    <main className="main">
      <h1>What is Bob?</h1>
      <p>Based on your understanding of the entity Bob, answer the following questions. There are no right or wrong answers.</p>
      <h2>1. Observability</h2>
      <form className="form">
        
        {questionSchema.map((question) => (
          <Questions key={question.name} {...question} />
        ))}

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default App;  