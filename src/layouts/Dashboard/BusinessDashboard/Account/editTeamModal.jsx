import {
    Modal,
    ModalOverlay,
    ModalContent,
    Box,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputLeftElement,
    InputRightElement,
    InputGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Button,
    Input,
    Stack,
    Center,
    Select
  } from '@chakra-ui/react'
  import {Formik,Form,Field} from 'formik'
import React, {useState} from 'react'
// import { useColorModeValue } from "@chakra-ui/color-mode";
import {FaUser} from 'react-icons/fa'
import { BiShoppingBag,BiPencil} from "react-icons/bi";



export default function EditTeamModal() {
    // const yellowbtn = useColorModeValue('yellow.500')
        const { isOpen, onOpen, onClose } = useDisclosure()

        const [show, setShow] = useState(false)
        const handleClick = () => setShow(!show)
    
    
        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <>
           <Stack color='gray' bg='gray.100' borderRadius='0px 8px 8px 8px' border='0.2px solid yellow.100'  p='12px' fontSize='22px' onClick={onOpen} cursor='pointer'>
           <BiShoppingBag/>
           </Stack>

            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              // borderRadius='0px 11px 11px 11px'
              size='lg'
            > 
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody>
                  <Center>
                  <Box h='700px' w='480px' borderRadius='0px 11px 11px 11px'  border='0.5px solid #D9D9D9' px='40px'>

     <Formik>
              {() => (
                <Form>
                      <Field name='name'>
                    {({ field, form }) => (
                        
                      <FormControl isInvalid={form.errors.name && form.touched.name}>
                        <FormLabel htmlFor='name'>Name</FormLabel>
                     <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        m='12px 1px'
                        fontSize='20px'
                        color='yellow.500'
                      children={<FaUser/>}
                     />
                          <InputRightElement
                        pointerEvents='none'
                        m='15px 15px'
                        color='gray.500'  
                     >
                       <BiPencil/>
                      </InputRightElement>
                 <Input {...field} mb='20px'
                 value={name}  
                //  onChange={(e) => setName(e.target.value)}
                 placeholder='Business Name' 
                 width='300px' h='60px' 
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
                        m='12px 1px'
                        fontSize='20px'
                        color='yellow.500'
                      children={<MdEmail />}
                     />
                          <InputRightElement
                        pointerEvents='none'
                        m='15px 15px'
                        color='gray.500'  
                     >
                       <BiPencil/>
                      </InputRightElement>
                        <Input {...field} mb='20px'
                        value={email} 
                        // onChange={(e) => setEmail(e.target.value)}
                        placeholder='jummy2019@gmail.com' width='300px' h='60px' borderRadius='0px 11px 11px 11px'/>
                      </InputGroup>
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                        
                      </FormControl>
                    )}
                  </Field>
                  <Field name='text'>
                    {({ field, form }) => (
                         <FormControl>
                         <FormLabel htmlFor='billing date'>Roles</FormLabel>
                         <Select id='country' placeholder='Select a date' width='400px' h='70px' 
                           borderRadius='0px 11px 11px 11px'>
                           <option>Manager</option>
                           <option>Sales</option>
                         </Select>
                       </FormControl>
                    )}
                  </Field>
                  </Form>
              )}
            </Formik> 
              </Box>
                 </Center>
                <Button
                  mt={4}
                  bg='yellow.500'
                  width='400px' h='70px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                >
                  Save
                </Button>
                  </ModalBody>
              </ModalContent>
            </Modal>
          </>
        )
      } 



