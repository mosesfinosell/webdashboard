import { Grid,Box,GridItem,Container,Text,Stack,Center,Flex,Heading,Textarea,Image,
    Input,
    InputLeftElement,
    InputRightElement,
    InputGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button
  } from "@chakra-ui/react";
  import {Formik,Form,Field} from 'formik'
  import {useState} from 'react'
  import { useColorModeValue } from "@chakra-ui/color-mode";
  import {BiPencil} from 'react-icons/bi'
  import shoe from '../../../../assets/shoe.svg'


  export default function AddUrlPage() {
    //   const {onOpen} = ProductModal
    const yellowbtn = useColorModeValue('yellow.500')
  
    const [name ,setName] = useState('')
    const [phonenumber ,setPhonenumber] = useState('')
    const [email ,setEmail] = useState('')
    
   
      return(
         <Container m='20px' maxW='container.lg'>
  <Grid
    h='100vh'
    
    templateColumns='repeat(7, 1fr)'
    templateRows='repeat(5, 1fr)'
  >
    <GridItem rowStart={1} colSpan={3}  bg='white'>
   
   <Center>
   <Heading>Add Url</Heading>
   </Center>
   <Formik>
              {() => (
                <Form>
                <Field name='text'>
                    {({ field, form }) => (
                        
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel htmlFor='name'>Add a name for your store link</FormLabel>
                     <InputGroup>
                 <Input {...field} mb='20px'
                 value={name}  
                //  onChange={(e) => setName(e.target.value)}
                 placeholder='Add a URL' 
                 width='400px' h='60px' 
                 borderRadius='0px 11px 11px 11px'/>
                 </InputGroup>   
                 <InputLeftElement
                      pointerEvents='none'
                      m='35px 1px'
                      fontSize='20px'
                      color='yellow.500'
                   >hello</InputLeftElement>
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
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
                  Add 
                </Button>            
                </Form>      
              )}
            </Formik>
  </GridItem>
  </Grid>
  </Container>
      )
      }
  