import { combineReducers } from "redux";
import { HomeReducer as home } from "../pages/Home/redux";

const rootReducer = combineReducers({
  home,
});

export default rootReducer;