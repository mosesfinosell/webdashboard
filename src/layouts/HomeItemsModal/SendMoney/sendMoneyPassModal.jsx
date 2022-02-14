import {
    Modal,
    ModalOverlay,
    ModalContent,
    Header,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    Flex,
    Text,
    Stack,
    Center
  } from '@chakra-ui/react'

import React, {useState} from 'react'
import { useColorModeValue } from "@chakra-ui/color-mode";
import {BsPlusSquare} from 'react-icons/bs'

export default function SendMoneyPassModal() {
    const yellowbtn = useColorModeValue('yellow.500')
        const { isOpen, onOpen, onClose } = useDisclosure()

        const [show, setShow] = useState(false)
        const handleClick = () => setShow(!show)
    
    
        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <>
                  <Stack pr='30px' color='yellow.500' fontSize='24px' onClick={onOpen}>  
                  <BsPlusSquare  />
                </Stack> 
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              size='xl'
              borderRadius='0px 11px 11px 11px'
            >
               
              <ModalOverlay />
              <ModalContent>
               <Center>
               <Text fontSize='24px' p='35px' fontWeight='bold'>Send Money</Text>
               </Center>
                <ModalCloseButton />
              
                <ModalBody>
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel  htmlFor='password'>Password</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      m='20px 1px'
                      fontSize='18px'
                      color='gray.500'
                      children={<FaLock/>}
                      />

               <Input {...field} 
               type='password'
               onClick={handleClick}  
               onChange={(e) => setPassword(e.target.value)} 
               value={password} 
               placeholder='Password' width='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  </ModalBody>
                <ModalFooter>
                <Button
                  mt={4}
                  bg={yellowbtn}
                  width='500px' h='80px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                >
                  Send
                </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      } 



