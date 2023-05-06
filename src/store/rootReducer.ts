import { combineReducers } from "redux";
import itunesReducer from "./itunes";

const rootReducers = combineReducers({
    itunes: itunesReducer
});

export default rootReducers;