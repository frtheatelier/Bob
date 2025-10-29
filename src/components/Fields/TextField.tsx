import React from 'react';
import { TextFieldAttributes } from '../../models/FieldAttributes';

const TextField: React.FC<TextFieldAttributes> = ({ name, label, type }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} id={name} type={type} />
        </div>
    )
};

export default TextField;