import { combineReducers } from 'redux';
import userReducer from '../ReduxContianer/reducers/userReducer'



const rootReducer = combineReducers({
   user: userReducer
})

export default rootReducer;
