import {
	Box,
	Text,
	Heading,
	HStack,
	VStack,
	StackDivider,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { getStoreMetric } from '../../../../../ReduxContianer/BussinessRedux/BusinessAction';
import { useSelector, useDispatch } from 'react-redux';

export default function StoreMetric({ title, total, ...rest }) {
	const dispatch = useDispatch();

	const businessInfo = useSelector(
		(state) => state.businessReducer.businessUserInfo
	);

	// const businessid = '73a48190-d512-40be-82d5-ac8e5b2a5a98';

	useEffect(() => {
		dispatch(getStoreMetric(businessInfo?.business_id));
	}, [dispatch, businessInfo?.business_id]);

	const storeMetricInfo = useSelector(
		(state) => state.businessReducer.storeMetrics?.data?.storeMetric
	);

	// console.log(storeMetricInfo);
	return (
		<>
			<VStack
				direction='row'
				w='100%'
				divider={<StackDivider borderColor='gray.200' />}
				spacing={4}
				align='stretch'>
				<HStack>
					<Box p={9} {...rest}>
						<Text fontSize='sm'>Number of Product</Text>
						<Heading fontSize='xl' mt={4}>
							{storeMetricInfo?.noOfProducts || 'n/a'}
						</Heading>
					</Box>
					<Box p={9} {...rest}>
						<Text fontSize='sm'>Number of Sales</Text>
						<Heading fontSize='xl' mt={4}>
							{storeMetricInfo?.noOfSales || 'n/a'}
						</Heading>
					</Box>
				</HStack>
				<HStack>
					<Box p={9} {...rest}>
						<Text fontSize='sm'>Number of Visitors</Text>
						<Heading fontSize='xl' mt={4}>
							{storeMetricInfo?.noOfVisitors || 'n/a'}
						</Heading>
					</Box>
					<Box p={9} {...rest}>
						<Text fontSize='sm'>Total Sales</Text>
						<Heading fontSize='xl' mt={4}>
							{storeMetricInfo?.totalSales || 'n/a'}
						</Heading>
					</Box>
				</HStack>
			</VStack>
		</>
	);
}
