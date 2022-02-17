import {Formik,Form,Field} from 'formik'
import {
    Center,
    Input,
    InputLeftElement,
    InputRightElement,
    InputGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Text,
    Stack,
    Image
  } from '@chakra-ui/react'


  import {MdEmail,MdWifiCalling3} from 'react-icons/md'
  import {FaUser,FaLock,FaEyeSlash,FaEye} from 'react-icons/fa'
  import { useColorModeValue } from "@chakra-ui/color-mode";
  import logo from '../../../assets/Logomark.png'
  import {Link as RLink} from 'react-router-dom'
  import {useState} from 'react'
  import {useSelector, useDispatch} from 'react-redux'
  import {useHistory} from 'react-router-dom'
  import {Redirect} from 'react-router-dom'
  import { Spinner } from '@chakra-ui/react'
  import {personalUserSignUp} from '../../../ReduxContianer/PersonalRedux/PersonalAction'


export default function PersonalAccountSignUp() {
    const yellowbtn = useColorModeValue('yellow.500')

    // Redux 
 const dispatch = useDispatch()
 const personal = useSelector((state) => state.personal)
const {error,loading,users} = personal


// //router
// const history = useHistory()

 // useState
    const [name ,setName] = useState('')
    const [phonenumber ,setPhonenumber] = useState('')
    const [email ,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)

    
// Function
const handleClick = () => setShow(!show)

     function handleSubmit (e) {
         dispatch(personalUserSignUp(name,phonenumber, email,password))
        e.preventDefault()
        // setEmail('');
        // setPhonenumber('');
        // setName('')
       console.log(name,phonenumber, email,password)
     }

   
    
        return (
          <Stack m='20'>
              
        <Center>
        <Stack>
        <Image mb='15' src={logo}  alt="logo" />
        </Stack>
        </Center>
        <Center>
        <Stack >
        <Text fontSize='36px' mt='10' fontWeight='bold' lineHeight='5'>Create Accounts</Text>
        </Stack> 
        </Center>
         <Center>
           <Stack>
             <Text color='gray'>Use your personal information</Text>
           </Stack>
           <Stack>
          
          <Stack>
           {users && <Text color='green'>User Registered</Text>}
             {!users && <Text color='red'>{error}</Text>}
           </Stack>
           </Stack>
         </Center>
          <Formik>
            {() => (
                <Center>
              <Form onSubmit={handleSubmit}>
                <Field name='name'  >
                  {({ field, form }) => (
                      
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Name</FormLabel>
                   <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='25px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<FaUser/>}
                   />
               <Input {...field} 
               value={name}  
               onChange={(e) => setName(e.target.value)}
               placeholder='Jumoke Adetola' 
               width='500px' h='80px' 
               borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='email' >
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Email</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='25px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<MdEmail />}
                   />
                      <Input {...field} 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='Email Address' width='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
                    </InputGroup>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      
                    </FormControl>
                  )}
                </Field>
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
              {  users  ? <Redirect to='/verify-number'/> : <Button
                  mt={4}
                  bg={yellowbtn}
                  width='500px' h='80px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                >
                  Continue
                </Button> } 
              </Form>
              </Center>
            )}
          </Formik>
         <Center>
         <Stack mt='5'>
        <Text  fontSize='18px' lineHeight='5'>Already have an account? 
       <Text as={RLink} pl='2' to='/login' color='yellow.500'>
       Login
       </Text>
        </Text>
        </Stack> 
         </Center>
          </Stack>
        )
      }
      
