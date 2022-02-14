import { combineReducers } from 'redux';
import personalReducer from './PersonalRedux/PersonalReducer';


const rootReducer = combineReducers({
   personal: personalReducer
})

export default rootReducer;
