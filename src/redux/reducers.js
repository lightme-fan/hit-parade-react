import state from "../state"
const {allSongs, cartItem} = state

const newSong = {
    title: "",
    singer: "",
    style: "",
    price: "",
    lyrics: ""
}

export function songReducer(state = allSongs, action) {
    switch (action.type) {
        case "GET_SONGS":
            return action.payload
        case "UPVOTE_SONG" : {
            const foundSong = state.map(song => {
                if(song.id === action.payload) {
                    return {
                        ...song,
                        upvote: song.upvote + 1
                    }
                }
                return song
            })
            return foundSong
        }
        case "HANDLE_FAVORITE_SONG": {
            const newSong = state.map(song => {
                if (song.id === action.payload) {
                    return {
                        ...song,
                        isLiked: !song.isLiked
                    }
                }
                return song;
            })
            return newSong
        }    
        
        case "DOWNVOTE_SONG" : {
            const foundSong = state.map(song => {
                if(song.id === action.payload) {
                    console.log(song.downvote + 1);
                    return {
                        ...song,
                        downvote: song.downvote + 1
                    }
                }
                return song
            })
            return foundSong
        }
        case "ADD_NEW_SONG": {     
            return [...state, action.payload]
        }
        default:
            return state
    }
    
}

export function newSongReducer(state = newSong, action) {
    switch (action.type) {
        case "ADD_TITLE":
            return {...state, title: action.payload}
    
        case "ADD_SINGER":
            return {...state, singer: action.payload}
    
        case "ADD_SYTLE":
            return {...state, style: action.payload}
    
        case "ADD_PRICE":
            return {...state, price: action.payload}
    
        case "ADD_LYRICS":
            return {...state, lyrics: action.payload}
    
        default:
            return state
    }
}

export function cartReducer(state = cartItem, action) {
    switch (action.type) {
        case "GET_INITIAL_CART":
            return action.payload
        case "ADD_TO_CART":
            return [...state, action.payload]
        case "REMOVE_FROM_CART": {
            const removeItem = state.filter(item => {
                return item.id !== action.payload
            }) 
            return removeItem
        }
        case "BOUGHT_CART": { 
            return []
        }
        default:
            return state
    }
}
