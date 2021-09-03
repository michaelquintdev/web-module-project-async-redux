import { dataReducer } from "./dataReducer";
import { userReducer } from "./userReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({dataReducer, userReducer})

export default reducers