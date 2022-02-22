import { Grid,Box,GridItem,Container,Text,Stack,Center, Heading,Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react";

export default function AccountBusinessProfile() {
 
    return(
       <Container m='40px' maxW='container.lg'>
<Grid
  h='800px'
  
  templateColumns='repeat(5, 1fr)'
  
>
  <GridItem colSpan={4} rowSpan={6} bg='white'>
  <Tabs variant='unstyled'>
 <Center>
  <TabList>
 <Tab>
 <Box as='button' borderRadius='md' bg='yellow.500' w='150px' color='white' px={4} h='35px' borderRadius='0px 11px 11px 11px'>
 Total Balance
</Box>
 </Tab>
  </TabList>
<TabList>
  <Tab>
  <Box as='button' bg='white.500' w='200px' h='35px' color='gray' px={34}>
  Wallet Balance
</Box>
  </Tab>
</TabList>
 </Center>
<TabPanels>
<TabPanel>
<Stack>
     <Heading as='h6'>₦4,867,479.76</Heading>
 </Stack>
</TabPanel>
<TabPanel>
<Stack>
     <Heading as='h6'>₦6,745,563.09</Heading>
 </Stack>
</TabPanel>
</TabPanels>
</Tabs>
<Tabs/>

 <Stack pl='30'>
 <Stack pt='23'>
     <Text color='gray'>Action</Text>
 </Stack>
 


     </Stack>
  </GridItem>
  <GridItem colStart={6} colEnd={9} h='10' bg='white' >
      <Stack m='10px'>
      <Text color='gray'>Store Metrics</Text>
      </Stack>
      
 <Tabs variant='unstyled'>
  <Center>
  </Center>
</Tabs>     
  </GridItem>
</Grid>
</Container>
    );
}