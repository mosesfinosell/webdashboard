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
    Link
  } from '@chakra-ui/react'
import {useState} from 'react'
import logo from '../../assets/Logomark.png'
  import {MdEmail} from 'react-icons/md'
  import {FaEye} from 'react-icons/fa'
  import {FaEyeSlash} from 'react-icons/fa'
  import {FaLock} from 'react-icons/fa'
  import { useColorModeValue } from "@chakra-ui/color-mode";

export default function PasswordPage() {
    const yellowbtn = useColorModeValue('yellow.500')

    const [show, setShow] = useState(false)

    const handleClick = () => setShow(!show)


    const handleSubmit = (values) => {
          alert(JSON.stringify(values, null, 2));
      }
  
       
      
        return (
            <Box maxW='xlg' p='50' m='36' boxSizing='border-box' borderWidth='1px' borderRadius='0px 21px 21px 21px' m='20' borderRadius='lg' overflow='hidden'>

        <Center>
        <Stack>
        <Image mb='15' src={logo}  alt="logo" />
        </Stack>
        </Center>
        <Center>
        <Stack >
        <Text fontSize='36px' mt='10' fontWeight='bold' lineHeight='5'>Choose a password</Text>
        </Stack> 
        </Center>
         <Center>
           <Stack mt='8'>
             <Text color='gray'>At least 8 characters and one special character or number</Text>
           </Stack>
         </Center>
          <Formik 
          >
            {() => (
                <Center>
              <Form onSubmit={handleSubmit}>
                <Field name='email' >
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
                      <Button onClick={handleClick} size='sm' b='transparent'>
                      {show ? <FaEyeSlash/> : <FaEye/>}
                      </Button>
                   </InputRightElement>
              <Input {...field} type={show ? 'text' : 'password'} placeholder='Password' width='690px' h='90px' borderRadius='0px 11px 11px 11px'/>
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
                       <Button onClick={handleClick} size='sm' b='transparent'>
                       {show ? <FaEyeSlash/> : <FaEye/>}
                       </Button>
                    </InputRightElement>
               <Input {...field} type={show ? 'text' : 'password'} placeholder='Confirm Password' width='690px' h='90px' borderRadius='0px 11px 11px 11px'/>
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
          </Box>
        )
      }
      

