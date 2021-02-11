import { combineReducers } from "redux";
import {songReducer, cartReducer, favoriteReducer, addSongReducer} from "./reducers";

export const rootReducer = combineReducers({
    allSongs: songReducer,
    cartItem: cartReducer,
    favorite: favoriteReducer,
    add: addSongReducer
}) 