
import { Link } from 'react-router-dom';
// import { useColorModeValue } from "@chakra-ui/color-mode";
// import logo from "../../assets/Logomark.png";
import store from '../../assets/store.png';
import user from '../../assets/user.png';

import FormTitle from '../../components/Form/FormTitle';
import { Login, Option, Options, Image } from './style';

export default function AccountBox() {
	// const whitebg = useColorModeValue("white.400");

	return (
		<>
			<FormTitle title='Create an account' text='' />

			<Options>
				<Link
					to='/coming-soon'
					// to="/personal-signup"
				>
					<Option>
						<Image src={user} alt='user' />
						<h3>Personal Account</h3>
						<p>Manage your owner Account</p>
					</Option>
				</Link>
				<Link to='/business-signup'>
					<Option>
						<Image src={store} alt='store' />
						<h3>Business Account</h3>
						<p>Manage your Business Account</p>
					</Option>
				</Link>
			</Options>

			<Login>
				Already have an account? <Link to='/business-signin'>Login</Link>
			</Login>
		</>
	);
}
