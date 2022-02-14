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

  import {Link as RLink} from 'react-router-dom'
  import {MdEmail,MdWifiCalling3} from 'react-icons/md'
  import {AiOutlineShop} from 'react-icons/ai'
  import { useColorModeValue } from "@chakra-ui/color-mode";
  import logo from '../../assets/Logomark.png'




export default function BusinessAccountSignUp() {
    const yellowbtn = useColorModeValue('yellow.500')

        function validateName(value) {
            let error
           if (!value) {
            error = 'Name is required'
          } else if (value.toLowerCase() !== 'naruto') {
            error = "Jeez! You're not a fan 😱"
          }
          return error
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
              <Form>
                <Field name='name' validate={validateName} >
                  {({ field, form }) => (
                      
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Name</FormLabel>
                   <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='25px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<AiOutlineShop/>}
                   />
               <Input {...field} id='name'  placeholder='Jumoke Adetola' width='690px' h='90px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='name' validate={validateName}>
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
                      <Input {...field} id='name' placeholder='Email Address' width='690px' h='90px' borderRadius='0px 11px 11px 11px'/>
                    </InputGroup>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      
                    </FormControl>
                  )}
                </Field>
                <Field name='name' validate={validateName}>
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
               <Input {...field} id='name' placeholder='08012345678' width='690px' h='90px' borderRadius='0px 11px 11px 11px'/>
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
      
