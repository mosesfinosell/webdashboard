import axios from 'axios';
import toast from 'react-hot-toast';
import { VERIFICATION } from '../../constants/businessSignupActionType';

// const finosellClient = axios.create({
// 	baseURL: 'https://finosell.link/api/v2',
// 	// process.env.REACT_APP_FINOSELL_BASE_URI
// });

export const setVerification = (dispatch, data) => {
	return dispatch({
		type: VERIFICATION,
		payload: data,
	});
};
