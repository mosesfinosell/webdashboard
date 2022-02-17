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
    Center
  } from '@chakra-ui/react'

import React from 'react'
// import { useColorModeValue } from "@chakra-ui/color-mode";
import {BsEye} from 'react-icons/bs'

export default function VirtualCardDetailsModal() {
        const { isOpen, onOpen, onClose } = useDisclosure()

     
    
        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <>
                  <Stack color='yellow.500' bg='yellow.100' borderRadius='0px 8px 8px 8px' border='0.2px solid yellow.100'  p='12px' fontSize='24px' onClick={onOpen}>  
                  <BsEye/> 
                </Stack> 
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              onClose={onClose}
              isOpen={isOpen}
              size='xl'
              isCentered
              borderRadius='0px 11px 11px 11px'
            >
               
              <ModalOverlay />
              <ModalContent>
               <Center>
               <Text fontSize='24px' p='35px' fontWeight='bold'>Virtual Card Details</Text>
               </Center>
                <ModalCloseButton />
              
                <ModalBody >
                    {/* <Box maxW='xlg'   overflow='hidden'> */}
                     
                      <Flex direction='column'  mt={4}>
                      <Center>
                          <Stack>
                          <Text fontSize='14px' color='gray'>Virtual Account Number</Text>
                          <Text fontSize='25px'>0123456789</Text>
                          </Stack>
                          </Center>
                        <Center>
                        <Stack textAlign='center'>
                          <Text fontSize='14px' color='gray'>Card Name</Text>
                          <Text fontSize='25px'>Jumoke Adetola</Text>
                          </Stack>
                        </Center>
                          <Center>
                          <Stack textAlign='center'>
                          <Text fontSize='14px' color='gray'>Card Number</Text>
                          <Text fontSize='25px'>5391 4661 2314 1023</Text>
                          </Stack>
                          </Center>
                          </Flex>
                          <Flex direction='row'  mt={4} justifyContent='space-evenly'>
                          <Stack textAlign='center'>
                          <Text fontSize='14px' color='gray'>Expiry Date</Text>
                          <Text fontSize='25px'>06/24</Text>
                          </Stack>
                          <Stack textAlign='center'>
                          <Text fontSize='14px' color='gray'>CVV</Text>
                          <Text fontSize='25px'>539</Text>
                          </Stack>
                          </Flex>
                      
                    {/* </Box> */}
                 <Center>
                 <Text color='yellow.500'>Tap any of the fields to copy details</Text>
                 </Center>
                  </ModalBody>
                <ModalFooter>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      } 



