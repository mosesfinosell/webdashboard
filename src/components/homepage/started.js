import React, { useState, useContext, useEffect } from 'react';
// import { AuthContext } from "./routes";
import axios from 'axios';
// import {APIHost as host}  from  '../../app.json'
// import * as firebase from 'firebase'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import {
	Container,
	Row,
	Col,
	Navbar,
	Nav,
	NavItem,
	Table,
	Button,
	NavDropdown,
	MenuItem,
	NavLink,
	Alert,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// import Header from "./header.js";

const Login = () => {
	const [email, setEmail] = useState('');
	const [number, setNumber] = useState('');
	const [password, setPassword] = useState('');
	const [error, setErrors] = useState('');
	const [Datas, setData] = useState([]);
	const [isLoading, setLoading] = useState(false);

	// const Auth = useContext(AuthContext);

	const history = useHistory();

	return (
		<div>
			<div className='White-Box'>
				<img
					src='images/Logomark.png'
					className='Logo-mark'
					alt='Finosell Logo'
				/>
				<h3 className='text-create-an-account'>Create an Account</h3>
				<a href='/r/business'>
					<div className='sign-up-box1'>
						<img
							src='images/Union.png'
							className='icon-union'
							alt='Finosell Logo'
						/>
						<p className='text-personal-Acc'>Personal Account</p>
						<p>Manage your Finance</p>
					</div>
				</a>
				<a href='/r/personal'>
					{' '}
					<div className='sign-up-box2'>
						<img
							src='images/Group.png'
							className='icon-group'
							alt='Finosell Logo'
						/>
						<p className='text-business-Acc'>Business Account</p>
						<p>Manage your Business</p>
					</div>
				</a>
			</div>
		</div>
	);
};

export default Login;
