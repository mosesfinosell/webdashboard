import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    FormControl,
    FormLabel,
    Input,
    Center,
    Text,
    Stack,
    InputGroup,
    InputRightElement
  } from '@chakra-ui/react'

import React, {useState} from 'react'
import { useColorModeValue } from "@chakra-ui/color-mode";
import {VscRocket} from "react-icons/vsc";
import {FaAngleDown} from 'react-icons/fa'

export default function SendMoneyModal() {
    const yellowbtn = useColorModeValue('yellow.500')
        const { isOpen, onOpen, onClose } = useDisclosure()

        // const [show, setShow] = useState(false)
        // const handleClick = () => setShow(!show)
    
    
        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <>
          
          <Stack fontSize='34px' color='yellow.500' px='32px' onClick={onOpen}>  
            <VscRocket /> 
           </Stack>
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              size='md'
              isCentered
              borderRadius='0px 11px 11px 11px'
            >
               
              <ModalOverlay />
              <ModalContent>
              <Center>
               <Text fontSize='24px' pt='35px' fontWeight='bold'>Send Money</Text>
               </Center>
                <ModalCloseButton />
              
                <ModalBody>
                  <FormControl>
                    <FormLabel>Select Benificiary</FormLabel>
                    <InputGroup>
                    <InputRightElement
                      pointerEvents='none'
                      color='gray.500'  
                      m='15px 15px'
                      fontSize='24px'
                      children={ <FaAngleDown/>}
                   />
                    <Input ref={initialRef} placeholder='Select Benificiary' w='400px' h='70px' borderRadius='0px 11px 11px 11px'/>
                   </InputGroup>
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Account Number</FormLabel>
                    <Input ref={initialRef} placeholder='0123456789' w='400px' h='70px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>
                 <FormControl mt={4}>
                    <FormLabel>Select Bank</FormLabel>
                    <InputGroup>
                    <InputRightElement
                      pointerEvents='none'
                      color='gray.500'  
                      m='15px 15px'
                      fontSize='24px'
                      children={ <FaAngleDown/>}
                   />
                    <Input ref={initialRef} placeholder='Select Bank' w='400px' h='70px' borderRadius='0px 11px 11px 11px'/>
                   </InputGroup>
                   </FormControl>
                  </ModalBody>
                <ModalFooter>
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
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      } 



