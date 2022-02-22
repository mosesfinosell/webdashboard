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
import logo from '../../assets/Logomark.png'
import {FaLock} from 'react-icons/fa'
import { useColorModeValue } from "@chakra-ui/color-mode";

export default function PasswordPage() {
    const yellowbtn = useColorModeValue('yellow.500')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
      e.preventDefault()
      }
  
       
        return (
          <Container maxW='container.lg'>
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
                   </InputRightElement>
              <Input {...field} 
              type='password' 
              onChange={(e) => setPassword(e.target.value)} 
              value={password} 
               placeholder='Password' width='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
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
                   </InputRightElement>
              <Input {...field} 
              type='password'
              onChange={(e) => setConfirmPassword(e.target.value)} 
              value={confirmPassword}  
               placeholder='Confirm Password' width='500px' h='80px' h='90px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Button
                  mt={4}
                  bg={yellowbtn}
                  width='500px' h='80px'
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
          </Container>
        )
      }
      

