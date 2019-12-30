import {combineReducers} from 'redux'
import products from "./product";
import cart from "./cart";
import filter from "./filter";

export default combineReducers({
    products,
    cart,
    filter
})