import { useState, useEffect, useRef } from "react";

import { FaCaretDown } from "react-icons/fa";
import { Spinner, SpinnerContainer } from "../../Spinner/style";

import { SelectContainer, SelectOptions, SelectButton } from "./select.styles";
import { Label } from "../style";

export const CustomSelect = ({
  formik,
  id = `select-${Math.random().toString(16).slice(10)}`,
  items,
  start,
  end,
  label,
  required,
  height,
  val,
  name,
  onChange,
  placeholder,
}) => {
  const [open, setOpen] = useState(false);

  const selected = useRef(null);
  const selectRef = useRef(null);

  useEffect(() => {
    const options = document.querySelector(`#custom-options-${id}`);
    const placeholder = document.querySelector(`#placeholder-${id}`);
    const select = document.querySelector(`#${id}`);

    if (val) {
      select.value = val;
    }
    if (formik && val) {
      formik[id].value = val;
    }

    options.addEventListener(
      "click",
      (e) => handleSelectOption(e, placeholder, select),
      false
    );

    return () =>
      options.removeEventListener(
        "click",
        (e) => handleSelectOption(e, placeholder, select),
        false
      );
  }, []);

  function handleSelectOption(e, pl, select) {
    selected.current = e.target.dataset.value;
    pl.value = e.target.dataset.value;

    select.value = e.target.dataset.value;

    select.dispatchEvent(new Event("change", { bubbles: true }));
    setOpen(false);
  }

  const handleChange = (e) => {
    if (formik) formik.handleChange(e);
    if (onChange) onChange(e);
  };

  return (
    <SelectContainer>
      {label && (
        <Label>
          <span>{label}</span>
          {required && <span className="required">*</span>}
        </Label>
      )}
      <SelectButton
        type="button"
        open={open}
        onClick={() => setOpen(!open)}
        onBlur={(e) => {
          setTimeout(() => {
            setOpen(false);
          }, 150);
        }}
      >
        <select
          name={name ?? id}
          id={id}
          onChange={handleChange}
          onBlur={formik && formik.handleBlur}
          ref={selectRef}
        >
          <option value="">{placeholder ?? "Select"}</option>
          {items &&
            items.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
        </select>
        <p id={`placeholder-${id}`}>
          {(selectRef.current && selectRef.current.value) || val}
        </p>
        <FaCaretDown />
      </SelectButton>
      <SelectOptions open={open} id={`custom-options-${id}`} height={height}>
        <ul>
          {items && items.length > 0 ? (
            items.map((item, i) => (
              <li key={i}>
                <p data-value={item}>{item}</p>
              </li>
            ))
          ) : (
            <Spinner size={4} margin="1rem auto 1rem auto" />
          )}
        </ul>
        {end}
      </SelectOptions>
      {formik && formik?.errors[id] && formik.touched[id] && (
        <p className="error-message">{formik.errors[id]}</p>
      )}
    </SelectContainer>
  );
};
