
import { types } from "../types/types"

export const startLoginEmailPassword = ()=>{
    return (dispatch) =>{
        setTimeout(() =>{
            dispatch(login(1234,"isai"));
        },3500)
    }
}

export const login =(uid, displayName)=>(
     {
        type: types.login,
        payload: {
            uid,
            displayName
        }
    })
