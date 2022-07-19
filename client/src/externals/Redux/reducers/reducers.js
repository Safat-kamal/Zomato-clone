const initialState = {
    user : null,
}

const reducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_USER":
            return {
                ...state,
                user : action.payload
            }
        case "LOGOUT":
            return {
                ...state,
                user : null
            }   
        default:
            return state
    }
}




export default reducer;