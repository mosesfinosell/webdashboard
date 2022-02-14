import {Formik,Form,Field} from 'formik'
import {
    Center,
    Input,
    InputLeftElement,
    InputGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Text,
    Stack,
    Link,
    Image
  } from '@chakra-ui/react'


  import {MdEmail,MdWifiCalling3} from 'react-icons/md'
  import {FaUser} from 'react-icons/fa'
  import { useColorModeValue } from "@chakra-ui/color-mode";
  import logo from '../../assets/Logomark.png'
  import {Link as RLink} from 'react-router-dom'
  import {useState} from 'react'
  import {useSelector, useDispatch} from 'react-redux'
  import {personalUserSignUp} from '../../ReduxContianer/action/userAction'


export default function PersonalAccountSignUp() {
    const yellowbtn = useColorModeValue('yellow.500')

    // Redux 
 const dispatch = useDispatch()
 const user = useSelector((state) => state.user)
const {error} = user
 // useState
    const [name ,setName] = useState('')
    const [phonenumber ,setPhonenumber] = useState('')
    const [email ,setEmail] = useState('')

// Function
     function handleSubmit (e) {
         dispatch(personalUserSignUp(name,phonenumber, email))
        e.preventDefault()
        setEmail('');
        setPhonenumber('');
        setName('')
       console.log(name,phonenumber, email)
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
               width='690px' h='90px' 
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
                      placeholder='Email Address' width='690px' h='90px' borderRadius='0px 11px 11px 11px'/>
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
               placeholder='08012345678' width='690px' h='90px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  bg={yellowbtn}
                  width='690px' h='90px' 
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                >
                  Continue
                </Button>
              </Form>
              </Center>
            )}
          </Formik>
         <Center>
         <Stack mt='5'>
        <Text  fontSize='18px' lineHeight='5'>Already have an account? 
       <Link as={RLink} pl='2' to='/login' color='yellow.500'>
       Login
       </Link>
        </Text>
        </Stack> 
         </Center>
          </Stack>
        )
      }
      
