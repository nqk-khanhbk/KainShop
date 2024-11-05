import CartReduce from "./cart";
import loginReducer from "./login";
import {combineReducers} from "redux";
const AllReducer = combineReducers ({
   CartReduce,
   loginReducer
   //chứa các reducer
}
 );
 export default AllReducer;