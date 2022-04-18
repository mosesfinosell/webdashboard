import {Formik,Form,Field} from 'formik'
import {
	Grid,
	Box,
	GridItem,
	Container,
	Text,
	Stack,
	Button,
	Flex,
	Image,
	Center,
	Input,
    InputLeftElement,
    InputRightElement,
    InputGroup,
    FormControl,
    FormLabel,
    FormErrorMessage,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Select
} from '@chakra-ui/react';
import { BiShoppingBag } from 'react-icons/bi';
import { Redirect } from 'react-router-dom';
import box from '../../../assets/box.svg';
import {BiSearchAlt2} from "react-icons/bi";
import {FaAngleDown} from 'react-icons/fa'
import {useState} from 'react'
import Layout from "../../../component/Layout/Layout"

export default function DealDashboard() {
	const [search,setSearch] = useState('')

	
	
	return (
		<Layout>
		<Container m='40px' maxW='container.lg'>
			<Grid h='800px' templateColumns='repeat(5, 1fr)'>
				<GridItem colSpan={4} rowSpan={6} bg='white' gap='5'>
					<Stack pt='23'>
						<Text color='gray' fontSize='14px'>
							Action
						</Text>
					</Stack>
                         <Box  w='400px' h='80%' borderRadius='0px 11px 11px 11px' border='0.5px solid #D9D9D9'>
         <Flex direction='column' justifyContent='center' mt='80px'>
    <Center>
    <Stack mt='20px' mb='45px'>
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
                   <InputGroup>
                      <InputLeftElement
                      pointerEvents='none'
                      m='18px 1px'
                      fontSize='25px'
                      color='gray.400'
                    children={<BiSearchAlt2/>}
                   />
               <Input {...field} 
			   mb='25px'
               value={search}  
               onChange={(e) => setSearch(e.target.value)}
               placeholder='What are you looking for?' 
               width='350px' h='75px' 
               borderRadius='0px 11px 11px 11px'/>
               </InputGroup>   
                    </FormControl>
                  )}
                </Field>
                <Select
			   id='country'
			   color='gray.400'
				placeholder='Filter by location'
				width='350px'
				h='75px'
				borderRadius='0px 11px 11px 11px'>
				<option color='gray.400'>United Arab Emirates</option>
				<option color='gray.400'>Nigeria</option>
				</Select>
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
					{/* <Box
						w='400px'
						h='80%'
						borderRadius='0px 11px 11px 11px'
						border='0.5px solid #D9D9D9'>
						<Flex direction='column' justifyContent='center' mt='80px'>
							<Stack mt='80px'>
								<Image src={box} alt='box' h='120px' />
							</Stack>
							<Center>
								<Stack mt='50px'>
									<Text
										fontSize='25px'
										fontWeight='bold'
										w='250px'
										textAlign='center'>
										We couldn’t find what you were looking for
									</Text>
								</Stack>
							</Center>
							<Center>
								<Stack mt='40px'>
									<Button
										bg='yellow.500'
										width='350px'
										h='75px'
										borderRadius='0px 11px 11px 11px'
										type='submit'
										color='white'
										_hover={{ bg: '#1A202C' }}>
										Find Another Deal
									</Button>
								</Stack>
							</Center>
						</Flex>
					</Box>
					 */}
				</GridItem>
				<GridItem colStart={6} colEnd={9} h='10' bg='white'>
					<Stack m='10px'>
						<Text color='gray' fontSize='14px'>
							Deal History
						</Text>
					</Stack>
					<Tabs variant='unstyled'>
						<Center>
							<Box
								h='100px'
								w='480px'
								borderRadius='0px 11px 0px 0px'
								border='0.5px solid #D9D9D9'
								display='flex'
								alignItems='center'
								justifyContent='center'>
								<TabList>
									<Tab fontSize='16px' fontWeight='bold' color='black'>
										Escrow
									</Tab>
									<Tab fontSize='16px' fontWeight='bold' color='black'>
										Direct
									</Tab>
								</TabList>
							</Box>
						</Center>
						<Center>
							<TabPanels>
								<TabPanel>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid yellow.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='yellow.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='red.500'
											bg='red.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid red.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='red.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='green.500'
											bg='green.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid green.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='green.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
								</TabPanel>
								<TabPanel>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='green.500'
											bg='green.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid green.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												{' '}
												Sneakers Adidas Core
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='green.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid yellow.100'
											p='12px'
											fontSize='22px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='yellow.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
									<Box
										h='100px'
										w='480px'
										border='0.5px solid #D9D9D9'
										display='flex'
										alignItems='center'
										justifyContent='space-evenly'>
										<Stack
											color='gray.500'
											bg='gray.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid gray.100'
											p='12px'
											fontSize='24px'>
											<BiShoppingBag />
										</Stack>
										<Stack pr='120px'>
											<Text color='#273B4A' w='200px'>
												Adidas Core Sneakers{' '}
											</Text>
											<Text color='gray' fontSize='12px'>
												Accepted
											</Text>
										</Stack>

										<Stack>
											<Text fontSize='12px' color='gray.500'>
												₦12,000
											</Text>
											<Text fontSize='12px' color='gray'>
												Jan 3, 2022
											</Text>
										</Stack>
									</Box>
								</TabPanel>
							</TabPanels>
						</Center>
					</Tabs>
				</GridItem>
			</Grid>
		</Container>
		</Layout>
	);
}
