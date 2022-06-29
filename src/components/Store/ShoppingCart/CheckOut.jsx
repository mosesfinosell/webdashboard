import React from 'react'
import {useFormik} from "formik"
import * as yup from 'yup'
import Field from "../../Form/Input"
import {Path, Button} from "./styles"

const CheckOut = () => {
    
  return (
    <>
        <Path>cart / information</Path>
        <form>
            
            <Button type="button">Place Order</Button>
        </form>
    </>
  )
}

export default CheckOut