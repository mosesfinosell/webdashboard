import React from 'react'
import {FieldContainer, Field, Label, InputLeft, Container} from "../style"

const UnControlled = ({type, label, value}) => {
  return (<Container>
            <Label htmlFor={type}>{label}</Label>
            <FieldContainer >
                
                <Field
                    type={type}
                    
                    name={type}
                    id={type}
                    value={value}
                    disabled={true}
                />
                
            </FieldContainer>
          </Container>
  )
}

export default UnControlled