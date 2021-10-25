import { dataReducer } from "./dataReducer";
import { authReducer } from "./authReducer";
import { profileReducer } from "./profileReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({dataReducer, authReducer, profileReducer})

export default reducers