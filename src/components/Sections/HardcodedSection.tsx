// src/App.tsx
import React from 'react';
import './App.css';

import Questions from "../Questions";
import { questionSchemaHardcode } from '../../QuestionSchemas';
import { set } from 'react-hook-form';

interface HardcodedSectionProps {
    onSubmit: (answers: {[key: string]: string}) => void;
}

const HardcodedSection: React.FC<HardcodedSectionProps> = ({ onSubmit }) => {
    const [answers, setAnswers] = React.useState<{[key: string]: string}>({});
    // const [results, setResults] = React.useState<string | null>(null);

    const handleChange = (name: string, value: string) => {
        setAnswers((answers) => ({...answers, [name]: value}));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(answers);
    }

    return (
        <div className="form-container">
          <p>Based on your understanding of the entity Bob, answer the following questions. There are no right or wrong answers.</p>
          <h2>1. Observability</h2>
          <form className="form">
            
            {questionSchemaHardcode.map((question) => (
              <Questions key={question.name} {...question} onChange={handleChange} />
            ))}

            <button type="submit">Proceed</button>
          </form>
        </div>
    );
};

export default HardcodedSection;
// export {HardcodedSectionProps};