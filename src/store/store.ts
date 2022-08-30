import {createStore, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';
import RootReducer from '../redux/reducers/RootReducer';

const store = createStore(RootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof RootReducer>;

export default store;
