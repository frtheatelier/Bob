enum FieldType {
    TEXT = "text",
    SELECT = "select",
    RADIO = "radio",
    CHECKBOX = "checkbox",
}

interface BaseFieldAttributes {
    label: string;
    name: string;
    type: FieldType;
}

interface TextFieldAttributes extends BaseFieldAttributes {
    type: FieldType.TEXT;
    onChange?: (name: string, value: string) => void;
}

interface SelectFieldAttributes extends BaseFieldAttributes {
    type: FieldType.SELECT;
    options: {
        label: string;
        value: string
    }[];
    onChange?: (name: string, value: string) => void;
}

interface RadioFieldAttributes extends BaseFieldAttributes {
    type: FieldType.RADIO;
    options: {
        label: string;
        value: string
    }[];
    onChange?: (name: string, value: string) => void;
}

interface CheckboxFieldAttributes extends BaseFieldAttributes {
    type: FieldType.CHECKBOX;
}

type FieldAttributes = TextFieldAttributes | SelectFieldAttributes | RadioFieldAttributes | CheckboxFieldAttributes;
export default FieldAttributes;
export { FieldType, type TextFieldAttributes, type SelectFieldAttributes, type RadioFieldAttributes, type CheckboxFieldAttributes };