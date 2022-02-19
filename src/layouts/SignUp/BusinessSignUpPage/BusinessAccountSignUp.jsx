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
    Image,
    Box,
    Container
  } from '@chakra-ui/react'

  import {Link as RLink} from 'react-router-dom'
  import {MdEmail,MdWifiCalling3} from 'react-icons/md'
  import {AiOutlineShop} from 'react-icons/ai'
  import { useColorModeValue } from "@chakra-ui/color-mode";
  import logo from '../../../assets/Logomark.png'
  import * as Yup from 'yup'
  import {useState} from 'react'


export default function BusinessAccountSignUp() {
    const yellowbtn = useColorModeValue('yellow.500')

    //State
    const [name ,setName] = useState('')
    const [phoneNumber ,setPhoneNumber] = useState('')
    const [email ,setEmail] = useState('')
  
//Function
function handleSubmit (e) {
 e.preventDefault()
 // setEmail('');
 // setPhoneNumber('');
 // setName('')
console.log(name,phoneNumber, email)
}


//Validation
const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
  .email("Invalid Email")
  .required("Email is required"),
  phoneNumber: Yup.number()
  .required("Phone number is required"),
})

      
        return (
          <Container maxW='container.lg'>
          <Box p='50' m='36' boxSizing='border-box' borderWidth='1px' borderRadius='0px 21px 21px 21px' m='20' borderRadius='lg' overflow='hidden'>
        <Center>
        <Stack>
        <Image mb='15' src={logo}  alt="logo" />
        </Stack>
        </Center>

        <Center>
        <Stack>
        <Text fontSize='36px' mt='20px' fontWeight='bold' lineHeight='5'>Create Accounts</Text>
        </Stack> 
        </Center>
         <Center>
           <Stack mt={2}>
             <Text color='gray'>Use your personal information</Text>
           </Stack>
         </Center>
          <Formik 
          initialValues={{
            name:'',
            phoneNumber:'',
            email:''
          }} 
          onSubmit={handleSubmit}
          validate={SignupSchema}>
            {() => (
                <Center>
              <Form>
                <Field name='name'  >
                  {({ field, form }) => (
                      
                    <FormControl isInvalid={form.errors.name && form.touched.name} mt={4}>
                      <FormLabel htmlFor='name'>Name</FormLabel>
                   <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='15px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<AiOutlineShop/>}
                   />
               <Input {...field}  
               value={name}  
               onChange={(e) => setName(e.target.value)}  
               placeholder='Jumoke Adetola' 
               width='400px' h='70px' 
               borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='email'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.email && form.touched.email} mt={4}>
                      <FormLabel htmlFor='name'>Email</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='15px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<MdEmail />}
                   />
                      <Input {...field}  
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)}
                       placeholder='Email Address' 
                       width='400px' 
                       h='70px' 
                       borderRadius='0px 11px 11px 11px'/>
                    </InputGroup>
                      <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      
                    </FormControl>
                  )}
                </Field>
                <Field name='phoneNumber'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.phoneNumber && form.touched.phoneNumber} mt={4}>
                      <FormLabel htmlFor='name'>Phone number</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='15px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<MdWifiCalling3 />}
                   />
               <Input {...field} 
               value={phoneNumber}
               onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder='08012345678' 
                width='400px' 
                h='70px' 
                borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.phoneNumber}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  bg={yellowbtn}
                  width='400px' h='70px' 
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
       <Link as={RLink} pl='2' to='/business-signin' color='yellow.500'>
       Login
       </Link>
        </Text>
        </Stack> 
         </Center>
         </Box>
          </Container>
        )
      }
      
