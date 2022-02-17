import { Grid,Box,GridItem,Container,Text,Stack,Center,Flex,Heading,Tabs, TabList, TabPanels, Tab, TabPanel,Image,
  Input,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button
} from "@chakra-ui/react";
import {Formik,Form,Field} from 'formik'
import {useState} from 'react'
import {MdEmail,MdWifiCalling3} from 'react-icons/md'
import {FaUser,FaLock,FaEyeSlash,FaEye} from 'react-icons/fa'
import { useColorModeValue } from "@chakra-ui/color-mode";
import {BiPencil} from 'react-icons/bi'
import accUser from '../../../assets/accuser.svg'

export default function AccountUserProfile() {
  const yellowbtn = useColorModeValue('yellow.500')

  const [name ,setName] = useState('')
  const [phonenumber ,setPhonenumber] = useState('')
  const [email ,setEmail] = useState('')
  const [oldpassword, setOldPassword] = useState('')
  const [newpassword, setNewPassword] = useState('')
  const [Confirmpassword, setConfirmPassword] = useState('')
  const [show, setShow] = useState(false)

    
  // Function
  const handleClick = () => setShow(!show)
  

    return(
       <Container m='40px' maxW='container.lg'>
 <Tabs variant='unstyled'>
<Grid
  h='100vh'
  
  templateColumns='repeat(7, 1fr)'
  templateRows='repeat(5, 1fr)'
>
  <GridItem rowStart={1} colSpan={3}  bg='white'>
 
 <Center>
  <TabList>
 <Tab>
 <Box as='button' borderRadius='md' bg='yellow.500' w='150px' color='white' px={4} h='35px' borderRadius='0px 11px 11px 11px'>
 Profile
</Box>
 </Tab>
  </TabList>
<TabList>
  <Tab>
  <Box as='button' bg='white.500' w='200px' h='35px' color='gray' px={34}>
    Password
</Box>
  </Tab>
</TabList>
 </Center>
</GridItem>
<GridItem rowStart={2} colSpan={7}>
<TabPanels>
<TabPanel>
  
  <Flex direction='row' justifyContent='space-between' mt='40px'>
 <Box>
 <Stack mb='90'>
  <Heading fontSize='16px' as='h6'>Change Profile Picture</Heading>
    <Text fontSize='14px' color='gray'>Choose a new profile to be used across Finosell</Text>
  </Stack>
  <Stack mb='90px'>
  <Heading fontSize='16px' as='h6'>Full name</Heading>
    <Text fontSize='14px' color='gray'>Choose a new profile to be used across Finosell</Text>
  </Stack>
  <Stack mb='90px'>
  <Heading fontSize='16px' as='h6'>Email</Heading>
    <Text fontSize='14px' color='gray'>Choose a new profile to be used across Finosell</Text>
  </Stack>
  <Stack>
  <Heading fontSize='16px' as='h6'>Phone Number</Heading>
    <Text fontSize='14px' color='gray'>Choose a new profile to be used across Finosell</Text>
  </Stack>
 </Box>
<Box alignItems='start'>
<Stack alignItems='start' pb='30px'>
  <Image src={accUser} alt='user' h='80px'/>
  <Box color='white' fontSize='18px' w='30px' border='0.5px solid yellow.500' bg='yellow.500' p='5px' borderRadius='0px 8px 8px 8px' position='relative' bottom='30px' left='50px'>
    <BiPencil/>
  </Box>
</Stack>
  <Stack>
  <Formik>
            {() => (
              <Form>
              <Field name='name'>
                  {({ field, form }) => (
                      
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Name</FormLabel>
                   <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='12px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<FaUser/>}
                   />
                        <InputRightElement
                      pointerEvents='none'
                      m='15px 15px'
                      color='gray.500'  
                   >
                     <BiPencil/>
                    </InputRightElement>
               <Input {...field} mb='20px'
               value={name}  
              //  onChange={(e) => setName(e.target.value)}
               placeholder='Jumoke Adetola' 
               width='300px' h='60px' 
               borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='email' >
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Email</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='12px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<MdEmail />}
                   />
                        <InputRightElement
                      pointerEvents='none'
                      m='15px 15px'
                      color='gray.500'  
                   >
                     <BiPencil/>
                    </InputRightElement>
                      <Input {...field} mb='20px'
                      value={email} 
                      // onChange={(e) => setEmail(e.target.value)}
                      placeholder='jummy2019@gmail.com' width='300px' h='60px' borderRadius='0px 11px 11px 11px'/>
                    </InputGroup>
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      
                    </FormControl>
                  )}
                </Field>
                <Field name='number'>
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel htmlFor='name'>Phone number</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='12px 1px'
                      fontSize='20px'
                      color='yellow.500'
                    children={<MdWifiCalling3 />}
                   />
                        <InputRightElement
                      pointerEvents='none'
                      m='15px 15px'
                      color='gray.500'  
                   >
                     <BiPencil/>
                    </InputRightElement>
               <Input {...field} value={phonenumber}  mb='20px'
                //  onChange={(e) => setPhonenumber(e.target.value)}
               placeholder='08012345678' width='300px' h='60px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Form>
              
            )}
          </Formik>
  </Stack>
 </Box>
  </Flex>
</TabPanel>
<TabPanel>
    <Stack>
    <Formik>
            {() => (
              <Form>
                  <Field name='password' >
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel  htmlFor='password'>Old Password</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      m='10px 1px'
                      fontSize='18px'
                      color='yellow.500'
                      children={<FaLock/>}
                      />

                      <InputRightElement
                      pointerEvents='none'
                      m='15px 590px'
                      color='yellow.500'  
                   >
                       
                       <Button onClick={handleClick} fontSize='25px' size='sm' b='transparent' cursor='pointer'>
                      {show ? <FaEyeSlash/> : <FaEye/>}
                      </Button>
                    </InputRightElement>
               <Input {...field} mb='20px'
               type={!show ? 'password' : 'text'} 
               onClick={handleClick}  
              //  onChange={(e) => setPassword(e.target.value)} 
               value={oldpassword} 
               placeholder='*********' width='400px' h='70px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='password' >
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel  htmlFor='password'>New Password</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      m='10px 1px'
                      fontSize='18px'
                      color='yellow.500'
                      children={<FaLock/>}
                      />

                      <InputRightElement
                      pointerEvents='none'
                      m='15px 590px'
                      color='yellow.500'  
                   >
                       
                       <Button onClick={handleClick} fontSize='25px' size='sm' b='transparent' cursor='pointer'>
                      {show ? <FaEyeSlash/> : <FaEye/>}
                      </Button>
                    </InputRightElement>
               <Input {...field} mb='20px'
               type={!show ? 'password' : 'text'} 
               onClick={handleClick}  
              //  onChange={(e) => setPassword(e.target.value)} 
               value={newpassword} 
               placeholder='*********' width='400px' h='70px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
                <Field name='password' >
                  {({ field, form }) => (
                    <FormControl isInvalid={form.errors.name && form.touched.name}>
                      <FormLabel  htmlFor='password'>Confirm Password</FormLabel>
                      <InputGroup>
                      <InputLeftElement
                      m='10px 1px'
                      fontSize='18px'
                      color='yellow.500'
                      children={<FaLock/>}
                      />

                      <InputRightElement
                      pointerEvents='none'
                      m='15px 590px'
                      color='yellow.500'  
                   >
                       
                       <Button onClick={handleClick} fontSize='25px' size='sm' b='transparent' cursor='pointer'>
                      {show ? <FaEyeSlash/> : <FaEye/>}
                      </Button>
                    </InputRightElement>
               <Input {...field} mb='20px'
               type={!show ? 'password' : 'text'} 
               onClick={handleClick}  
              //  onChange={(e) => setPassword(e.target.value)} 
               value={Confirmpassword} 
               placeholder='*********' width='400px' h='70px' borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                      <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                    </FormControl>
                  )}
                </Field>
              </Form>
              
              )}
            </Formik>
            <Stack>
            <Button
                  mt={4}
                  bg={yellowbtn}
                  width='400px' h='70px'
                  borderRadius='0px 11px 11px 11px'
                  type='submit'
                  color='white'
                  _hover={{bg: '#1A202C'}}
                >
                  Save
                </Button> 
            </Stack>
    </Stack>
</TabPanel>
</TabPanels>
</GridItem>
</Grid>
</Tabs>
</Container>
    )
    }
