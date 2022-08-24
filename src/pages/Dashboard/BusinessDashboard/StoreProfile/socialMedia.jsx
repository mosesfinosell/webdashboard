import React,{useState,useEffect} from 'react'
import {
	Stack,
	Input,
	InputLeftElement,
	InputRightElement,
	InputGroup,
	FormControl,
	FormLabel,
	FormErrorMessage,
    Button,
    Text,
    Heading
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
// import { BiPencil } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import { BsWhatsapp, BsInstagram, BsYoutube } from 'react-icons/bs';

import { updateSocialMedia,getStoreLink } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';

export default function SocialMedia() {
	const dispatch = useDispatch();

	const [whatsapp, setWhatsapp] = useState('');
	const [instagram, setInstagram] = useState('');
	const [youtube, setYoutube] = useState('');
  const isFetching = useSelector((state) => state.businessReducer.isFetching);
	const businessInfo = useSelector(
		(state) => state.businessReducer.businessUserInfo
	);
		const storeInfo = useSelector(
		(state) => state.businessReducer.store
	);
const businessId = businessInfo.business_id;
const userId = businessInfo.user_id;

useEffect(() => {
	dispatch(getStoreLink(userId))
},[])
	
	function handleSubmit(e) {
			e.preventDefault();
		dispatch(
			updateSocialMedia(
				
				businessId,instagram,whatsapp,youtube
			)
		);
	}


    return (
			<Stack pl='70px' pt='20px'>
				<Stack mb='30px'>
					<Heading fontSize='16px' as='h6'>
						Social Media
					</Heading>
					<Text fontSize='14px' color='gray'>
						Input your social media to be used across Finosell
					</Text>
				</Stack>
				<Formik>
					{() => (
						<Form onSubmit={handleSubmit}>
							<Field name='number'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.name && form.touched.name}>
										<FormLabel htmlFor='name'>WhatsApp</FormLabel>
										<InputGroup>
											<InputLeftElement
												pointerEvents='none'
												m='15px 1px'
												fontSize='20px'
												color='yellow.500'
												children={<BsWhatsapp />}
											/>

											<Input
												{...field}
												value={whatsapp}
												mb='20px'
												onChange={(e) => setWhatsapp(e.target.value)}
												placeholder={storeInfo.whatsapp}
												width='400px'
												h='70px'
												borderRadius='0px 11px 11px 11px'
												_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
											/>
										</InputGroup>
										<FormErrorMessage>{form.errors.name}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='number'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.name && form.touched.name}>
										<FormLabel htmlFor='name'>Instagram</FormLabel>
										<InputGroup>
											<InputLeftElement
												pointerEvents='none'
												m='15px 1px'
												fontSize='20px'
												color='yellow.500'
												children={<BsInstagram />}
											/>

											<Input
												{...field}
												value={instagram}
												mb='20px'
												onChange={(e) => setInstagram(e.target.value)}
												placeholder={storeInfo.instalink}
												width='400px'
												h='70px'
												borderRadius='0px 11px 11px 11px'
												_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
											/>
										</InputGroup>
										<FormErrorMessage>{form.errors.name}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Field name='number'>
								{({ field, form }) => (
									<FormControl
										isInvalid={form.errors.name && form.touched.name}>
										<FormLabel htmlFor='name'>Youtube</FormLabel>
										<InputGroup>
											<InputLeftElement
												pointerEvents='none'
												m='15px 1px'
												fontSize='20px'
												color='yellow.500'
												children={<BsYoutube />}
											/>

											<Input
												{...field}
												value={youtube}
												mb='20px'
												onChange={(e) => setYoutube(e.target.value)}
												placeholder={storeInfo.youtube}
												width='400px'
												h='70px'
												borderRadius='0px 11px 11px 11px'
												_focus={{ bg: '#fdf9ed', borderColor: '#f7e8b5' }}
											/>
										</InputGroup>
										<FormErrorMessage>{form.errors.name}</FormErrorMessage>
									</FormControl>
								)}
							</Field>
							<Button
								mt={4}
								bg='yellow.500'
								width='400px'
								h='70px'
								borderRadius='0px 11px 11px 11px'
								type='submit'
								color='white'
								_hover={{ bg: '#1A202C' }}>
								{!isFetching ? 'Update Social Media' : 'Updating Social Media...'}
							</Button>
						</Form>
					)}
				</Formik>
			</Stack>
		);
}
