import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Stack,
    Box
  } from '@chakra-ui/react'

import React from 'react'
import { useColorModeValue } from "@chakra-ui/color-mode";
// import {VscRocket} from "react-icons/vsc";
// import {FaAngleDown} from 'react-icons/fa'

export default function ProductModal() {
    const yellowbtn = useColorModeValue('yellow.500')


        const { isOpen, onOpen, onClose } = useDisclosure()

        // const [show, setShow] = useState(false)
        // const handleClick = () => setShow(!show)
    
    
        const initialRef = React.useRef()
        const finalRef = React.useRef()
      
        return (
          <>
          <Stack onClick={onOpen}></Stack>
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
                <ModalCloseButton />
              
                <ModalBody>
        <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
        
        <Stack color='red.500' bg='red.100' borderRadius='0px 8px 8px 8px' border='0.2px solid red.100'  p='12px' fontSize='22px'>
          </Stack>
         <Stack mr='150px'>
         <Text>Buy Airtime</Text>
         <Text color='gray' fontSize='12px'>Success</Text>
         </Stack>  
        
       <Stack>
           <Text fontSize='12px' color='red.500'>₦12,000</Text>
           <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
       </Stack>
   </Box>
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



