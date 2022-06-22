import styled from "styled-components"
import {Formik, Form, Field} from "formik"
import * as Yup from 'yup'
import collectEmail from "../../utils/collectEmail"

import {PrimarySection, PrimaryTitle, borderRadius, PrimaryButton} from "../../Styles"



const BlogSubscribe = () => {
    const emailValidationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email required")
    })
  return (
    <Subscribe>
                <PrimaryTitle>Like what you see? Subscribe now!</PrimaryTitle>
                <Formik
                    initialValues={{
                        email:""
                    }}
                    validationSchema={emailValidationSchema}
                    onSubmit={(value, {resetForm})=>{
                       
                        collectEmail(value)
                        resetForm()
                    }}
                >
                    {({errors, touched})=>(
                    <Email>
                        <div>
                            <Field name="email" type="email" placeholder="Enter your email address" />
                            {errors.email && touched.email ? (<p className="form-error">{errors.email}</p>) : null}
                        </div>
                        <PrimaryButton type="submit">Subscribe</PrimaryButton>
                    </Email>
                    )}
                </Formik>
            </Subscribe>
  )
}

export default BlogSubscribe
const Subscribe = styled(PrimarySection)`
    margin-bottom: ${100 * 0.063}rem;

    ${PrimaryTitle}{
        font-weight: 500;
        text-align: center;
        font-size: ${35 * 0.063}rem;
        line-height: ${38 * 0.063}rem;
        color: #273B4A;
        margin-bottom: ${40 * 0.063}rem;
    }
    
    @media only screen and (min-width: 768px){
        margin-bottom: ${316 * 0.063}rem;

        ${PrimaryTitle}{
            font-size: ${50 * 0.063}rem;
            line-height: ${53 * 0.063}rem;
            
        }
    } 
`
const Email = styled(Form)`
    display: flex;
    flex-direction: column;
    border: none;
    
    input{
        ${borderRadius};
        width: 100%;
        background: #F5F5F5;
        font-size: ${14 * 0.063}rem;
        line-height: ${18 * 0.063}rem;
        padding: ${21 * 0.063}rem ${28 * 0.063}rem;
        outline: none;
        &::placeholder{
        color: #505050
        }
    }
    ${PrimaryButton}{
        font-size: ${14 * 0.063}rem;
    }
    
    @media only screen and (min-width: 768px){
        flex-direction: row;
        justify-content: center;
        align-items: center;
        input{
            width: ${483 * 0.063}rem;
            padding: ${23 * 0.063}rem ${28 * 0.063}rem;
            font-size: ${18 * 0.063}rem;
            margin-right: ${20 * 0.063}rem;
        }

        ${PrimaryButton}{
            padding: ${23 * 0.063}rem ${28 * 0.063}rem;
            font-size: ${18 * 0.063}rem;
        }
    }
`
