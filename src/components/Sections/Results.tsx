// src/App.tsx
import React from 'react';
import './App.css';

import Questions, {questionSchema} from "../Questions";
import { set } from 'react-hook-form';

import QuestionAttributes from '../../models/QuestionAttributes';

interface ResultSectionProps {
    summary: string;
}

const ResultSection: React.FC<ResultSectionProps> = ({ summary }) => {
    return (
        <div className="result-container">
            <h2>Results</h2>
            <p>{summary}</p>
        </div>
    );
};

export default ResultSection;