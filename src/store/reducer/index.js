import { dataReducer } from "./dataReducer";
import { authReducer } from "./authReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({dataReducer, authReducer})

export default reducers