import {useNavigate, useParams} from 'react-router-dom'
import {useQuery} from "react-query"
import {useDispatch} from "react-redux"
import {useFormik} from "formik"
import * as yup from 'yup'
import Field from "../../Form/Input"
import {Path, Button, Form} from "./styles"
import {Store} from "../../../utils/API"
import {setStore} from "../../../ReduxContianer/shoppingCart/shoppingCartActions"
import toast from "react-hot-toast"

const CheckOut = () => {
  const store = new Store()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {businessID} = useParams()

  const {data, error, isData, isError, isLoading} = useQuery(["store", businessID], ()=>store.getStoreInfo(businessID))

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
     
      if(data){
        console.log("store data", data)
        const storeData = {
          storeName: data.details.name,
          id: data.details.businessid,
          businessEmail: data.details.businessmail,
          ...values
        }
        setStore(dispatch, storeData)
        return navigate("/payment")
      }
      toast.error("An error ocurred while placing your order. Try again later.")
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