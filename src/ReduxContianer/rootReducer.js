import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
import personalReducer from './PersonalRedux/PersonalReducer';
import storage from 'redux-persist/lib/storage/session';


// const persistConfig = {
//    key: 'root',
//    storage,                                                                               
//    whitelist: [ 'personal']
// }


const rootReducer = combineReducers({
   personal: personalReducer
})

// export default persistReducer(persistConfig, rootReducer);

export default rootReducer;
