export const getuser = (input)=>{
    return {
        type : "GET_USER",
        payload : input
    }
}

export const logout = ()=>{
    return {
        type : "LOGOUT"
    }
}