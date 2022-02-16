import { Grid,Box,GridItem,Container,Text,Stack,Image,Tabs, TabList, TabPanels, Tab, TabPanel,Center} from "@chakra-ui/react";
import { BiShoppingBag} from "react-icons/bi";
import chef from '../../../assets/chef.svg'
import food from '../../../assets/food.svg'


export default function DealAvailable() {
 
    return(
       <Container m='40px' maxW='container.lg'>
<Grid
  h='900px'
  templateColumns='repeat(5, 1fr)'
>
  <GridItem colSpan={5} rowSpan={6} bg='white' gap='15'>

 <Stack pt='23'>
     <Text color='gray' fontSize='14px'>Action</Text>
 </Stack>
      <Box  h='100px' w='485px' borderRadius='0px 11px 0px 0px' border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='center'>
 <Box>
 <Text fontSize='20px' fontWeight='bold' color='black'>
 Available Deals
</Text>
</Box>
</Box>
     <Box  h='100px' w='485px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='yellow.500' p='12px' >
           <Image src={chef}/>
           </Stack>
          <Stack pr='120px'>
          <Text color='#273B4A' w='200px'>Chef Food House</Text>
          <Text color='gray' fontSize='12px'>Location: Iwo Road</Text>
          </Stack>  
        
        <Stack>
            <Text fontSize='12px' color='#D6AA1B'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box>
    <Box  h='100px' w='485px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='yellow.500' p='12px' >
           <Image src={food}/>
           </Stack>
          <Stack pr='120px'>
          <Text color='#273B4A' w='200px'>Chef Food House</Text>
          <Text color='gray' fontSize='12px'>Location: Iwo Road</Text>
          </Stack>  
        
        <Stack>
            <Text fontSize='12px' color='#D6AA1B'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
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