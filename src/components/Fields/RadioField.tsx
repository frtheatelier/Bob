import React from 'react';
import { RadioFieldAttributes } from '../../models/FieldAttributes';

const RadioField: React.FC<RadioFieldAttributes> = ({ name, label, options }) => {
    return (
        <div>
            <label>{label}</label>
            {options.map((option) => (
                <div key={option.value}>
                    <input
                        type="radio"
                        id={`${name}-${option.value}`}
                        name={name}
                        value={option.value}
                    />
                    <label htmlFor={`${name}-${option.value}`}>{option.label}</label>
                </div>
            ))}
        </div>
    )
};

export default RadioField;