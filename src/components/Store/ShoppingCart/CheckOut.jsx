import {useNavigate} from 'react-router-dom'
import {useFormik} from "formik"
import * as yup from 'yup'
import Field from "../../Form/Input"
import {Path, Button, Form} from "./styles"

const CheckOut = () => {
  const navigate = useNavigate()

  const validationSchema = yup.object().shape({
    name: yup.string().required("Please enter your name"),
    email: yup.string().email("Please enter a valid email").required("Your email is required"),
    tel: yup.number().required("Your phone number is required"),
    address: yup.string().required(),
    note: yup.string()

  })
    const initialValues = {
      name:"",
      email:"",
      tel:"",
      address:"",
      note:""
    }
    const onSubmit = (values, formik) => {
      console.log(values, formik)
      navigate("/choose-payment")
    }
    const formik = useFormik({
      initialValues,
      onSubmit,
      validationSchema
    })
  return (
    <>
        <Path>cart / information</Path>
        <Form onSubmit={formik.handleSubmit}>
          <div className="scroll">
            <Field formik={formik} label="Name" id="name" type="string" placeholder="Adekunle Chika" width="100%" />
            <Field formik={formik} label="Email"  id="email" type="email" placeholder="youremail@mail.com" width="100%" />
            <Field formik={formik} label="Phone Number" id="tel" type="tel" placeholder="08050000002" width="100%" />
            <Field formik={formik} label="Delivery Address" id="address" type="string" placeholder="Enter your delivery address" width="100%" />
            <Field formik={formik} label="Delivery Note" id="note" type="string" placeholder="Enter delivery note" width="100%" />
          </div>
          <Button type="submit">Place Order</Button>
        </Form>
    </>
  )
}

export default CheckOut