enum QuestionType {
    YESNO = "yesno",
}

interface QuestionAttributes {
    questionText: string;
    name: string;
    type: 'yesno'; // For now, only yes/no questions
}

export default QuestionAttributes;
export {QuestionType, type QuestionAttributes};