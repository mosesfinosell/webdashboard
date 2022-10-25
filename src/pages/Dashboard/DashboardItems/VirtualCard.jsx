import {
	Grid,
	Box,
	GridItem,
	Container,
	Text,
	Stack,
	Center,
	Heading,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
} from '@chakra-ui/react';
import { BsPlusSquare, BsCreditCard } from 'react-icons/bs';
import AddMoneyVCModal from '../../HomeItemsModal/VitualCardModal/addMoneyVCModal';
import WithdrawalModal from '../../HomeItemsModal/VitualCardModal/withdrawalModal';
import VirtualCardDetailsModal from '../../HomeItemsModal/VitualCardModal/virtualCardDetailsModal';
import FreezeCardModal from '../../HomeItemsModal/VitualCardModal/freezeCardModal';
import DeactivateCardModal from '../../HomeItemsModal/VitualCardModal/deactivateCardModal';

export default function VirtualCard() {
	return (
		<Container m='40px' maxW='container.lg'>
			<Grid
				h='800px'
				templateRows='repeat(2, 1fr)'
				templateColumns='repeat(5, 1fr)'
				gap={4}>
				<GridItem colSpan={4} rowSpan={6} bg='white'>
					<Stack pl='30'>
						<Stack pt='23'>
							<Text color='gray'>Jumoke Ademola</Text>
						</Stack>
						<Stack>
							<Heading as='h6'>₦4,800</Heading>
						</Stack>
						<Stack pt='23'>
							<Text color='gray'>Action</Text>
						</Stack>

						<Box
							as='button'
							h='100px'
							w='301px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'
							justifyContent='space-evenly'>
							<AddMoneyVCModal />

							<Stack>
								<Text>Add Money</Text>
								<Text>Space for subtitle text</Text>
							</Stack>
						</Box>

						<Box
							as='button'
							h='100px'
							w='301px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'
							justifyContent='space-evenly'>
							<WithdrawalModal />

							<Stack>
								<Text>Withdrawal Money</Text>
								<Text>Space for subtitle text</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='100px'
							w='301px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'
							justifyContent='space-evenly'>
							<VirtualCardDetailsModal />
							<Stack>
								<Text>Show card details</Text>
								<Text>Space for subtitle text</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='100px'
							w='301px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'
							justifyContent='space-evenly'>
							<FreezeCardModal />
							<Stack>
								<Text>Freeze card</Text>
								<Text>Space for subtitle text</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='100px'
							w='301px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'
							justifyContent='space-evenly'>
							<DeactivateCardModal />
							<Stack>
								<Text>Deactivate card</Text>
								<Text>Space for subtitle text</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='100px'
							w='301px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'
							justifyContent='space-evenly'>
							<Stack
								pr='30px'
								color='yellow.500'
								bg='yellow.100'
								borderRadius='0px 8px 8px 8px'
								border='0.2px solid yellow.100'
								p='12px'
								fontSize='24px'>
								<BsPlusSquare />
							</Stack>
							<Stack>
								<Text>Create a new card</Text>
								<Text>Space for subtitle text</Text>
							</Stack>
						</Box>
					</Stack>
				</GridItem>
				<GridItem colStart={6} colEnd={9} h='10' bg='white'>
					<Stack m='10px'>
						<Text color='gray'>Transactions History</Text>
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
								justifyContent='space-evenly'>
								<TabList>
									<Tab fontSize='16px' fontWeight='bold' color='black'>
										Incoming
									</Tab>
									<Tab fontSize='16px' fontWeight='bold' color='black'>
										Outgoing
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
											color='green.500'
											bg='green.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid green.100'
											p='12px'
											fontSize='24px'>
											<BsCreditCard />
										</Stack>
										<Stack pr='160px'>
											<Text>Buy Airtime</Text>
											<Text color='gray' fontSize='12px'>
												Success
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
											color='red.500'
											bg='red.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid red.100'
											p='12px'
											fontSize='24px'>
											<BsCreditCard />
										</Stack>
										<Stack pr='150px'>
											<Text>Buy Airtime</Text>
											<Text color='gray' fontSize='12px'>
												Success
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
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid yellow.100'
											p='12px'
											fontSize='24px'>
											<BsCreditCard />
										</Stack>
										<Stack pr='150px'>
											<Text>Buy Airtime</Text>
											<Text color='gray' fontSize='12px'>
												Success
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
											color='yellow.500'
											bg='yellow.100'
											borderRadius='0px 8px 8px 8px'
											border='0.2px solid yellow.100'
											p='12px'
											fontSize='24px'>
											<BsCreditCard />
										</Stack>
										<Stack pr='150px'>
											<Text>Airtime</Text>
											<Text color='gray' fontSize='12px'>
												Success
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
											fontSize='24px'>
											<BsCreditCard />
										</Stack>
										<Stack pr='150px'>
											<Text>Airtime Buy</Text>
											<Text color='gray' fontSize='12px'>
												Success
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
											fontSize='24px'>
											<BsCreditCard />
										</Stack>
										<Stack pr='150px'>
											<Text>Buy Airtime</Text>
											<Text color='gray' fontSize='12px'>
												Success
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
							</TabPanels>
						</Center>
					</Tabs>
				</GridItem>
			</Grid>
		</Container>
	);
}
