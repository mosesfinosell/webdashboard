import {
    Modal,
    ModalOverlay,
    ModalContent,
    Box,
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

export default function AddInvoiceModal() {
    const yellowbtn = useColorModeValue('yellow.500')
        const { isOpen, onOpen, onClose } = useDisclosure()

        const [show, setShow] = useState(false)
        const handleClick = () => setShow(!show)
    
    
        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <>
                  <Stack pr='30px' color='yellow.500' bg='yellow.100' borderRadius='0px 8px 8px 8px' border='0.2px solid yellow.100'  p='12px' fontSize='24px' onClick={onOpen}>  
                  <BsPlusSquare  />
                </Stack> 
            <Modal
              initialFocusRef={initialRef}
              finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}
              size='md'
              borderRadius='0px 11px 11px 11px'
            > 
              <ModalOverlay />
              <ModalContent>
               <Center>
               <Text fontSize='24px' pt='35px' fontWeight='bold'>Add Money</Text>
               </Center>
                <ModalCloseButton />
              
                <ModalBody>
                <Flex direction='row'>
                <Stack>
                     <Text color='gray'>Customer Name</Text>
                     <Heading>Ridwan Egbeyemi</Heading>
                     <Text color='gray'>ridwan@gmail.com 0801 234 5678</Text>
                     <Text color='gray' >Billling Date</Text>
                     <Heading>Jan 2, 2022</Heading>
                     <Text color='gray'>Payment Due Date</Text>
                     <Heading>Jan 2, 2022</Heading>
                 </Stack>
                <Box bg='white' w='250px' h='50vh' border='0.5px solid #D9D9D9' borderRadius='0px 11px 11px 11px'>
                <Stack  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
              <Stack color='yellow.500' fontSize='24px' >
              <BsPlusSquare/> 
              </Stack>
             <Stack pr='150px'>
             <Text>Marshmellow Shorts</Text>
            <Text color='gray' fontSize='12px'>#1234567890</Text>
            </Stack>  
            <Stack>
           <Text fontSize='12px' color='gray'>₦12,000</Text>
           <Text fontSize='12px' color='gray'>2pc</Text>
           </Stack>
           <Stack>
           <Text fontSize='12px' color='gray'>Items</Text>
           <Text fontSize='12px' color='gray'>₦32,985.00</Text>
           </Stack>
           <Stack>
           <Text fontSize='12px' color='gray'>Delivery</Text>
           <Text fontSize='12px' color='gray'>₦32,985.00</Text>
           </Stack>
           <Stack>
           <Text fontSize='12px' color='gray'>Total</Text>
           <Text fontSize='12px' color='gray'>₦32,985.00</Text>
           </Stack>
           <Stack>
           <Text fontSize='12px' color='red'>-Discount(5%)</Text>
           <Text fontSize='12px' color='gray'>₦32,985.00</Text>
           </Stack>
           <Stack>
           <Text fontSize='12px' color='gray'>+ Tax (7.5%)</Text>
           <Text fontSize='12px' color='gray'>₦32,985.00</Text>
           </Stack>
           <Stack>
           <Text fontSize='24px' color='black'>Grand Total</Text>
           <Text fontSize='12px' color='gray'>₦32,985.00</Text>
           </Stack>
           </Stack>
                </Box>
                </Flex>
                <Stack color='yellow.500' fontSize='14px' direction='row'>
          <Text>Copy Link</Text>
          <MdOutlineContentCopy/>
      </Stack>
                  </ModalBody>
                <ModalFooter>
                <Flex direction='row'  mt={4} justifyContent='space-evenly'>
                <Button
                  mt={4}
                  bg={yellowbtn}
                  width='150px' h='70px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                >
                  Share
                </Button>
                <Button
                  mt={4}
                  bg='white'
                  width='150px' h='70px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  border='1px solid #D6AA1B'
                  color='#1A202C'
                  onClick={onClose}
                  _hover={{bg: '#D6AA1B'}} 
                >
                  Download
                </Button>
                </Flex>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
      } 



