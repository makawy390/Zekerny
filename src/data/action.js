

export function actionLogin(data){
    return{
        type : "Set_Login",
        payload : data
    }
}
export function likeSura(data){
    return {
        type : "Set_Sura",
        payload : data
    }
}
export function isLoading(data){
    return{
        type : "SET_LOADER",
        payload : data
    }
}