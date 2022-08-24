import React,{useEffect} from 'react'
import {
	Link,
	Stack,
	Container,
	Flex,
	Image,
	Avatar,
	Text,
	Center,
	AvatarBadge,
} from '@chakra-ui/react';
import SideBarComponent from './SideBarComponent'
import '../../../components/sidebar.css';
import Logomark from '../../../assets/Logomark.svg';
import { useSelector} from 'react-redux';

export default function SideBar({ children, tabs, selected, setSelected }) {
	
	const businessInfo = useSelector(
		(state) => state.businessReducer.businessUserInfo
	);

  return (
		<>
			<Stack className='side-nav'>
				<Stack mb='20px'>
					<Flex display='flex' direction='column' px='25px'>
						<Stack px='20px'>
							<Avatar src={businessInfo.business_image}>
								<AvatarBadge boxSize='1em' bg='green.500' />
							</Avatar>
						</Stack>
						<Stack>
							<Text color='black' fontWeight='bold' fontSize='14px'>
								Hi,{businessInfo.business_name}
							</Text>
						</Stack>
					</Flex>
				</Stack>
				{tabs &&
					tabs.map((tab, index) => {
						const active = tab.label === selected ? 'activenow' : '';

						return (
							<SideBarComponent
								className={active}
								key={index}
								label={tab.label}
								icon={tab.icon}
								link={tab.link}
								onClick={() => setSelected(tab.label)}
							/>
						);
					})}
				<Stack className='logo'>
					<Image name='logo' src={Logomark} />
				</Stack>
			</Stack>
			<Stack>{children}</Stack>
		</>
	);
}
