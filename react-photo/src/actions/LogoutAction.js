import types from './types'

export function LogoutAction(isLogin){
    return{
        type:types.LOGOUT,
        isLogin:isLogin
    }
}