// src/App.tsx
import React from 'react';
import './App.css';

import Questions, {questionSchema} from "../Questions";
import { set } from 'react-hook-form';

const HardcodedSection: React.FC = () => {
    const [answers, setAnswers] = React.useState<{[key: string]: string}>({});
    const [results, setResults] = React.useState<string | null>(null);

    const handleChange = (name: string, value: string) => {
        setAnswers((answers) => ({...answers, [name]: value}));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setResults(null);

        const res = await fetch("http://localhost:5000/api/generate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(answers),
        });

        const data = await res.json();
        setResults(data.result);
    }

    return (
        <div className="form-container">
          <p>Based on your understanding of the entity Bob, answer the following questions. There are no right or wrong answers.</p>
          <h2>1. Observability</h2>
          <form className="form">
            
            {questionSchema.map((question) => (
              <Questions key={question.name} {...question} onChange={handleChange} />
            ))}

            <button type="submit">Proceed</button>
          </form>
        </div>
    );
};