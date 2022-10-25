import { useState } from "react";

import { FieldContainer, Field, Label, Container } from "./date.styles";

export const CustomDate = ({
  formik,
  id,
  label,
  width = "55rem",
  required,
  val,
}) => {
  //id must be the same as the formik key used for validation

  const [value, setValue] = useState(val ?? "");

  const handleChange = (e) => {
    if (formik) formik.handleChange(e);

    setValue(e.target.value);
  };
  return (
    <Container width={width}>
      <Label htmlFor={id}>
        <span>{label}</span>
        {required && <span className="required">*</span>}
      </Label>
      <FieldContainer>
        <Field
          type="date"
          name={id}
          id={id}
          onChange={handleChange}
          value={value}
          onBlur={formik && formik.handleBlur}
          autoComplete="off"
        />
      </FieldContainer>
      {formik && formik.touched[id] && formik.errors[id] ? (
        <p className="error-message">{formik.errors[id]}</p>
      ) : null}
    </Container>
  );
};
