
const init_State = {
    init: "تسجيل الدخول",
    counter : 0,
    isLoader : false
}

function reducerLoginChange (state= init_State , action){
switch (action.type) {
    case "Set_Login":
        return {
            ...state , init : action.payload
        }
        break;
        case "Set_Sura" :
            return{
                ...state , counter : action.payload
            }
            break;
            case "SET_LOADER" :
                return{
                    ...state , isLoader : action.payload
                }
                break;

    default:
        return state;
}
}
export default reducerLoginChange;