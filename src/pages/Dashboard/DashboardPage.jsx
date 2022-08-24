import React,{ useState} from 'react'
// import { Container } from "@chakra-ui/react";

import SideBar from '../../components/Layout/SideBar/sideBar'
import { RiHomeSmile2Line } from 'react-icons/ri';
import { MdAddchart, MdManageAccounts } from 'react-icons/md';
import { BiStore } from 'react-icons/bi';
import { BsJournalText } from 'react-icons/bs';
import { GiBanknote } from 'react-icons/gi';
import { FaStore } from 'react-icons/fa';
// import { IoExitOutline } from 'react-icons/io5';
import RenderBar from '../../components/Layout/SideBar/RenderBar';
import HomeBusiness from '../Dashboard/BusinessDashboard/HomeBusiness/HomeBusiness'
import StoreInventory from '../Dashboard/BusinessDashboard/HomeBusiness/StoreInventory';
import InvoiceBoard from '../Dashboard/BusinessDashboard/HomeBusiness/InvoiceBoard';
import StoreLink from '../Dashboard/BusinessDashboard/StoreLink/addUrlPage';
import Order from '../Dashboard/BusinessDashboard/Order/createOrder';
import Payments from '../Dashboard/BusinessDashboard/Payment/createTransaction';
import StoreProfile from '../Dashboard/BusinessDashboard/Account/AccountBusinessProfile'

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
						label: 'Inventory',
						link: '/store-inventory',
						icon: <FaStore />,
					},
					{
						label: 'Invoice',
						link: '/invoice',
						icon: <BsJournalText />,
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
						icon: <MdManageAccounts />,
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
				<RenderBar isSelected={selected === 'Inventory'}>
					<StoreInventory />
				</RenderBar>
				<RenderBar isSelected={selected === 'Orders'}>
					<Order />
				</RenderBar>
				<RenderBar isSelected={selected === 'Payment'}>
					<Payments />
				</RenderBar>
				<RenderBar isSelected={selected === 'Invoice'}>
					<InvoiceBoard />
				</RenderBar>
				<RenderBar isSelected={selected === 'Account'}>
					<StoreProfile />
				</RenderBar>
			</SideBar>
		</>
	);
}
