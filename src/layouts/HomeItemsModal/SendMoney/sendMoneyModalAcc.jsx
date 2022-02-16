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

export default function SendMoneyAcountModal() {
    const yellowbtn = useColorModeValue('yellow.500')
        const { isOpen, onOpen, onClose } = useDisclosure()

        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <> 
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              size='xl'
              isCentered
              borderRadius='0px 11px 11px 11px'
            >      
              <ModalOverlay />
              <ModalContent>
               <Center>
               <Text fontSize='24px' p='35px' fontWeight='bold'>Send Money</Text>
               </Center>
                <ModalCloseButton />
              
                <ModalBody>
                  <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <Input ref={initialRef} placeholder='₦0.00' w='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>

                  <FormControl mt={4}>
                    <FormLabel>Description</FormLabel>
                    <Input ref={initialRef} placeholder='What is this for?' w='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>
                 <Text>+ ₦50 transaction charge</Text>
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



