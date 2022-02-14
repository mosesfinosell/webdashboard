import {Formik,Form,Field} from 'formik'
import {
    Center,
    Input,
    InputGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Box,
    Stack,
    Image,
    Text,
  } from '@chakra-ui/react'
  import logo from '../../assets/Logomark.png'
import { useColorModeValue } from "@chakra-ui/color-mode";

export default function VerifyPhoneNumber() {
    const yellowbtn = useColorModeValue('yellow.500')





    return (
       
        <Box maxW='xlg' p='50' m='36' boxSizing='border-box' borderWidth='1px' borderRadius='0px 21px 21px 21px' m='20' borderRadius='lg' overflow='hidden'>
           <Center>
        <Stack>
        <Image mb='15' src={logo}  alt="logo" />
        </Stack>
        </Center>
        <Center>
        <Stack >
        <Text fontSize='36px' mt='10' p='25' fontWeight='bold' lineHeight='5'>Verify Phone Number</Text>
        </Stack> 
        </Center>
         <Center>
           <Stack mt='3'>
             <Text align ='center'
             color='gray'
             >We need to verify a phone number witht which you can <br/> recieve OTP for your card transactions.</Text>
           </Stack>
         </Center>
         <Formik 
           
          >
            {() => (
                <Center>
              <Form mt='9'>
                <Field name='number' >
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor=''>Phone Number</FormLabel>
                      <InputGroup>
                      <Input {...field} type='number' placeholder='0801 234 5678' width='690px' h='90px' borderRadius='0px 11px 11px 11px'/>
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

