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
import {useHistory} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import {peronalUserLogin} from '../../../ReduxContianer/PersonalRedux/PersonalAction';


export default function PersonalAccountSignIn() {
    const yellowbtn = useColorModeValue('yellow.500')
    const [phonenumber ,setPhonenumber] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)


    // Redux 
    const dispatch = useDispatch()
    const personal = useSelector((state) => state.personal)
   const {error,loading,users} = personal
   

    
    // const toast = useToast({error})

//router
const history = useHistory()


// Function
const handleClick = () => setShow(!show)

    const handleSubmit = (e) => {
      dispatch(peronalUserLogin(phonenumber,password))
      e.preventDefault()
      console.log(phonenumber,password)
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
        <Text fontSize='36px' mt='10' fontWeight='bold' lineHeight='5'>Welcome back</Text>
        </Stack> 
        </Center>
         <Center>
           <Stack mt='8'>
             <Text color='gray'>Enter your login details</Text>
           </Stack>
         </Center>
          <Formik 
           
          >
            {() => (
                <Center>
              <Form onSubmit={handleSubmit}>
              <Field name='number'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Phone number</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='25px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<MdWifiCalling3 />}
                   />
               <Input {...field} value={phonenumber}
                 onChange={(e) => setPhonenumber(e.target.value)}
               placeholder='08012345678' width='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='password' >
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel  htmlFor='password'>Password</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      m='20px 1px'
                      fontSize='18px'
                      color='yellow.500'
                      children={<FaLock/>}
                      />

                      <InputRightElement
                      pointerEvents='none'
                      m='25px 15px'
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
               placeholder='*********' width='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                {  users  ? <Redirect to='/dashboard'/> : <Button
                  mt={4}
                  bg={yellowbtn}
                  width='500px' h='80px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                >
                  Login
                </Button> } 
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
      

