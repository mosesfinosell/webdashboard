import * as React from 'react';
import ReactToPrint from 'react-to-print';
import { Button, Link, Stack } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/color-mode';
import { useSelector} from 'react-redux';
// import { Chart } from '../components/Chart';
// import { Bill } from '../components/Bill';
// import '../assets/css/App.css';

function PrintInvoice() {

    const invoiceInfo = useSelector(
			(state) => state.businessReducer.invoice.invoice
		);
	

const yellowbtn = useColorModeValue('yellow.500');
    const componentRef = React.useRef(null);

		const reactToPrintContent = React.useCallback(() => {
			return componentRef.current;
		}, [componentRef.current]);

		const printTrigger = () => {
			return (
                <Button
					bg={yellowbtn}
					width='180px'
					h='60px'
					borderRadius='0px 11px 11px 11px'
					type='submit'
					color='white'
					_hover={{ bg: '#1A202C' }}>
					Print
				</Button>
			);
		};
		const previewTrigger = () => {
			return (
				<Button
					bg={yellowbtn}
					width='180px'
					h='60px'
					borderRadius='0px 11px 11px 11px'
					type='submit'
					color='white'
					_hover={{ bg: '#1A202C' }}>
					Preview
				</Button>
			);
		};

		const handlePrint = (target) => {
			return new Promise(() => {
				console.log('forwarding print request to the main process...');

				let data = target.contentWindow.document.documentElement.outerHTML;
				//console.log(data);
				let blob = new Blob([data], { type: 'text/html' });
				let url = URL.createObjectURL(blob);

				window.electronAPI.printComponent(url, (response) => {
					console.log('Main: ', response);
				});
				//console.log('Main: ', data);
			});
		};

		const handlePreview = (target) => {
			return new Promise(() => {
				console.log('forwarding print preview request...');

				let data = target.contentWindow.document.documentElement.outerHTML;
				//console.log(data);
				let blob = new Blob([data], { type: 'text/html' });
				let url = URL.createObjectURL(blob);

				window.electronAPI.previewComponent(url, (response) => {
					console.log('Main: ', response);
				});
				//console.log('Main: ', data);
			});
		};
 

return (
	<div>
		<Stack direction='row' >
			<ReactToPrint
				content={reactToPrintContent}
				documentTitle='Invoice'
				trigger={printTrigger}
				print={handlePrint}
			/>
			<ReactToPrint
				content={reactToPrintContent}
				documentTitle='Invoice'
				trigger={previewTrigger}
				print={handlePreview}
			/>
		</Stack>
		<Link ref={componentRef} to={invoiceInfo?.filePath}></Link>
	</div>
);
}

export default PrintInvoice;
