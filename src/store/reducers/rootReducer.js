import authReducer from "./authReducer";
import categoryReducer from './categoryReducer';
import itemReducer from './itemReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    item: itemReducer
});

export default rootReducer;