import {
	Input,
    InputGroup,
    Box,
    Stack
	
} from '@chakra-ui/react';
import { useState } from 'react'
import { BiPencil } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import {ImageUploading} from 'react-images-uploading'
import { uploadImage } from '../../../../ReduxContianer/BussinessRedux/BusinessAction';


export default function ImageUploaded() {
	// Redux
	const businessSignIn = useSelector((state) => state.businessSignIn);
	const { user } = businessSignIn;
	const { businessDetails } = user;
    const { message } = businessDetails;

    const dispatch = useDispatch();
    const [businessId] = useState(message.business_id);
    const [image] = useState([])
    
    function handleUpload() {
        dispatch(uploadImage(businessId,image))
    }

    return (
			<Stack>
				<ImageUploading multiple value={image} onChange={handleUpload}>
					{({ onImageUpload }) => (
						<Box
							color='white'
							fontSize='18px'
							w='130px'
							border='0.5px solid yellow.500'
							bg='yellow.500'
							p='5px'
							borderRadius='0px 8px 8px 8px'
							position='relative'
							bottom='30px'
							left='50px'
							onClick={onImageUpload}>
							<BiPencil />
						</Box>
					)}
				</ImageUploading>
			</Stack>
		);
}


