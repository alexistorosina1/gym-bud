import { combineReducers } from "redux";
import loginSlice from "../slices/loginSlice";
import signupSlice from "../slices/signupSlice";

const rootReducer = combineReducers({
    login: loginSlice,
    signup: signupSlice,
})

export default rootReducer;