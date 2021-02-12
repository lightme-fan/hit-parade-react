import { createStore } from "redux";
import { rootReducer } from "../redux";
import state from "../state";

const store = createStore(rootReducer, state)
export default store