import QRCode from 'react-qr-code';
import {Stack} from '@chakra-ui/react';
export default function Qrcode() {
	return (
		<Stack style={{ background: 'white', padding: '16px' }}>
			<QRCode value='Kennis' />
		</Stack>
	);
}
