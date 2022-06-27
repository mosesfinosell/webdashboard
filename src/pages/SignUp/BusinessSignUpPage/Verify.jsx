import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom"

import FormTitle from "../../../components/Form/FormTitle"
import CustomField from "../../../components/Form/Input/UnControlled"
import Submit from "../../../components/Form/Submit"

import {setVerification} from "../../../ReduxContianer/BusinessSignup/signupActions";

const Verify = () => {
    const {email, tel, verification} = useSelector((state)=> state.businessSignup)
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(email, tel)
        if(!email || !tel){
            navigate(-1)
        }
    }, [])

  return (
    <>
    <FormTitle title="Create a business account" text="Use your business information" />
    {/* <CustomField type={verification} label={} /> */}
    </>
  )
}

export default Verify