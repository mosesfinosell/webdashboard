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
    Flex,
    Text,
    Stack,
    Center
  } from '@chakra-ui/react'

import React from 'react'
import { useColorModeValue } from "@chakra-ui/color-mode";
import {VscRocket} from "react-icons/vsc";

export default function WithdrawalModal() {
    const yellowbtn = useColorModeValue('yellow.500')
        const { isOpen, onOpen, onClose } = useDisclosure()
        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <>
                  <Stack pr='30px' color='yellow.500' fontSize='24px' onClick={onOpen}>  
                  <VscRocket /> 
                </Stack> 
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
               <Text fontSize='24px' p='35px' fontWeight='bold'>Withdraw</Text>
               </Center>
                <ModalCloseButton />
              
                <ModalBody>
                  <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <Input ref={initialRef} placeholder='$0.00' w='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>
      
                   <FormControl mt={4}>
                    <FormLabel>Last name</FormLabel>
                    <Input ref={initialRef} placeholder='₦0.00' w='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
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
                  width='500px' h='80px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                >
                  Withdraw
                </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      } 



