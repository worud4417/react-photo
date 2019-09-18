import types from "../actions/types";

let uri = "../"
export default (state = uri,action)=>{
    switch(action.type){
        case types.PHOTO:
            state = action.uri
            return state
        default:
            return state
    }
}