import {Formik,Form,Field} from 'formik'
import {
    Center,
    Input,
    InputRightElement,
    InputLeftElement,
    InputGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Box,
    Stack,
    Image,
    Text,
    Container
  } from '@chakra-ui/react'
import {useState} from 'react'
import {Link as RLink} from 'react-router-dom'
import logo from '../../../assets/Logomark.png'
import {MdWifiCalling3} from 'react-icons/md'
import {FaEyeSlash,FaEye} from 'react-icons/fa'
import {FaLock} from 'react-icons/fa'
import { useColorModeValue } from "@chakra-ui/color-mode";
import {useSelector, useDispatch} from 'react-redux'
import * as Yup from 'yup'
import {Redirect,useHistory} from 'react-router-dom'
import {peronalUserLogin} from '../../../ReduxContianer/PersonalRedux/PersonalAction';


export default function PersonalAccountSignIn() {
    const yellowbtn = useColorModeValue('yellow.500')
    const [phoneNumber ,setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')

    const [show, setShow] = useState(false)


    // Redux 
    const dispatch = useDispatch()
    const personal = useSelector((state) => state.personal)
   const {error,loading,users} = personal
   

    
    // const toast = useToast({error})

//Validate
const SignInSchema = Yup.object().shape({
  phoneNumber: Yup.number()
  .required("Phone number is required"),
  password: Yup.string()
  .required("Password is required"),
})

const history = useHistory()

// Function
const handleClick = () => setShow(!show)

    const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(peronalUserLogin(phoneNumber,password))
      localStorage.setItem('phoneNumber', phoneNumber)
      }

      function handleButton () {
        if(!users) {
          return error
        }else {
          return history.push('/verify-otp') 
        }
      }
      
     
      
        return (
          <Container maxW='container.lg'>
            <Box maxW='xlg' p='20' m='36' boxSizing='border-box' borderWidth='1px' borderRadius='0px 21px 21px 21px'  overflow='hidden'>
        <Center>
        <Stack>
        <Image mb='15' src={logo}  alt="logo" />
        </Stack>
        </Center>
        <Center>
        </Center>
        <Center>
        <Stack >
        <Text fontSize='36px' mt='10' fontWeight='bold' lineHeight='5'>Welcome back{error}</Text>
        </Stack> 
        </Center>
         <Center>
           <Stack mt='8'>
             <Text color='gray'>Enter your login details</Text>
           </Stack>
         </Center>
         <Formik 
          initialValues={{
            phoneNumber:'',
            password:''
          }} 
          validationSchema={SignInSchema}
          >
            {() => (
                <Center>
              <Form 
               onSubmit={handleSubmit}
              
              >
              <Field name='phoneNumber'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.phoneNumber && form.touched.phoneNumber} mt={4}>
                      <FormLabel htmlFor='name'>Phone Number</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='15px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<MdWifiCalling3 />}
                   />
               <Input {...field} value={phoneNumber} type='phoneNumber'
                 onChange={(e) => setPhoneNumber(e.target.value)}
               placeholder='08012345678' width='400px' h='70px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='password' >
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.password && form.touched.password} mt={4}>
                      <FormLabel  htmlFor='password'>Password</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      m='15px 1px'
                      fontSize='18px'
                      color='yellow.500'
                      children={<FaLock/>}
                      />

                      <InputRightElement
                      pointerEvents='visible'
                      m='15px 15px'
                      color='yellow.500'  
                   >
                       
                       <Button onClick={handleClick} fontSize='25px' size='sm' b='transparent' cursor='pointer'>
                      {show ? <FaEyeSlash/> : <FaEye/>}
                      </Button>
                    </InputRightElement>
               <Input {...field} 
               type={!show ? 'password' : 'text'} 
               onClick={handleClick}  
               onChange={(e) => setPassword(e.target.value)} 
               value={password} 
               placeholder='*********' width='400px' h='70px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {/* {  users  ? <Redirect to='/dashboard'/> :  */}
                <Button
                  mt={4}
                  bg={yellowbtn}
                  width='400px' h='70px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                  onClick={handleButton}
                >
                  Login
                </Button> 
                {/* }  */}
              </Form>
              </Center>
            )}
          </Formik>
          <Center>
         <Stack mt='5'>
       <Text as={RLink}  pl='2' to='/forget-password' color='yellow.500'>
       Forgot Password
       </Text>
        </Stack> 
         </Center>
          </Box>
          </Container>
        )
      }
      

