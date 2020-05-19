import * as redux from "redux";

import pokemon from "./pokemon";
import { reducer } from "redux-form";

export default redux.combineReducers({
pokemon,
form: reducer,
}) as any;
