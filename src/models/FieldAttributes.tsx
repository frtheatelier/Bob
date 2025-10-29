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
}

interface SelectFieldAttributes extends BaseFieldAttributes {
    type: FieldType.SELECT;
    options: {
        label: string;
        value: string
    }[];
}

interface RadioFieldAttributes extends BaseFieldAttributes {
    type: FieldType.RADIO;
    options: {
        label: string;
        value: string
    }[];
}

interface CheckboxFieldAttributes extends BaseFieldAttributes {
    type: FieldType.CHECKBOX;
}

type FieldAttributes = TextFieldAttributes | SelectFieldAttributes | RadioFieldAttributes | CheckboxFieldAttributes;
export default FieldAttributes;
export { FieldType, type TextFieldAttributes, type SelectFieldAttributes, type RadioFieldAttributes, type CheckboxFieldAttributes };