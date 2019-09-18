import {combineReducers} from 'redux'
import LoginReducer from './LoginReducer'
import PhotoReducer from './PhotoReducer'

export default combineReducers({
    isLogin:LoginReducer,
    uri:PhotoReducer
});