import { combineReducers } from "redux";
import { cartReducer, newSongReducer, songReducer } from "./reducers";

export const rootReducer = combineReducers({
    allSongs: songReducer,
    cartItem: cartReducer,
    newSong: newSongReducer
}) 