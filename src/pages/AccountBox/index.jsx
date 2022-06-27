import {
 
  Text,
  Image,
  
} from "@chakra-ui/react";
import { Link} from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/color-mode";
import logo from "../../assets/Logomark.png";
import store from "../../assets/store.png";
import user from "../../assets/user.png";
// import "../../../src";
import { NavLink } from "react-router-dom";

export default function AccountBox() {
  const whitebg = useColorModeValue("white.400");

  return (
      <div className="acct-div">
        <div className="imgcontainer">
          <Image mb="15" src={logo} alt="logo" />
        </div>
        <Text
          fontSize="36px"
          mt="8"
          fontWeight="bold"
          lineHeight="5"
          className="welcome"
        >
          Create an Account
        </Text>
        <div className="acct-types">
          <div className="pers-acct">
            <Link to="/personal-signup">
              <Image h="24" m="5" src={user} alt="user" />
              <Text fontSize="18px">Personal Account</Text>
              <Text fontSize="13px" color="gray.500">
                Manage your owner Account
              </Text>
            </Link>
          </div>
          <div className="bus-acct">
            <Link to="/business-signup">
              <Image h="24" m="5" src={store} alt="store" />
              <Text fontSize="18px">Business Account</Text>
              <Text fontSize="13px" color="gray.500">
                Manage your Business Account
              </Text>
            </Link>
          </div>
        </div>
      </div>

    // <Container maxW='container.lg'>
    // 	<Box
    // 		maxW='xlg'
    // 		p='20'
    // 		m='36'
    // 		boxSizing='border-box'
    // 		borderWidth='1px'
    // 		borderRadius='lg'
    // 		overflow='hidden'>
    // 		<Center>
    // 			<Stack>
    // 				<Image mb='15' src={logo} alt='logo' />
    // 			</Stack>
    // 		</Center>

    // 		<Center>
    // 			<Stack>
    // 				<Text fontSize='36px' mt='10' fontWeight='bold' lineHeight='5'>
    // 					Create Accounts
    // 				</Text>
    // 			</Stack>
    // 		</Center>
    // 		<Center>
    // 			<SimpleGrid m='10' columns={2} spacing={8}>
    // 				<Box
    // 					as={RLink}
    // 					w='60'
    // 					to='/personal-signup'
    // 					h='200'
    // 					bg={whitebg}
    // 					border='1px'
    // 					borderColor='gray.300'
    // 					borderRadius='0px 11px 11px 11px'>
    // 					<Image h='24' m='5' src={user} alt='user' />
    // 					<Stack m='5'>
    // 						<Text fontSize='18px'>Personal Account</Text>
    // 						<Text fontSize='13px' color='gray.500'>
    // 							Manage your owner Account
    // 						</Text>
    // 					</Stack>
    // 				</Box>
    // 				<Box
    // 					as={RLink}
    // 					to='/business-signup'
    // 					w='60'
    // 					h='200'
    // 					bg={whitebg}
    // 					border='1px'
    // 					borderColor='gray.300'
    // 					borderRadius='0px 11px 11px 11px'>
    // 					<Image h='24' m='5' src={store} alt='store' />
    // 					<Stack m='5'>
    // 						<Text fontSize='18px'>Business Account</Text>
    // 						<Text fontSize='13px' color='gray.500'>
    // 							Manage your Business Account
    // 						</Text>
    // 					</Stack>
    // 				</Box>
    // 			</SimpleGrid>
    // 		</Center>
    // 	</Box>
    // </Container>
  );
}
