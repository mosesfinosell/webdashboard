import * as React from 'react';
// import ReactToPrint from 'react-to-print';
import { useReactToPrint } from 'react-to-print';


import { Button} from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useSelector} from 'react-redux';

function PrintInvoice() {

    const invoiceInfo = useSelector(
			(state) => state.businessReducer?.invoice?.invoice
		);
	

const yellowbtn = useColorModeValue('yellow.500');
    const componentRef = React.useRef(null);


	  const handlePrint = useReactToPrint({
			content: () => componentRef.current,
		});

return (
	<div>
		<a
			ref={componentRef}
			href={invoiceInfo?.filePath}
			target='_blank'
			rel='noreferrer'>
			<Button
				onClick={handlePrint}
				bg={yellowbtn}
				width='180px'
				h='60px'
				borderRadius='0px 11px 11px 11px'
				type='submit'
				color='white'
				_hover={{ bg: '#1A202C' }}>
				Print
			</Button>
		</a>
	</div>
);
}


export default PrintInvoice;



