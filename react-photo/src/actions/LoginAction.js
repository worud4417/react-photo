import types from './types'

export function LoginAction(isLogin){
    return {
        type: types.LOGIN,
        isLogin:isLogin
    }
}