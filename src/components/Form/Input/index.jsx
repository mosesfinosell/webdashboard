import React from 'react'
import {FieldContainer, Field, Label, InputLeft, Container} from "../style"

const Index = ({formik, type, id, Left, label, placeholder, width=550}) => {
  //id must be the same as the formik key used for validation
  return (<Container width={width}>
            <Label htmlFor={type}>{label}</Label>
            <FieldContainer >
                
                <Field
                    type={type}
                    placeholder={placeholder}
                    name={id}
                    id={id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values[id]}
                />
                {Left ?
                  <InputLeft>
                    <Left />
                  </InputLeft>
                  :
                  null
                }
                
            </FieldContainer>
            {formik.touched[id] && formik.errors[id] ? <p className="error-message">{formik.errors[id]}</p> : null}
          </Container>
  )
}

export default Index


