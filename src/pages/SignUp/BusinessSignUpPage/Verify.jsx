import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import { useNavigate} from "react-router-dom"
import styled from "styled-components"
import {FaCheck, FaComment, FaEnvelope} from "react-icons/fa"
import { useColorModeValue } from '@chakra-ui/color-mode';
import FormTitle from "../../../components/Form/FormTitle"
import CustomField from "../../../components/Form/Input/UnControlled"
import { Button } from "@chakra-ui/react"
import {setVerification} from "../../../ReduxContianer/actions/auth/signupActions";

const Verify = () => {
    const yellowbtn = useColorModeValue('yellow.500');

    const { email, phoneNumber, verification } = useSelector(
			(state) => state.businessSignup
		);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     console.log(email, tel, verification)
    //     if(!email || !tel){
    //         navigate(-1)
    //     }
    // }, [])

  return (
		<>
			<FormTitle
				title='Create a business account'
				text={
					verification === 'phoneNumber'
						? 'We need to verify a phone number with which you can recieve OTP for your card transactions.'
						: 'We need to verify an email with which you can recieve OTP for your card transactions.'
				}
			/>
			<Container>
				{verification === 'phoneNumber' ? (
					<CustomField type='phoneNumber' label='Phone Number' value={phoneNumber} />
				) : (
					<CustomField type='email' label='Email' value={email} />
				)}

				<HowTitle>How would you like to receive the OTP?</HowTitle>
				<Select
					selected={verification === 'phoneNumber'}
					onClick={() =>
						verification === 'phoneNumber' ? null : setVerification(dispatch)
					}>
					<LeftIcon>
						<FaComment />
					</LeftIcon>
					<p>Via Message</p>
					<Check>
						<FaCheck />
					</Check>
				</Select>
				<Select
					selected={verification === 'email'}
					onClick={() =>
						verification === 'email' ? null : setVerification(dispatch)
					}>
					<LeftIcon>
						<FaEnvelope />
					</LeftIcon>
					<p>Via Email</p>
					<Check>
						<FaCheck />
					</Check>
				</Select>
				<Button
					onClick={() => navigate('otp')}
					mt={4}
					bg={yellowbtn}
					width='500px'
					h='75px'
					borderRadius='0px 11px 11px 11px'
					type='submit'
					color='white'
					_hover={{ bg: '#1A202C' }}
					// loadingText='Sending Otp...'
					spinnerPlacement='end'>
					Continue
				</Button>
			</Container>
		</>
	);
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
    width: 500px;
    position: relative;
    border: #D9D9D9 solid ${1 * 0.063}rem;
    border-radius: 0px 11px 11px 11px;
    height: 75px;
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
   display:flex;
   flex-direction: column;
   align-items: center;

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