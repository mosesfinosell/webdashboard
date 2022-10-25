import { Input, FormControl, FormLabel, InputGroup, InputRightElement, FormErrorMessage, Icon } from "@chakra-ui/react";
import { useController } from "react-hook-form";
import { useRef } from "react";

import { FaImage} from 'react-icons/fa';
export const FileUpload = ({ name,width,height, placeholder, acceptedFileTypes, control, children, isRequired = false }) => {
	const inputRef = useRef();
	const {
		field: { ref, onChange, value, ...inputProps },
		fieldState: { invalid},
	} = useController({
		name,
		control,
		rules: { required: isRequired },
	});

	return (
		<FormControl isInvalid={invalid} isRequired>
			<FormLabel htmlFor='writeUpFile'>{children}</FormLabel>
			<InputGroup>
				<InputRightElement
					pointerEvents='pointer'
					mr='120px'
					mt='8px'
					fontSize='20px'
					color='yellow.500'>
					<Icon as={FaImage} />
				</InputRightElement>
				<input
					type='file'
					onChange={(e) => onChange(e.target.files[0])}
					accept={acceptedFileTypes}
					name={name}
					ref={inputRef}
					{...inputProps}
					style={{ display: 'none' }}
				/>
				<Input
					placeholder={placeholder || 'Your file ...'}
					onClick={() => inputRef.current.click()}
					// onChange={(e) => {}}
					width={width}
					h={height}
					borderRadius='0px 11px 11px 11px'
					readOnly={true}
					value={(value && value.name) || ''}
				/>
			</InputGroup>
			<FormErrorMessage>{invalid}</FormErrorMessage>
		</FormControl>
	);
}

FileUpload.defaultProps = {
	acceptedFileTypes: '',
	allowMultipleFiles: false,
};

export default FileUpload;
	