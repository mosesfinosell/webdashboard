import { Grid,Box,GridItem,Container,Text,Stack,Center, Heading,Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react";
import {BsPlusSquare,BsArrowDownLeftSquare,BsPhone} from 'react-icons/bs'
import {VscRocket} from "react-icons/vsc";
import AddMoneyModal from '../../HomeItemsModal/AddMoney/addMoneyModal'
import SendMoneyModal from '../../HomeItemsModal/SendMoney/sendMoneyModal'
import  BuyAirtimeModal from '../../HomeItemsModal/BuyAirtime/BuyAirtimeModal'


export default function HomeDash() {
 
    return(
       <Container m='40px' maxW='container.lg'>
<Grid
  h='800px'
  
  templateColumns='repeat(5, 1fr)'
  
>
  <GridItem colSpan={4} rowSpan={6} bg='white'>
 <Center>
 <Box as='button' borderRadius='md' bg='yellow.500' color='white' px={4} h='38px' borderRadius='0px 11px 11px 11px'>
 Wallet Balance
</Box>
<Stack>
<Box as='button' bg='white.500' h='48px' color='gray' px={34}>
    Escrow Balance
</Box>
</Stack>
 </Center>
 <Stack ml='30'>
     <Heading as='h6'>₦4,867,479.76</Heading>
 </Stack>

 <Stack pl='30'>
 <Stack pt='23'>
     <Text color='gray'>Action</Text>
 </Stack>
 

 <Box as='button' h='100px' w='301px' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
      <AddMoneyModal/>
      <Stack>
      <Text>Add Money</Text>
           <Text>Space for subtitle text</Text> 
      </Stack>  
</Box>

     <Box as='button' h='100px' w='301px' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
     <SendMoneyModal/>
           <Stack>
           <Text>Send Money</Text>
             <Text>Space for subtitle text</Text>
           </Stack>      
</Box>
     <Box as='button' h='100px' w='301px' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
            <Stack color='yellow.500' bg='yellow.100' borderRadius='0px 8px 8px 8px' border='0.2px solid yellow.100'  p='12px' fontSize='24px'>
            <BsArrowDownLeftSquare/> 
            </Stack>
         <Stack>
         <Text>Request Money</Text>
             <Text>Space for subtitle text</Text>
         </Stack>
     </Box>
     <Box as='button' h='100px' w='301px' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
    <BuyAirtimeModal/>
         <Stack>
         <Text>Buy Airtime</Text>
             <Text>Space for subtitle text</Text>
         </Stack>
     </Box>
     </Stack>
  </GridItem>
  <GridItem colStart={6} colEnd={9} h='10' bg='white' >
      <Stack m='10px'>
      <Text color='gray'>Transactions History</Text>
      </Stack>
      
 <Tabs variant='unstyled'>
  <Center>
 <Box  h='100px' w='480px' borderRadius='0px 11px 0px 0px' border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
  <TabList>
    <Tab fontSize='16px' fontWeight='bold'   color='black'>Payment</Tab>
    <Tab fontSize='16px' fontWeight='bold' color='black'>Withdrawal</Tab>
  </TabList>

   </Box>
   </Center>
   <Center>
   <TabPanels>
    <TabPanel>
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='green.500' bg='green.100' borderRadius='0px 8px 8px 8px' border='0.2px solid green.100'  p='12px' fontSize='22px' >
           <BsPlusSquare/> 
           </Stack>
          <Stack pr='150px'>
          <Text>Transfer Funds</Text>
          <Text color='gray' fontSize='12px'>Success</Text>
          </Stack>  
         
        <Stack>
            <Text fontSize='12px' color='green.500'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box>
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
        
        <Stack color='gray.500' bg='gray.100' borderRadius='0px 8px 8px 8px' border='0.2px solid gray.100' p='12px' fontSize='22px' >
        <VscRocket /> 
          </Stack>
         <Stack pr='150px'>
         <Text>Send Airtime</Text>
         <Text color='gray' fontSize='12px'>Pending</Text>
         </Stack>  
        
       <Stack>
           <Text fontSize='12px' color='gray'>₦12,000</Text>
           <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
       </Stack>
   </Box>
   <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
        
        <Stack color='red.500' bg='red.100' borderRadius='0px 8px 8px 8px' border='0.2px solid red.100'  p='12px' fontSize='22px'>
        <BsPhone/>
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
    </TabPanel>
    <TabPanel>
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='yellow.500' fontSize='24px' >
           <BsPlusSquare/> 
           </Stack>
          <Stack pr='150px'>
          <Text>Airtime</Text>
          <Text color='gray' fontSize='12px'>Success</Text>
          </Stack>  
         
        <Stack>
            <Text fontSize='12px' color='gray'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box>
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
        
        <Stack color='yellow.500' fontSize='24px' >
          <BsPlusSquare/> 
          </Stack>
         <Stack pr='150px'>
         <Text>Airtime Buy</Text>
         <Text color='gray' fontSize='12px'>Success</Text>
         </Stack>  
        
       <Stack>
           <Text fontSize='12px' color='gray'>₦12,000</Text>
           <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
       </Stack>
   </Box>
   <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
        
        <Stack color='yellow.500' fontSize='24px' >
          <BsPlusSquare/> 
          </Stack>
         <Stack pr='150px'>
         <Text>Buy Airtime</Text>
         <Text color='gray' fontSize='12px'>Success</Text>
         </Stack>  
        
       <Stack>
           <Text fontSize='12px' color='gray'>₦12,000</Text>
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