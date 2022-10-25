import styled from "styled-components"
import {Formik, Form, Field} from "formik"
import * as Yup from 'yup'
import { collectEmail } from "../../network/utils";

import {
  PrimarySection,
  PrimaryTitle,
  borderRadius,
  PrimaryButton,
  smallBorderRadius,
} from "../../Styles";

const BlogSubscribe = ({ header }) => {
  const emailValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email required"),
  });
  return (
    <Subscribe>
      <PrimaryTitle>{header}</PrimaryTitle>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={emailValidationSchema}
        onSubmit={(value, { resetForm }) => {
          collectEmail(value);
          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Email>
            <div>
              <Field
                name="email"
                type="email"
                placeholder="Enter your email address"
              />
              {errors.email && touched.email ? (
                <p className="form-error">{errors.email}</p>
              ) : null}
            </div>
            <PrimaryButton type="submit">
              <span>Subscribe</span>
            </PrimaryButton>
          </Email>
        )}
      </Formik>
    </Subscribe>
  );
};

export default BlogSubscribe;
const Subscribe = styled(PrimarySection)`
  margin-bottom: 10rem;

  ${PrimaryTitle} {
    font-weight: 500;
    text-align: center;
    font-size: 2.5rem;
    line-height: 3rem;
    color: #273b4a;
    margin-bottom: 4rem;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 31.6rem;

    ${PrimaryTitle} {
      font-size: 5rem;
      line-height: 5.3rem;
    }
  }
`;
const Email = styled(Form)`
  display: flex;
  flex-direction: column;
  border: none;

  input {
    border-radius: ${smallBorderRadius};
    width: 100%;
    background: #f5f5f5;
    font-size: 1.4rem;
    line-height: 1.8rem;
    padding: 2.1rem 2.8rem;
    outline: none;
    &::placeholder {
      color: #505050;
    }
  }
  ${PrimaryButton} {
    font-size: 1.4rem;
  }
  .form-error {
    color: rgb(245, 79, 79);
    font-weight: 700;
    font-size: 0.8rem;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    input {
      width: 48.3rem;
      padding: 2.3rem 2.8rem;
      font-size: 1.8rem;
      margin-right: 2rem;
    }

    ${PrimaryButton} {
      padding: 2.3rem 2.8rem;
      font-size: 1.8rem;
    }
  }
`;
