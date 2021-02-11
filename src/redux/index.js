import { combineReducers } from "redux";
import {songReducer, cartReducer, favoriteReducer, addSongReducer, handleCartReducer} from "./reducers";

export const rootReducer = combineReducers({
    allSongs: songReducer,
    cartItem: cartReducer,
    favorite: favoriteReducer,
    add: addSongReducer,
    handleCart: handleCartReducer
}) 