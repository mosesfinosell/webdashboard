import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import {FaCheck, FaComment, FaEnvelope} from "react-icons/fa"

import FormTitle from "../../../components/Form/FormTitle"
import CustomField from "../../../components/Form/Input/UnControlled"
import Button from "../../../components/Form/Submit"


import {setVerification} from "../../../ReduxContianer/BusinessSignup/signupActions";

const Verify = () => {
    const {email, tel, verification} = useSelector((state)=> state.businessSignup)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(()=>{
        console.log(email, tel, verification)
        if(!email || !tel){
            navigate(-1)
        }
    }, [])

  return (
    <>
    <FormTitle title="Create a business account" text={verification === "tel" ?
    "We need to verify a phone number with which you can recieve OTP for your card transactions."
    :
    "We need to verify an email with which you can recieve OTP for your card transactions."
    } />
    <Container>
        {verification === "tel" ?
        <CustomField type="tel" label="Phone Number" value={tel} /> 
        :
        <CustomField type="email" label="Email" value={email} /> 
        }
    
        <HowTitle>How would you like to receive the OTP?</HowTitle>
        <Select selected={verification === "tel"} onClick={()=>verification === "tel" ? null : setVerification(dispatch)}>
            <LeftIcon>
                <FaComment />
            </LeftIcon>
            <p>Via Message</p>
            <Check>
                <FaCheck />
            </Check>
        </Select>
        <Select selected={verification === "email"} onClick={()=>verification === "email" ? null : setVerification(dispatch)}>
            <LeftIcon>
                <FaEnvelope />
            </LeftIcon>
            <p>Via Email</p>
            <Check >
                <FaCheck />
            </Check>
        </Select>
        <Button type="button" onClick={()=>navigate("otp")} >Continue</Button>
    </Container>
    </>
  )
}

export default Verify

const HowTitle = styled.h3`
    margin: ${22 * 0.063}rem 0 ${11 * 0.063}rem;
    color: #273B4A;
    font-weight: 700;
    font-size: ${21 * 0.063}rem;
    line-height: ${21 * 0.063}rem; 
`

const Check = styled.div`
    width: ${23 * 0.063}rem;
    height: ${23 * 0.063}rem;
    border-radius: 50%;
    border: solid ${1 * 0.063}rem #8C8C8C;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${10 * 0.063}rem;
    color: #fff;
    
    position: absolute;
    right: 2rem;
    top: 0;
    bottom: 0;
    margin: auto;
`

const Select = styled.div`
    width: 100%;
    position: relative;
    border: #D9D9D9 solid ${1 * 0.063}rem;
    border-radius: 0px 11px 11px 11px;
    height: ${90 * 0.063}rem;
    margin-bottom: ${13 * 0.063}rem;
    background: ${prop => prop.selected ? "#FDF9ED" : "#FAFAFA"};
    border-color: ${prop => prop.selected ? "#F5D776" : "#D9D9D9"};
    display: flex;
    align-items: center;
    padding-left: 5rem; 
    color: #8C8C8C;
    cursor: pointer;
    p{
       font-size: ${18 * 0.063}rem;
       line-height: ${22 * 0.063}rem; 
       color: ${prop => prop.selected ? "#000" : ""};
    }
    input{
        

    }
    svg{
        color: ${prop => prop.selected ? "#D6AA1B" : ""}
    }
    ${Check} {
        background: ${prop => prop.selected ? "#D6AA1B" : ""};
        border: ${prop => prop.selected ? "none" : ""};
        svg{
            color: #fff;
        }
        
    }
`

const Container = styled.div`
    width: ${0.063 * 650}rem;
    margin: 0 auto;

    button{
        margin-top: ${0.063 * 27}rem;
    }
`


const LeftIcon = styled.div`
    position: absolute;
    left: 2rem;
    top: 0;
    bottom: 0;
    margin: auto;
    width: ${18 * 0.063}rem;
    height: ${18 * 0.063}rem;
`