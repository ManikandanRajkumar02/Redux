import { combineReducers } from "redux";
import { setProductsReducer,selectedProductReducer } from "./ProductReducer";

const reducers=combineReducers({
    allProducts:setProductsReducer,
    product:selectedProductReducer
})
export default reducers