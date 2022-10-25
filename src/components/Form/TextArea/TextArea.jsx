import { useState, useEffect, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FieldContainer, Field, Label, Container } from "./textArea.styles";

export const CustomTextArea = ({
  formik,
  type,
  id,
  label,
  placeholder,
  width = "55rem",
  required,
  val,
  onChange,
}) => {
  //id must be the same as the formik key used for validation
  const [value, setValue] = useState(val ?? "");
  const inputRef = useRef(null);

  useEffect(() => {
    if (val) {
      inputRef.current.value = val;
      inputRef.current.dispatchEvent(new Event("change", { bubbles: true }));
      setValue(val);

      if (formik) {
        formik.values[id] = val;
      }
    }
  }, [val]);

  const handleChange = (e) => {
    if (formik) formik.handleChange(e);
    if (onChange) onChange(e);
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
          ref={inputRef}
          type={type ?? "text"}
          placeholder={placeholder}
          name={id}
          id={id}
          value={formik ? formik.values[id] : value}
          onChange={handleChange}
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
