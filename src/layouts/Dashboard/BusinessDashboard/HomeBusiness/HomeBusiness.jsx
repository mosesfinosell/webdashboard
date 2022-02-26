import {
	Grid,
	Box,
	GridItem,
	Container,
	Text,
	Stack,
	Center,
	Link,
	Heading,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Flex,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import { BsJournalText } from 'react-icons/bs';
import { FaStore } from 'react-icons/fa';
import { MdOutlineContentCopy, MdDeliveryDining } from 'react-icons/md';
import { BsPlusSquare, BsArrowDownLeftSquare, BsPhone } from 'react-icons/bs';
import { BiStore } from 'react-icons/bi';
import { RiTeamLine } from 'react-icons/ri';
import AddMoneyBusinessModal from './addMoneyModal';
import SendMoneyModal from './SendMoney/sendMoneyModal';

export default function HomeBusiness() {
	return (
		<Container m='40px' maxW='container.lg'>
			<Grid h='100%' templateColumns='repeat(5, 1fr)'>
				<GridItem colSpan={4} rowSpan={6} bg='white'>
					<Tabs variant='unstyled'>
						<Center>
							<TabList>
								<Tab>
									<Box
										as='button'
										borderRadius='md'
										bg='yellow.500'
										w='170px'
										color='white'
										px={4}
										h='35px'
										borderRadius='0px 11px 11px 11px'>
										Savings Balance
									</Box>
								</Tab>
							</TabList>
							<TabList>
								<Tab>
									<Box
										as='button'
										bg='white.500'
										w='210px'
										h='35px'
										color='gray'
										px={34}>
										Payments Balance
									</Box>
								</Tab>
							</TabList>
						</Center>
						<TabPanels>
							<TabPanel>
								<Stack pl={25}>
									<Heading as='h6'>₦4,867,479.76</Heading>
								</Stack>
							</TabPanel>
							<TabPanel>
								<Stack pl={25}>
									<Heading as='h6'>₦6,745,563.09</Heading>
								</Stack>
							</TabPanel>
						</TabPanels>
					</Tabs>
					<Tabs />

					<Stack pl='30'>
						<Stack pt='23'>
							<Text color='gray' fontSize='14px'>
								Virtual Account Details
							</Text>
						</Stack>

						<Box
							as='button'
							h='140px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'>
							<Flex
								display='flex'
								alignItems='center'
								justifyContent='space-evenly'
								pb='20px'>
								<Stack>
									<Text color='gray' fontSize='12px'>
										Account Number
									</Text>
									<Text fontSize='16px'>01234567890</Text>
								</Stack>
								<Stack color='yellow.500' fontSize='14px' direction='row'>
									<Text>Copy</Text>
									<MdOutlineContentCopy />
								</Stack>
							</Flex>

							<Flex
								display='flex'
								alignItems='center'
								justifyContent='space-evenly'>
								<Stack>
									<Text color='gray' fontSize='12px'>
										Bank
									</Text>
									<Text fontSize='14px'>Polaris Bank</Text>
								</Stack>
								<Stack>
									<Text color='gray' fontSize='12px'>
										Account Name
									</Text>
									<Text fontSize='14px'>Oreofe Ventures</Text>
								</Stack>
							</Flex>
						</Box>

						<Stack pt='23'>
							<Text color='gray' fontSize='14px'>
								Action
							</Text>
						</Stack>

						<Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<FaStore />
							</Stack>
							<Stack>
								<Link as={RLink} to='store-inventory' textAlign='left'>
									Store Inventory
								</Link>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<MdDeliveryDining />
							</Stack>
							<Stack>
								<Text textAlign='left'>Delivery</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<BsJournalText />
							</Stack>
							<Stack>
								<Text textAlign='left'>Invoicing</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<AddMoneyBusinessModal />
							<Stack>
								<Text textAlign='left'>Add Money</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box>

						<Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<SendMoneyModal />
							<Stack>
								<Text>Send Money</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<BsArrowDownLeftSquare />
							</Stack>
							<Stack>
								<Text textAlign='left'>Request Money</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<BiStore />
							</Stack>
							<Stack>
								<Text textAlign='left'>Store Profile</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box>
						<Box
							as='button'
							h='90px'
							w='350px'
							borderRadius='0px 11px 11px 11px'
							border='0.5px solid #D9D9D9'
							display='flex'
							alignItems='center'>
							<Stack fontSize='34px' color='yellow.500' px='32px'>
								<RiTeamLine />
							</Stack>
							<Stack>
								<Text textAlign='left'>Team Management</Text>
								<Text color='gray' fontSize='14px'>
									Space for subtitle text
								</Text>
							</Stack>
						</Box>
					</Stack>
				</GridItem>
				<GridItem colStart={6} colEnd={9} h='10' bg='white'></GridItem>
			</Grid>
		</Container>
	);
}
