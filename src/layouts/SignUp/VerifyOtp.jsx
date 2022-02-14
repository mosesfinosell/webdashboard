import {
    Center,
    Button,
    Box,
    Stack,
    Image,
    Text,
    PinInput, PinInputField,HStack
  } from '@chakra-ui/react'
  import logo from '../../assets/Logomark.png'
import { useColorModeValue } from "@chakra-ui/color-mode";

export default function VerifyOtp() {
    const yellowbtn = useColorModeValue('yellow.500')


    return (
       
        <Box maxW='xlg' p='50' m='36'  boxSizing='border-box' borderWidth='1px' borderRadius='0px 21px 21px 21px' borderRadius='lg' overflow='hidden'>
           <Center>
        <Stack>
        <Image mt='35' src={logo}  alt="logo" />
        </Stack>
        </Center>
        <Center>
        <Stack >
        <Text fontSize='36px'  p='25' fontWeight='bold' lineHeight='5'>Enter OTP</Text>
        </Stack> 
        </Center>
         <Center>
           <Stack mt='2'>
             <Text align ='center'
             color='gray'
             >Enter the OTP sent to your phone number</Text>
           </Stack>
         </Center>
         
               <Center>
               <HStack mt='8'>
              <PinInput size='lg' otp>
                 <PinInputField  />
                  <PinInputField />
                  <PinInputField />
                  <PinInputField />
                   </PinInput>
                   </HStack>
               </Center>
<Center>

<HStack pt='9'>
                 <Text color='gray'>Resend SMS 1:32</Text>
               </HStack>
</Center>
        </Box>
    );
}

