import styled from 'styled-components';
import { borderRadius, smallBorderRadius } from '../../Styles';

export const FormTitleContainer = styled.div`
	margin: 0 auto;
	margin-bottom: ${35 * 0.063}rem;
	width: ${0.063 * 453}rem;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	img {
		margin-bottom: ${0.063 * 28}rem;
	}
	h3 {
		margin-bottom: ${0.063 * 10}rem;
		font-size: ${36 * 0.063}rem;
		line-height: ${36 * 0.063}rem;
		color: #273b4a;
		font-weight: 700;
	}
	p {
		color: #8c8c8c;
		font-size: ${18 * 0.063}rem;
		line-height: ${23 * 0.063}rem;
	}
`;

export const Container = styled.div`
	width: ${(prop) =>
		typeof prop.width === 'number' ? `${prop.width * 0.063}rem` : prop.width};
	margin: 0 auto ${0.063 * 0}rem;
	transition: all 3s ease;
	.error-message {
		color: red;
		font-weight: 500;
		font-size: 0.8rem;
		padding: 0 0.1rem;
	}
`;

export const FieldContainer = styled.div`
	width: 100%;
	height: ${70 * 0.063}rem;
	position: relative;

	@media only screen and (min-width: 768px) {
		height: ${90 * 0.063}rem;
	}
`;

export const Field = styled.input`
	border-radius: 0px 11px 11px 11px;
	width: 500px;
	height: 65px;
	border: solid ${0.063 * 1}rem #d9d9d9;
	background: #fafafa;
	padding: ${0.063 * 34}rem ${0.063 * 34}rem ${0.063 * 34}rem ${0.063 * 54}rem;
	font-size: ${0.063 * 18}rem;
	line-height: ${0.063 * 22}rem;
	&:focus {
		background: #fdf9ed;
		border-color: #f7e8b5;
		box-shadow: none;
		outline: none;
		& + div {
			color: #d6aa1b;
		}
	}
	@media only screen and (min-width: 768px) {
		padding: ${0.063 * 34}rem ${0.063 * 34}rem ${0.063 * 34}rem ${0.063 * 74}rem;
	}
`;

export const Label = styled.label`
	margin-bottom: ${11 * 0.063}rem;
	font-size: ${15 * 0.063}rem;
	line-height: ${19 * 0.063}rem;
	font-weight: 400;
`;

export const InputLeft = styled.div`
	height: 100%;
	position: absolute;
	left: 1.5rem;
	bottom: 1.4rem;
	top: 0;
	margin: auto 0;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #8c8c8c;
	font-size: ${20 * 0.063}rem;
`;

export const Submit = styled.div`
	// border-radius: ${smallBorderRadius};
	// background: #d6aa1b;
	// border: none;
	// outline: none;
	// width: ${0.063 * 650}rem;
	// height: ${0.063 * 90}rem;
	//display: flex;
	//align-items: center;
	//justify-content: center;
	// font-weight: 400;
	// color: #fff;
	// font-size: ${0.063 * 18}rem;
	// line-height: ${0.063 * 22}rem;
	margin-left: 28rem;
	margin-bottom: 15px;
	@media only screen and (max-width: 768px) {
		margin-left: 8rem;
	}
`;
