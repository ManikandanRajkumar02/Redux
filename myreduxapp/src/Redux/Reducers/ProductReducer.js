import { Actiontypes } from "../Constants/ActionTypes";
const initialState={
    products:[]
}

export const setProductsReducer=(state=initialState,{type,payload})=>{
   switch (type) {
    case Actiontypes.SET_PRODUCTS:
        return {...state,products:payload}
   default:
        return state
   }
}

export const selectedProductReducer=(state=initialState,{type,payload})=>{
   switch (type) {
    case Actiontypes.SELECTED_PRODUCT:
       return {...state,...payload}
   default:
        return state
   }
}