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
    Flex,
    InputRightElement,
    Checkbox
  } from '@chakra-ui/react'

  import {Link as RLink} from 'react-router-dom'
  import {FaAngleDown} from 'react-icons/fa'
  import {MdEmail,MdWifiCalling3} from 'react-icons/md'
  import {AiOutlineShop} from 'react-icons/ai'
  import { useColorModeValue } from "@chakra-ui/color-mode";
  import logo from '../../../assets/Logomark.png'




export default function AddBusinessPage() {
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
        <Text fontSize='36px' mt='10' fontWeight='bold' lineHeight='5'>Add Business Details</Text>
        </Stack> 
        </Center>
         <Center>
           <Stack>
             <Text color='gray'>Use correct information about your business</Text>
           </Stack>
         </Center>
          <Formik>
            {() => (
                <Center>
              <Form>
                  <Flex direction='row' justifyContent='space-evenly'>
                <Field name='name' validate={validateName} >
                  {({ field, form }) => (
                      
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>CAC Registeration Number *</FormLabel>
                   <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='25px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<AiOutlineShop/>}
                   />
               <Input {...field} id='name'  placeholder='CAC Registeration Number' width='300px' h='90px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='name' validate={validateName}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Business Category</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='25px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<MdEmail />}
                   />
                    <InputRightElement
                      pointerEvents='none'
                      color='gray.500'  
                      m='24px 50px'
                      fontSize='24px'
                      children={ <FaAngleDown/>}
                   />
                      <Input {...field} id='name' placeholder='Select Category' width='300px' h='90px' borderRadius='0px 11px 11px 11px'/>
                    </InputGroup>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      
                    </FormControl>
                  )}
                </Field>
                </Flex>
                <Field name='name' validate={validateName}>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Business Address</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='25px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<MdWifiCalling3 />}
                   />
               <Input {...field} id='name' placeholder='Business Address' width='690px' h='90px' borderRadius='0px 11px 11px 11px'/>
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
         <Stack mt='5' direction='row' justifyContent='space-between'>
        <Text  fontSize='18px' lineHeight='5'>Already have an account?</Text>
        <Stack direction='row'>
        <Checkbox colorScheme='yellow' defaultChecked>Yes</Checkbox>
        <Checkbox colorScheme='yellow' defaultChecked>No</Checkbox>
        </Stack>
        </Stack> 
         </Center>
          </Stack>
        )
      }
      
