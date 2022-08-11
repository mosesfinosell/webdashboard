import {useRef, useState, useEffect, useCallback} from 'react'
import {useSelector, useDispatch} from "react-redux"
import FormTitle from "../../../../components/Form/FormTitle"
import {InputContainer, Input, Hidden, Resend, Change} from "./styles"

const OTP = () => {
  const hidden = useRef(null)
  const [otp, setOtp] = useState("")
  const [count, setCount] = useState(90)
  const {verification, email, tel} = useSelector((state)=>state.businessSignup)
  
  const formattedEmail = email?.split("@").map((part, i)=>{
      if(i === 0){
          return part.replace(/(.{1}).*(.{1})/, `$1${"*".repeat(part.length - 2)}$2`)
      }
      return part
  })
  .join("@")

  const timer = ()=>{ 
    console.log("Timer")
    return setInterval(()=>{
      console.log(count)
      setCount(count - 1)
    }, 1000)
}

  

  useEffect(()=>{
    console.log("Loaded")
    const interval = timer()
    
    return clearInterval(interval)
  }, [])

  const handleFocus = ()=>{
    hidden.current.focus()
  }
  const handleChange = (e) => {
    
    if(otp.length < 4 || e.key === "Backspace"){
      setOtp(e.target.value)
    }
    
  }
  return (
    <>
        <FormTitle title="Enter OTP" text={verification === "tel" ? 
        `Enter the OTP sent to your phone number ending with ${tel.substring(tel.length - 4)}` 
        : 
        `Enter the OTP sent to email address ${formattedEmail}`} />
        <InputContainer onClick={handleFocus}>
          <Input>
            <input type="text" readOnly value={otp[0] ? otp[0] : ""} />
          </Input>
          <Input>
            <input type="text" readOnly  value={otp[1] ? otp[1] : ""} />
          </Input>
          <Input>
            <input type="text" readOnly value={otp[2] ? otp[2] : ""} />
          </Input>
          <Input>
            <input type="text" readOnly value={otp[3] ? otp[3] : ""} />
          </Input>
          
        </InputContainer>
        <Resend resend={count < 1}>{
          count ? 
          `Resend ${verification === "tel" ? "SMS" : "Email"}: ${Math.floor(count/60).toString().padStart(2, "0")}:${Math.floor(count%60).toString().padStart(2, "0")}`
          :
          `Resend`
        }</Resend>
        <Hidden className="hidden" ref={hidden} type="text" maxLength="4" onKeyUp={(e)=>handleChange(e)} />
        <Change>
          <p>Having issues? <span>Try {verification === "tel" ? "Email" : "SMS"}</span></p>
        </Change>
    </>
  )
}

export default OTP