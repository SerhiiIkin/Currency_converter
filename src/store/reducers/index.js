import { combineReducers } from "redux";
import converterReducer from "./converterReducer";

const rootReducer = combineReducers({
    converter: converterReducer,
});

export default rootReducer;
