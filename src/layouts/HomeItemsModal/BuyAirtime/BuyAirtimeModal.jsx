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

import React from 'react'
import { useColorModeValue } from "@chakra-ui/color-mode";
import {BsPhone} from "react-icons/bs";
import {FaAngleDown} from 'react-icons/fa'

export default function AddAirtimeModal() {
    const yellowbtn = useColorModeValue('yellow.500')
        const { isOpen, onOpen, onClose } = useDisclosure()

    
        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <>

          <Stack pr='30px'color='yellow.500' fontSize='24px' onClick={onOpen}>
            <BsPhone/> 
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
               <Text fontSize='24px' p='35px' fontWeight='bold'>Buy Airtime</Text>
               </Center>
                <ModalCloseButton />
              
                <ModalBody>
                  <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <Input ref={initialRef} placeholder='#0.00' w='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>
      
                  <FormControl mt={4}>
                    <FormLabel>Select Beneficiary Number</FormLabel>
                    <Input ref={initialRef} placeholder='0801 234 5678' w='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>

                  <FormControl mt={4}>
                  <FormLabel>Select Network</FormLabel>
                    <InputGroup>
                    <InputRightElement
                      color='gray.500'  
                      m='24px 25px'
                      fontSize='24px'
                      children={ <FaAngleDown/>}
                   />
                    <Input ref={initialRef} placeholder='0801 234 5678' w='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
                    </InputGroup>
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
                  Continue
                </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      } 



