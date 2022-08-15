import React from 'react'
import {
	Link,
	Stack,
	Container,
	Flex,
	Image,
	Avatar,
	Text,
	Center,
} from '@chakra-ui/react';
import user1 from '../../../assets/user1.png';
import SideBarComponent from './SideBarComponent'
import '../../../components/sidebar.css';
import Logomark from '../../../assets/Logomark.svg';
import { useEffect } from 'react';
import { getBusinessUserDetails } from '../../../ReduxContianer/BussinessRedux/BusinessAction';
import { useSelector, useDispatch } from 'react-redux';


export default function SideBar({children,tabs, selected, setSelected}) {


	const dispatch = useDispatch();
	const businessInfo = useSelector(
		(state) => state.businessReducer.businessUserInfo
	);

	useEffect(() => {
		dispatch(getBusinessUserDetails(businessInfo?.user_id));
	}, [businessInfo?.user_id, dispatch]);

  return (
		<>
			<Stack className='side-nav'>
				<Stack mb='40px'>
					<Flex display='flex' direction='row' alignItems='center'>
						<Stack pr='18px'>
							<Avatar name='user' src={user1} />
						</Stack>
						<Stack>
							<Text>Hello {businessInfo.business_name}</Text>
						</Stack>
					</Flex>
				</Stack>
				{tabs &&
					tabs.map((tab, index) => {
						const active =
							tab.label === selected ? <div className='active'></div> : '';
						return (
							<SideBarComponent
								key={index}
								className={active}
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
