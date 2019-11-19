import { createStore, applyMiddleware,combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const appInitialState = {}


const rootReducer = combineReducers({
    counterReducer: counterReducer,
    resultReducer: resultReducer
});


export function initializeStore (initialState = appInitialState) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}