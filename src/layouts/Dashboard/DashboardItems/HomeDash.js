import { Grid,Box,GridItem,Container,Text,Stack,Center, Heading,SimpleGrid } from "@chakra-ui/react";
import {BsPlusSquare,BsArrowDownLeftSquare} from 'react-icons/bs'
import {VscRocket} from "react-icons/vsc";


export default function HomeDash() {
   

    return(
       <Container maxW='container.md'>
        <Grid
  h='800px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem colSpan={4} rowSpan={6} bg='white'>
 
 <Center>
 <SimpleGrid columns={2} spacing={8}>
 <Box as='button' borderRadius='md' bg='yellow.500' color='white' px={4} h='38px' borderRadius='0px 11px 11px 11px'>
 Wallet Balance
</Box>
<Stack>
<Box as='button' bg='white.500' h='48px' color='gray' px={34}>
    Escrow Balance
</Box>
</Stack>
</SimpleGrid>
 </Center>
 <Stack ml='30'>
     <Heading as='h6'>₦4,867,479.76</Heading>
 </Stack>

 <Stack pl='30'>
 <Stack pt='23'>
     <Text color='gray'>Action</Text>
 </Stack>
 
   
     <Box as='button' h='100px' w='401px' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9'>
     <SimpleGrid column={2} row={2} spacing={3}> 
             <BsPlusSquare />
         <Text>Add Money</Text>
             <Text>Space for subtitle text</Text>
             </SimpleGrid>
     </Box>
    
     <Box as='button' h='100px' w='401px' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9'>
             <VscRocket/> 
         <Text>Send Money</Text>
             <Text>Space for subtitle text</Text>
     </Box>
     <Box as='button' h='100px' w='401px' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9'>
             <BsArrowDownLeftSquare/> 
         <Text>Request Money</Text>
             <Text>Space for subtitle text</Text>
     </Box>
     <Box as='button' h='100px' w='401px' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9'>
             <BsPlusSquare/> 
         <Text>Buy Airtime</Text>
             <Text>Space for subtitle text</Text>
     </Box>
     </Stack>
  </GridItem>
</Grid>
</Container>
    );
}