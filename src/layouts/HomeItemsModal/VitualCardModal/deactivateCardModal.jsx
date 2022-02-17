import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Flex,
    Text,
    Stack,
    Center,
    Button
  } from '@chakra-ui/react'

import React from 'react'
import { useColorModeValue } from "@chakra-ui/color-mode";
import {RiDeleteBin5Line} from 'react-icons/ri'

export default function DeactivateCardModal() {
    const yellowbtn = useColorModeValue('yellow.500')
        const { isOpen, onOpen, onClose } = useDisclosure()    
        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <>
                  <Stack color='yellow.500' bg='yellow.100' borderRadius='0px 8px 8px 8px' border='0.2px solid yellow.100'  p='12px' fontSize='24px' onClick={onOpen}>  
                  <RiDeleteBin5Line/>
                </Stack> 
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              onClose={onClose}
              isOpen={isOpen}
              size='md'
              isCentered
              borderRadius='0px 11px 11px 11px'
            >
               
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalBody >
                      
                      <Center>
                          <Stack mt='50px'>
                          <Text fontWeight='bold' w='450px' textAlign='center' fontSize='30px'>Are you sure you want to freeze your card?</Text>
                          </Stack>
                          </Center>
                        <Center>
                        <Stack textAlign='center'>
                          <Text fontSize='14px' w='290px' color='gray'>By freezing your card you won’t be able to use it for any transactions?</Text>
                          </Stack>
                        </Center>
                          <Flex direction='row'  mt={4} justifyContent='space-evenly'>
                          <Button
                  mt={4}
                  bg='white'
                  width='150px' h='70px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  border='1px solid #D6AA1B'
                  color='#1A202C'
                  _hover={{bg: '#D6AA1B'}}
                  onClick={onClose}
                >
                  Cancel
                </Button>
                <Button
                  mt={4}
                  bg={yellowbtn}
                  width='150px' h='70px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                >
                  Deactivate Card
                </Button>
                </Flex>
                  </ModalBody>
                <ModalFooter>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      } 



