import { combineReducers } from 'redux';
import {authentication} from './authentication.reducer'
import {navigation} from './navigation.reducer'
const rootReducer = combineReducers({authentication,navigation});
export default rootReducer;