// src/components/Field.tsx
import React from "react";
import FieldAttributes, { FieldType } from "../models/FieldAttributes";
import TextField from "./Fields/TextField";
// import SelectField from "./Fields/SelectField";
import RadioField from "./Fields/RadioField";

const Field: React.FC<FieldAttributes> = (props) => {
  switch (props.type) {
    case FieldType.TEXT:
      return <TextField {...props} />;
    case FieldType.RADIO:
      return <RadioField {...props} />;
    default:
      throw new Error("Invalid Field Type");
  }
};

export default Field;