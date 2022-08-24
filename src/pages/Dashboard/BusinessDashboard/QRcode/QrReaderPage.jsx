import React,{useState} from 'react';
import QrReader from 'react-qr-reader';


const QrReaderPage = () => {
  const [scanWebCam, setScanWebCam] = useState('No result');
 const handleErrorWebCam = (error) => {
		console.log(error);
 };
 const handleScanWebCam = (result) => {
		if (result) {
			setScanWebCam(result);
		}
 };

  return (
		<div>
			<QrReader
				delay={300}
				style={{ width: '100%' }}
				onError={handleErrorWebCam}
				onScan={handleScanWebCam}
			/>
			<h1>WebCam Result:{scanWebCam}</h1>
		</div>
	);
}

export default QrReaderPage 
