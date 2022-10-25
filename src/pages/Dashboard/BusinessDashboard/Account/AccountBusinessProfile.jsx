import {
	Grid,
	Box,
	GridItem,
	Container,
	Text,
	Stack,
	Center,
	Flex,
	Heading,
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	// Image,
	Input,
	InputLeftElement,
	InputRightElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
	Button,
	Avatar,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { useState} from 'react';
import { MdEmail, MdWifiCalling3, MdAddBusiness } from 'react-icons/md';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useSelector, useDispatch } from 'react-redux';
import { BiPencil } from 'react-icons/bi';
import UpdatePassword from '../Account/updatePassword';
import FileUpload from './uploadImage';
import { useForm } from 'react-hook-form';

import {
	uploadImage,
	sendAuthCode,
	updateProfileInfo,
} from '../../../../ReduxContianer/BussinessRedux/BusinessAction';

export default function AccountBusinessProfile() {
	const yellowbtn = useColorModeValue('yellow.500');
	const dispatch = useDispatch();

	const {
		control,
		formState: { errors, isSubmitting },
	} = useForm();

	// Redux
	// const businessSignIn = useSelector((state) => state.businessSignIn);
	// const [businessId] = useState('c3cd4210-6e69-48ac-975f-b4a0b3b2ef9d');
    
	const businessInfo = useSelector(
		(state) => state.businessReducer.businessUserInfo
	);

	const [name, setName] = useState('');
	const [phonenumber, setPhonenumber] = useState('');
	const [email, setEmail] = useState('');
	const [authCode, setAuthCode] = useState('');
	const [image, setImage] = useState('');
	const [businessId] = useState('dd59148f-7e3b-4d26-84c0-f5d33e75067e');

	const isLoading = useSelector((state) => state.businessReducer.isFetching);
	
function handleUpload() {
	const formData = new FormData();
	formData.append('businessid', businessId);
	formData.append('imagefile', image);
	dispatch(uploadImage(formData));
}

// 	const onImageChange = (e) => {
//     e.persist();
//     const fileURL = e.target.files[0];
//     setForm({ ...form, contactPicture: fileURL });
//     if (fileURL) {
//       setTempFile(URL.createObjectURL(fileURL));
//     }
//   };
	//Function
	function handleSubmit(e) {
		e.preventDefault()
		dispatch(updateProfileInfo(businessInfo.user_id,phonenumber,name,email,authCode))
	}

	function handleClick() {
		dispatch(sendAuthCode(businessInfo.email));
	}

	return (
    <Container maxW="100%">
      <Tabs variant="unstyled">
        <Grid
          h="100vh"
          templateColumns="repeat(7, 1fr)"
          templateRows="repeat(5, 1fr)"
        >
          <GridItem rowStart={1} colSpan={4} bg="white">
            <Center>
              <TabList>
                <Tab
                  _selected={{
                    color: "white",
                    fontWeight: "bold",
                    px: "20px",
                    w: "100%",
                    h: "45px",
                    bg: "yellow.500",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                >
                  Profile
                </Tab>
              </TabList>
              <TabList>
                <Tab
                  _selected={{
                    color: "white",
                    w: "100%",
                    h: "45px",
                    bg: "yellow.500",
                    borderRadius: "0px 11px 11px 11px",
                  }}
                >
                  Password
                </Tab>
              </TabList>
            </Center>
          </GridItem>
          <GridItem rowStart={2} colSpan={7}>
            <TabPanels>
              <TabPanel>
                <Flex direction="row" justifyContent="space-between" mt="40px">
                  <Box>
                    <Stack mb="170px">
                      <Heading fontSize="16px" as="h6">
                        Change Profile Picture
                      </Heading>
                      <Text fontSize="14px" color="gray">
                        Choose a new profile to be used across Finosell
                      </Text>
                    </Stack>
                    <Stack mb="90px">
                      <Heading fontSize="16px" as="h6">
                        Full name
                      </Heading>
                      <Text fontSize="14px" color="gray">
                        Choose a new profile to be used across Finosell
                      </Text>
                    </Stack>
                    <Stack mb="80px">
                      <Heading fontSize="16px" as="h6">
                        Email
                      </Heading>
                      <Text fontSize="14px" color="gray">
                        Choose a new profile to be used across Finosell
                      </Text>
                    </Stack>
                    <Stack mb="50px">
                      <Heading fontSize="16px" as="h6">
                        Phone Number
                      </Heading>
                      <Text fontSize="14px" color="gray">
                        Choose a new profile to be used across Finosell
                      </Text>
                    </Stack>
                  </Box>
                  <Box alignItems="start">
                    <Stack direction="column" mb="30px">
                      <FileUpload
                        name="avatar"
                        acceptedFileTypes="image/*"
                        isRequired={true}
                        placeholder="click & upload..."
                        width="180px"
                        height="50px"
                        value={image}
                        onChange={(e) => setImage(e.target.files[0])}
                        control={control}
                      >
                        <Avatar src={businessInfo.business_image} size="xl" />
                      </FileUpload>

                      <Button
                        bg={yellowbtn}
                        width="180px"
                        h="50px"
                        borderRadius="0px 11px 11px 11px"
                        type="submit"
                        color="white"
                        isSubmitting="Uploading..."
                        _hover={{ bg: "#1A202C" }}
                        onClick={handleUpload}
                      >
                        Upload Photo
                      </Button>
                    </Stack>
                    <Stack>
                      <Formik>
                        {() => (
                          <Form onSubmit={handleSubmit}>
                            <Field name="name">
                              {({ field, form }) => (
                                <FormControl
                                  isInvalid={
                                    form.errors.name && form.touched.name
                                  }
                                >
                                  <FormLabel htmlFor="name">
                                    Business Name
                                  </FormLabel>
                                  <InputGroup>
                                    <InputLeftElement
                                      pointerEvents="none"
                                      m="12px 1px"
                                      fontSize="20px"
                                      color="yellow.500"
                                      children={<MdAddBusiness />}
                                    />
                                    <InputRightElement
                                      pointerEvents="none"
                                      m="15px 15px"
                                      color="gray.500"
                                    >
                                      <BiPencil />
                                    </InputRightElement>
                                    <Input
                                      {...field}
                                      mb="20px"
                                      value={name}
                                      onChange={(e) => setName(e.target.value)}
                                      placeholder={
                                        businessInfo.business_name ||
                                        "Loading..."
                                      }
                                      width="300px"
                                      h="60px"
                                      borderRadius="0px 11px 11px 11px"
                                      _focus={{
                                        bg: "#fdf9ed",
                                        borderColor: "#f7e8b5",
                                      }}
                                    />
                                  </InputGroup>
                                  <FormErrorMessage>
                                    {form.errors.name}
                                  </FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>
                            <Field name="email">
                              {({ field, form }) => (
                                <FormControl
                                  isInvalid={
                                    form.errors.name && form.touched.name
                                  }
                                >
                                  <FormLabel htmlFor="name">Email</FormLabel>
                                  <InputGroup>
                                    <InputLeftElement
                                      pointerEvents="none"
                                      m="12px 1px"
                                      fontSize="20px"
                                      color="yellow.500"
                                      children={<MdEmail />}
                                    />
                                    <InputRightElement
                                      pointerEvents="none"
                                      m="15px 15px"
                                      color="gray.500"
                                    >
                                      <BiPencil />
                                    </InputRightElement>
                                    <Input
                                      {...field}
                                      mb="20px"
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      placeholder={
                                        businessInfo?.email || "Loading..."
                                      }
                                      width="300px"
                                      h="60px"
                                      borderRadius="0px 11px 11px 11px"
                                      _focus={{
                                        bg: "#fdf9ed",
                                        borderColor: "#f7e8b5",
                                      }}
                                    />
                                  </InputGroup>
                                  <FormErrorMessage>
                                    {form.errors.name}
                                  </FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>
                            <Field name="number">
                              {({ field, form }) => (
                                <FormControl
                                  isInvalid={
                                    form.errors.name && form.touched.name
                                  }
                                >
                                  <FormLabel htmlFor="name">
                                    Phone number
                                  </FormLabel>
                                  <InputGroup>
                                    <InputLeftElement
                                      pointerEvents="none"
                                      m="12px 1px"
                                      fontSize="20px"
                                      color="yellow.500"
                                      children={<MdWifiCalling3 />}
                                    />
                                    <InputRightElement
                                      pointerEvents="none"
                                      m="15px 15px"
                                      color="gray.500"
                                    >
                                      <BiPencil />
                                    </InputRightElement>
                                    <Input
                                      {...field}
                                      value={phonenumber}
                                      mb="20px"
                                      onChange={(e) =>
                                        setPhonenumber(e.target.value)
                                      }
                                      placeholder={
                                        businessInfo?.phone_number ||
                                        "Loading..."
                                      }
                                      width="300px"
                                      h="60px"
                                      borderRadius="0px 11px 11px 11px"
                                      _focus={{
                                        bg: "#fdf9ed",
                                        borderColor: "#f7e8b5",
                                      }}
                                    />
                                  </InputGroup>
                                  <FormErrorMessage>
                                    {form.errors.name}
                                  </FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>
                            <Field name="number">
                              {({ field, form }) => (
                                <FormControl
                                  isInvalid={
                                    form.errors.name && form.touched.name
                                  }
                                >
                                  <FormLabel htmlFor="name">
                                    Auth Code
                                  </FormLabel>
                                  <InputGroup>
                                    <Input
                                      {...field}
                                      value={authCode}
                                      mb="20px"
                                      onChange={(e) =>
                                        setAuthCode(e.target.value)
                                      }
                                      placeholder="Input the code"
                                      width="300px"
                                      h="60px"
                                      borderRadius="0px 11px 11px 11px"
                                      _focus={{
                                        bg: "#fdf9ed",
                                        borderColor: "#f7e8b5",
                                      }}
                                    />
                                  </InputGroup>
                                  <FormErrorMessage>
                                    {form.errors.name}
                                  </FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>
                            <Button
                              mt={4}
                              bg="white"
                              width="300px"
                              h="60px"
                              borderRadius="0px 11px 11px 11px"
                              type="submit"
                              border="1px solid #D6AA1B"
                              color="#1A202C"
                              _hover={{ bg: "#D6AA1B", color: "white" }}
                            >
                              Update Profile
                            </Button>
                          </Form>
                        )}
                      </Formik>
                      <Button
                        mt={4}
                        bg={yellowbtn}
                        width="300px"
                        h="60px"
                        borderRadius="0px 11px 11px 11px"
                        type="submit"
                        color="white"
                        _hover={{ bg: "#1A202C" }}
                        onClick={handleClick}
                      >
                        Send Code
                      </Button>
                    </Stack>
                  </Box>
                </Flex>
              </TabPanel>
              <TabPanel>
                <UpdatePassword />
              </TabPanel>
            </TabPanels>
          </GridItem>
        </Grid>
      </Tabs>
    </Container>
  );
}
