import types from './types'

export function PhotoAction(uri){
    return{
        type:types.PHOTO,
        uri:uri
    }
}