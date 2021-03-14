import {LoginActionType} from "./LoginActionType";

const INITIAL_STATE = {
    openedLogin : "",
    openedCodeVerified:""
}

const loginReducer = (state=INITIAL_STATE,action)=>{
    switch (action.type) {
        case LoginActionType.OPEN_LOGIN:
            return{
                ...state,
                openedLogin: action.payload
            }
        case LoginActionType.OPEN_CODE_VERIFIED :
            return {
                ...state,
                openedCodeVerified: action.payload
            }
        default : return state
    }
}

export default loginReducer