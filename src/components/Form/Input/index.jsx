import React from 'react'
import {FieldContainer, Field, Label, InputLeft, Container} from "../style"

const Index = ({formik, type, Left, label, placeholder}) => {
  return (<Container>
            <Label htmlFor={type}>{label}</Label>
            <FieldContainer >
                
                <Field
                    type={type}
                    placeholder={placeholder}
                    name={type}
                    id={type}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[type]}
                />
                <InputLeft>
                    <Left />
                </InputLeft>
            </FieldContainer>
            {formik.touched[type] && formik.errors[type] ? <p className="error-message">{formik.errors[type]}</p> : null}
          </Container>
  )
}

export default Index