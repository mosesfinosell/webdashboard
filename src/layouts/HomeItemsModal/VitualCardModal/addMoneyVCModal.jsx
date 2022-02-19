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
    FormControl,
    FormLabel,
    Input,
    Flex,
    Text,
    Stack,
    Center
  } from '@chakra-ui/react'

import React, {useState} from 'react'
import { useColorModeValue } from "@chakra-ui/color-mode";
import {BsToggleOn, BsToggleOff,BsPlusSquare} from 'react-icons/bs'

export default function AddMoneyVCModal() {
    const yellowbtn = useColorModeValue('yellow.500')
        const { isOpen, onOpen, onClose } = useDisclosure()
        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <>
                  <Stack color='yellow.500' bg='yellow.100' borderRadius='0px 8px 8px 8px' border='0.2px solid yellow.100'  p='12px' fontSize='24px' onClick={onOpen}>  
                  <BsPlusSquare  />
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
               <Text fontSize='24px' pt='35px' fontWeight='bold'>Add Money</Text>
               </Center>
                <ModalCloseButton />
              
                <ModalBody>
                  <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <Input ref={initialRef} placeholder='$0.00' w='400px' h='70px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>
      
                   <FormControl mt={4}>
                    <FormLabel>Amount</FormLabel>
                    <Input ref={initialRef} placeholder='₦0.00' w='400px' h='70px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>
                 <Flex direction='column' align='start' mt={4} justifyContent='space-between'>
                 <Text color='yellow.500'>1 USD = 551.55 NGN</Text>
                 <Text>+$2 transaction charge</Text>
                 </Flex>
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
                  Add Money
                </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      } 



