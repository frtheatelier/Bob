import React from "react";
import FieldAttributes, { FieldType } from "../models/FieldAttributes";
import TextField from "./Fields/TextField";
// import SelectField from "./Fields/SelectField";
import RadioField from "./Fields/RadioField";

import QuestionAttributes, {QuestionType} from "../models/QuestionAttributes";

// QUIZ (for now) only consists of Yes/No questions
// Might expand to more question types once I figure out the form handling

const Questions: React.FC<QuestionAttributes> = (props) => {
    switch (props.type) {
        case QuestionType.YESNO:
            return (
                <RadioField
                    label={props.questionText}
                    name={props.name}
                    options={[
                        { label: "Yes", value: "yes" },
                        { label: "No", value: "no" },
                    ]}
                    onChange={props.onChange}

                    type={FieldType.RADIO}
                />
            );
    }
};

export default Questions;