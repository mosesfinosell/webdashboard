import {
    Modal,
    ModalOverlay,
    ModalContent,
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
import {BsToggleOn, BsToggleOff,BsPlusSquare} from 'react-icons/bs'

export default function SendMoneyConfirmModal() {
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
              isCentered
              borderRadius='0px 11px 11px 11px'
            >
               
              <ModalOverlay />
              <ModalContent>
               <Center>
               <Text fontSize='24px' pt='35px' fontWeight='bold'>Confirm</Text>
               </Center>
                <ModalCloseButton />
              
                <ModalBody>
                    <Box maxW='xlg' p='20' m='36' boxSizing='border-box' borderWidth='1px' borderRadius='0px 21px 21px 21px' m='20' borderRadius='lg' overflow='hidden'>
                      <Center>
                          <Stack>
                          <Text fontSize='24px' color='gray'>Amount</Text>
                          <Text fontSize='35px'>₦230,000.00</Text>
                          </Stack>
                          <Stack>
                          <Text fontSize='24px' color='gray'>Beneficiary</Text>
                          <Text fontSize='35px'>Anita Jegede</Text>
                          </Stack>
                          <Stack>
                          <Text fontSize='24px' color='gray'>Beneficiary bank</Text>
                          <Text fontSize='35px'>GT Bank</Text>
                          </Stack>
                      </Center>
                    </Box>
                 <Flex direction='row' align='center' mt={4} justifyContent='space-between'>
                 <Text>Save as a benificiary</Text>
                 <Stack onClick={handleClick} fontSize='30px' cursor='pointer' px='30px'>
                     {show ? <BsToggleOn/> : <BsToggleOff/>}
                 </Stack>
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
                  Continue
                </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      } 



