// src/App.tsx
import React from 'react';
import './App.css';

import Questions, {questionSchema} from "../Questions";
import { set } from 'react-hook-form';

import QuestionAttributes from '../../models/QuestionAttributes';

interface AiSectionProps {
    questions: QuestionAttributes[];
    onSubmit: (answers: {[key: string]: string}) => void;
}

const AiSection: React.FC<AiSectionProps> = ({ questions, onSubmit }) => {
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
          <p>Based on how you answered the previous section, here are follow up questions to better understand your idea of Bob</p>
          <h2>2. Extended questions</h2>
          <form className="form">
            
            {questions.map((question) => (
              <Questions key={question.name} {...question} onChange={handleChange} />
            ))}

            <button type="submit">Proceed</button>
          </form>
        </div>
    );
};

export default AiSection;