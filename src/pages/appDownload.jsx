import React from 'react'
import { borderRadius, PrimarySection, PrimaryTitle } from '../Styles';
import { Image, Link} from '@chakra-ui/react';
import styled from 'styled-components';
import google from '../assets/google.svg';
import apple from '../assets/apple.svg';
import './home.css';

export default function AppDownload() {
  return (
		<AppSection>
			<div>
				<PrimaryTitle>Download Our App</PrimaryTitle>
			</div>
			<div className='download'>
				<div className='download__btn'>
					<Link href='https://play.google.com/store/apps/details?id=com.finosell.www.finosell'>
						<Image src={google} alt='google' />
					</Link>
				</div>
				{/* <div className='download__btn'>
					<Image src={apple} alt='apple' className='apps' />
				</div> */}
			</div>
		</AppSection>
	);
}


const AppSection = styled(PrimarySection)`
	${borderRadius};
	border: solid 0.4rem #d6aa1b;
	margin: auto;
	width: 100%;
	display: flex;
	padding: 3rem 1rem;
	flex-direction: column;
	align-items: center;
	section {
		margin-bottom: 3rem;
	}
`;
