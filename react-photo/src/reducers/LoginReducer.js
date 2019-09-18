import types from "../actions/types";

let isLogin = false
export default (state = isLogin,action)=>{
    switch(action.type){
        case types.LOGIN:
            state = action.isLogin
            return state
        case types.LOGOUT:
            state = action.isLogin
            return state
        default:
            return state
    }
}