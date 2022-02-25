import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
// import {persistStore} from 'redux-persist'
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'

const middleware = [thunk, logger];


export const store = createStore(rootReducer, (applyMiddleware(...middleware)));

// export const persistor = persistStore(store);