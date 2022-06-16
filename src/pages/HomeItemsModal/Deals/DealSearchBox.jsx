import {Formik,Form,Field} from 'formik'
import { Grid,Box,GridItem,Container,Text,Stack,Button,Flex,
    Center,
    Input,
    InputLeftElement,
    InputRightElement,
    InputGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from "@chakra-ui/react";
import { BiShoppingBag,BiSearchAlt2} from "react-icons/bi";
import {FaAngleDown} from 'react-icons/fa'


export default function DealSearchBox() {
 
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
    <Center>
    <Stack mt='40px'>
      <Text fontSize='30px' fontWeight='bold' w='250px' textAlign='center'>Find a Deal</Text>
      </Stack>
    </Center>
    <Center>
    <Formik>
            {() => (
                <Center>
              <Form 
            //   onSubmit={handleSubmit}
              >
                <Field name='name'  >
                  {({ field, form }) => (
                      
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Name</FormLabel>
                   <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='25px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<BiSearchAlt2/>}
                   />
               <Input {...field} 
            //    value={name}  
            //    onChange={(e) => setName(e.target.value)}
               placeholder='What are you looking for?' 
               width='350px' h='75px' 
               borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='email'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'  mt='30px'>Email</FormLabel>
                      <InputGroup>
                      <InputRightElement
                      pointerEvents='none'
                      m='25px 1px'
                      fontSize='20px'
                      color='gray'
                    children={<FaAngleDown/>}
                   />
                      <Input {...field}
                    //   value={email} 
                    //   onChange={(e) => setEmail(e.target.value)}
                      placeholder='Filter by location'  width='350px' h='75px' borderRadius='0px 11px 11px 11px'/>
                    </InputGroup>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      
                    </FormControl>
                  )}
                </Field>
                </Form>
              </Center>
            )}
          </Formik>
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
                Search
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