enum QuestionType {
    YESNO = "yesno",
}

interface QuestionAttributes {
    questionText: string;
    name: string;
    type: 'yesno'; // For now, only yes/no questions
    onChange?: (name: string, value: string) => void;
}

export default QuestionAttributes;
export {QuestionType, type QuestionAttributes};