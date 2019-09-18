import * as LoginAction from './LoginAction'
import * as LogoutAction from './LogoutAction'
import * as PhotoAction from './PhotoAction'

const ActionCerators = Object.assign({},
        LoginAction,
        LogoutAction,
        PhotoAction
    )

export default ActionCerators;