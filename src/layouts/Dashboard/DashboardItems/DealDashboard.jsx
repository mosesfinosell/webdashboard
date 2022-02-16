import { Grid,Box,GridItem,Container,Text,Stack,Button,Flex,Image, Center, Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react";
import { BiShoppingBag} from "react-icons/bi";
import {Link as RLink} from 'react-router-dom'
import box from '../../../assets/box.svg'


export default function DealDashboard() {
 
    return(
       <Container m='40px' maxW='container.lg'>
<Grid
  h='800px'
  templateColumns='repeat(5, 1fr)'
>
  <GridItem colSpan={4} rowSpan={6} bg='white' gap='5'>

 <Stack pt='23'>
     <Text color='gray' fontSize='14px'>Action</Text>
 </Stack>
 
 <Box  w='400px' h='80%' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9'>
         <Flex direction='column' justifyContent='center' mt='80px'>
         <Stack mt='80px'>
         <Image src={box} alt='box' h='120px'/>
         </Stack> 
    <Center>
    <Stack mt='50px'>
      <Text fontSize='30px' fontWeight='bold' w='250px' textAlign='center'>We couldn’t find what you were looking for</Text>
      </Stack>
    </Center>
  <Center>
  <Stack mt='40px'>
      <Button
                  
                  bg='yellow.500'
                  width='350px' h='75px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                >
                 Find Another Deal
                </Button>
      </Stack>
  </Center>
         </Flex>
</Box>


  </GridItem>
  <GridItem colStart={6} colEnd={9} h='10' bg='white' >
      <Stack m='10px'>
      <Text color='gray' fontSize='14px'>Deal History</Text>
      </Stack>
<Tabs variant='unstyled'>
  <Center>
 <Box  h='100px' w='480px' borderRadius='0px 11px 0px 0px' border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='center'>

  <TabList>
    <Tab fontSize='20px' fontWeight='bold'   color='black'>Escrow</Tab>
    <Tab fontSize='20px' fontWeight='bold' color='black'>Direct</Tab>
  </TabList>

   </Box>
   </Center>
   <Center>
   <TabPanels>
    <TabPanel>
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='yellow.500' border='0.2px solid #D6AA1B1A' p='12px' fontSize='24px' >
           <BiShoppingBag/>
           </Stack>
          <Stack pr='150px'>
          <Text color='#273B4A' w='200px'>Adidas Core Sneakers </Text>
          <Text color='gray' fontSize='12px'>Accepted</Text>
          </Stack>  
        
        <Stack>
            <Text fontSize='12px' color='#D6AA1B'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box>
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='yellow.500' border='0.2px solid #D6AA1B1A' p='12px' fontSize='24px' >
           <BiShoppingBag/>
           </Stack>
          <Stack pr='150px'>
          <Text color='#273B4A' w='200px'>Adidas Core Sneakers </Text>
          <Text color='gray' fontSize='12px'>Accepted</Text>
          </Stack>  
        
        <Stack>
            <Text fontSize='12px' color='#D6AA1B'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box>
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='yellow.500' border='0.2px solid #D6AA1B1A' p='12px' fontSize='24px' >
           <BiShoppingBag/>
           </Stack>
          <Stack pr='150px'>
          <Text color='#273B4A' w='200px'>Adidas Core Sneakers </Text>
          <Text color='gray' fontSize='12px'>Accepted</Text>
          </Stack>  
        
        <Stack>
            <Text fontSize='12px' color='#D6AA1B'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box>
    
    </TabPanel>
    <TabPanel>
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='yellow.500' border='0.2px solid #D6AA1B1A' p='12px' fontSize='24px' >
           <BiShoppingBag/>
           </Stack>
          <Stack pr='150px'>
          <Text color='#273B4A' w='200px'> Sneakers Adidas Core</Text>
          <Text color='gray' fontSize='12px'>Accepted</Text>
          </Stack>  
        
        <Stack>
            <Text fontSize='12px' color='#D6AA1B'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box>
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='yellow.500' border='0.2px solid #D6AA1B1A' p='12px' fontSize='24px' >
           <BiShoppingBag/>
           </Stack>
          <Stack pr='150px'>
          <Text color='#273B4A' w='200px'>Adidas Core Sneakers </Text>
          <Text color='gray' fontSize='12px'>Accepted</Text>
          </Stack>  
        
        <Stack>
            <Text fontSize='12px' color='#D6AA1B'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box>
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='yellow.500' border='0.2px solid #D6AA1B1A' p='12px' fontSize='24px' >
           <BiShoppingBag/>
           </Stack>
          <Stack pr='150px'>
          <Text color='#273B4A' w='200px'>Adidas Core Sneakers </Text>
          <Text color='gray' fontSize='12px'>Accepted</Text>
          </Stack>  
        
        <Stack>
            <Text fontSize='12px' color='#D6AA1B'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box>
    
    </TabPanel>
  </TabPanels>
  </Center>
</Tabs>     
     
  </GridItem>
</Grid>
</Container>
    );
}

