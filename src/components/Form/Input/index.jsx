import { useState, useEffect, useRef } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  FieldContainer,
  Field,
  Label,
  InputLeft,
  Container,
  Eye,
} from "./input.styles";

export const CustomFormInput = ({
  formik,
  type,
  id,
  Left,
  label,
  placeholder,
  width = "55rem",
  required,
  error,
  val,
  disabled = false,
  name,
  onChange,
}) => {
  //id must be the same as the formik key used for validation
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState("");
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

    type === "number"
      ? e.target.value >= 0
        ? setValue(e.target.value)
        : null
      : setValue(e.target.value);
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
          type={type !== "password" ? type : visible ? "text" : type}
          placeholder={placeholder}
          name={name ?? id}
          id={id}
          onChange={handleChange}
          value={
            type === "address" ? undefined : formik ? formik.values[id] : value
          }
          onBlur={formik && formik.handleBlur}
          autoComplete="off"
          disabled={disabled}
        />
        {Left && (
          <InputLeft>
            <Left />
          </InputLeft>
        )}
        {type === "password" && (
          <Eye onClick={() => setVisible(!visible)}>
            {visible ? <FaEyeSlash /> : <FaEye />}
          </Eye>
        )}
      </FieldContainer>
      {formik && formik.touched[id] && formik.errors[id] ? (
        <p className="error-message">{formik.errors[id]}</p>
      ) : null}
    </Container>
  );
};
