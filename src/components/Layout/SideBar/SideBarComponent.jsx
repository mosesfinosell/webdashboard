import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import {NavLink} from 'react-router-dom'
import {Text } from '@chakra-ui/react'
import '../../../components/sidebar.css';

export default function SideBarComponent({ link, label, icon, onClick, className }) {
	return (
		<List disablePadding dense className={` ${className}`}>
			<span className='space'>
				<ListItem exact to={link} onClick={onClick}>
					<span className='icons'>{icon}</span>
					<Text cursor='pointer'  className='text'>
						{label}
					</Text>
				</ListItem>
			</span>
		</List>
	);
}
