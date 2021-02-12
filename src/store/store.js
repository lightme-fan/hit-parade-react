import { applyMiddleware, createStore } from "redux";
import { load, save } from "redux-localstorage-simple";

import { rootReducer } from "../redux";
import state from "../state";

const storeWithMiddleware = applyMiddleware(save(state))(createStore)

const store = storeWithMiddleware(rootReducer, load())
export default store