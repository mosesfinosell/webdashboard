import React,{ useState} from 'react'
// import { Container } from "@chakra-ui/react";

import SideBar from '../../components/Layout/SideBar/sideBar'
import { RiHomeSmile2Line } from 'react-icons/ri';
import { MdAddchart } from 'react-icons/md';
import { BiStore } from 'react-icons/bi';
import { GiBanknote } from 'react-icons/gi';
import { IoExitOutline, IoBusinessOutline } from 'react-icons/io5';
import RenderBar from '../../components/Layout/SideBar/RenderBar';
import HomeBusiness from '../Dashboard/BusinessDashboard/HomeBusiness/HomeBusiness'
import StoreLink from '../Dashboard/BusinessDashboard/StoreLink/addUrlPage';
import Order from '../Dashboard/BusinessDashboard/Order/createOrder';
import Payments from '../Dashboard/BusinessDashboard/Payment/createTransaction';


export default function DashboardPage() {


  const [selected, setSelected] = useState('Home');

	const handleSelect = (tab) => {
		setSelected(tab);
	};
  return (
		<>
			<SideBar
				tabs={[
					{
						icon: <RiHomeSmile2Line />,
						label: 'Home',
						link: '/dashboard',
					},
					{
						label: 'Store',
						link: '/store-link',
						icon: <BiStore />,
					},
					{
						label: 'Orders',
						link: '/order',
						icon: <MdAddchart />,
					},
					{
						label: 'Payment',
						link: '/payment',
						icon: <GiBanknote />,
					},
					{
						label: 'Account',
						link: '/account',
						icon: <IoBusinessOutline />,
					},
					{
						label: 'Logout',
						link: '/logout',
						icon: <IoExitOutline />,
					},
				]}
				selected={selected}
				setSelected={handleSelect}>
				<RenderBar isSelected={selected === 'Home'}>
					<HomeBusiness />
				</RenderBar>
				<RenderBar isSelected={selected === 'Store'}>
					<StoreLink />
				</RenderBar>
				<RenderBar isSelected={selected === 'Orders'}>
					<Order />
				</RenderBar>
				<RenderBar isSelected={selected === 'Payment'}>
					<Payments />
				</RenderBar>
				{/* <RenderBar isSelected={selected === 'Account'}>
					<StoreLink />
				</RenderBar> */}
				<RenderBar isSelected={selected === 'Logout'}>
					<StoreLink />
				</RenderBar>
			</SideBar>
		</>
	);
}
