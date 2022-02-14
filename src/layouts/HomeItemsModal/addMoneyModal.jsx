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

export default function AddMoneyModal() {
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
               <Text fontSize='24px' p='35px' fontWeight='bold'>Add Money</Text>
               </Center>
                <ModalCloseButton />
              
                <ModalBody>
                  <FormControl>
                    <FormLabel>Amount</FormLabel>
                    <Input ref={initialRef} placeholder='₦0.00' w='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>
      
                  {/* <FormControl mt={4}>
                    <FormLabel>Last name</FormLabel>
                    <Input ref={initialRef} placeholder='0000 0000 00000 0000' w='500px' h='80px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>
                 <Flex direction='row' spacing={4}>
                 <FormControl mt={4} pr={6}>
                    <FormLabel>Last name</FormLabel>
                    <Input ref={initialRef} placeholder='Last name' w='250px' h='80px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel>Last name</FormLabel>
                    <Input ref={initialRef} placeholder='Last name' w='250px' h='80px' borderRadius='0px 11px 11px 11px'/>
                  </FormControl>
                 </Flex> */}
                 <Flex direction='row' align='center' mt={4} justifyContent='space-between'>
                 <Text>Save your Card</Text>
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
                  Add Money
                </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      } 



