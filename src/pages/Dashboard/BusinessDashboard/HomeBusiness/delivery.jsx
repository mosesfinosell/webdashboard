import {
	Grid,
	Box,
	GridItem,
	Container,
	Text,
	Stack,
	Button,
	Flex,
	Center,
	Input,
	InputLeftElement,
	InputRightElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { FaAngleDown } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';

export default function DeliveryRequest() {
	return (
		<Container m='40px' maxW='container.lg'>
			<Grid h='800px' templateColumns='repeat(5, 1fr)'>
				<GridItem colSpan={4} rowSpan={6} bg='white' gap='5'>
					<Stack pt='23'>
						<Text color='gray' fontSize='14px'>
							Action
						</Text>
					</Stack>

					<Box
						w='400px'
						h='80%'
						borderRadius='0px 11px 11px 11px'
						border='0.5px solid #D9D9D9'>
						<Flex direction='column' justifyContent='center' mt='80px'>
							<Center>
								<Stack mt='50px'>
									<Text
										fontSize='25px'
										fontWeight='bold'
										mb='40px'
										textAlign='center'>
										Find a Rider
									</Text>
								</Stack>
							</Center>
							<Center>
								{/* <Stack mt='40px'> */}
								<Formik>
									{() => (
										<Form>
											<Field name='text'>
												{({ field, form }) => (
													<FormControl
														isInvalid={form.errors.name && form.touched.name}>
														<InputGroup>
															<InputRightElement
																pointerEvents='none'
																color='gray.500'
																m='15px 15px'
																fontSize='24px'
																children={<FaAngleDown />}
															/>
															<Input
																{...field}
																mb='20px'
																//  value={name}
																//  onChange={(e) => setName(e.target.value)}
																placeholder='Select location of delivery'
																width='300px'
																h='70px'
																borderRadius='0px 11px 11px 11px'
															/>
														</InputGroup>
														<FormErrorMessage>
															{form.errors.name}
														</FormErrorMessage>
													</FormControl>
												)}
											</Field>
											<Button
												mt={4}
												bg='yellow.500'
												width='300px'
												h='70px'
												borderRadius='0px 11px 11px 11px'
												type='submit'
												color='white'
												_hover={{ bg: '#1A202C' }}>
												Add Product
											</Button>
										</Form>
									)}
								</Formik>
								{/* </Stack> */}
							</Center>
						</Flex>
					</Box>
				</GridItem>
				<GridItem colStart={6} colEnd={9} h='10' bg='white'>
					<Box
						h='100px'
						w='480px'
						borderRadius='0px 11px 0px 0px'
						border='0.5px solid #D9D9D9'
						display='flex'
						alignItems='center'
						px='30px'>
						<Text fontSize='16px' fontWeight='bold' color='black'>
							Orders in Delivery
						</Text>
					</Box>
					<Center>
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
						{/* <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='red.500' bg='red.100' borderRadius='0px 8px 8px 8px' border='0.2px solid red.100'  p='12px' fontSize='22px'>
           <BiShoppingBag/>
           </Stack>
          <Stack pr='120px'>
          <Text color='#273B4A' w='200px'>Adidas Core Sneakers </Text>
          <Text color='gray' fontSize='12px'>Accepted</Text>
          </Stack>  
        
        <Stack>
            <Text fontSize='12px' color='red.500'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box>
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='green.500' bg='green.100' borderRadius='0px 8px 8px 8px' border='0.2px solid green.100'  p='12px' fontSize='22px' >
           <BiShoppingBag/>
           </Stack>
          <Stack pr='120px'>
          <Text color='#273B4A' w='200px'>Adidas Core Sneakers </Text>
          <Text color='gray' fontSize='12px'>Accepted</Text>
          </Stack>  
        
        <Stack>
            <Text fontSize='12px' color='green.500'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box>
    
    <Box  h='100px' w='480px'  border='0.5px solid #D9D9D9' display='flex' alignItems='center' justifyContent='space-evenly'>
         
         <Stack color='green.500' bg='green.100' borderRadius='0px 8px 8px 8px' border='0.2px solid green.100'  p='12px' fontSize='22px' >
           <BiShoppingBag/>
           </Stack>
          <Stack pr='120px'>
          <Text color='#273B4A' w='200px'> Sneakers Adidas Core</Text>
          <Text color='gray' fontSize='12px'>Accepted</Text>
          </Stack>  
        
        <Stack>
            <Text fontSize='12px' color='green.500'>₦12,000</Text>
            <Text fontSize='12px' color='gray'>Jan 3, 2022</Text>
        </Stack>
    </Box> */}
					</Center>
				</GridItem>
			</Grid>
		</Container>
	);
}
