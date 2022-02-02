import { combineReducers } from "redux";
import UseReducers from "./UserReducers";

const rootReducer = combineReducers({
    data: UseReducers
})

export default rootReducer