import state from "../state"
const {allSongs} = state

export function songReducer(state = null, action) {
    switch (action.type) {
        case "GET_SONGS":
            return action.payload
        default:
            return state
    }
    
}

export function cartReducer(state = null, action) {
    switch (action.type) {
        case "GET_INITIAL_CART":
            return action.payload
    
        default:
            return state
    }
}


export function favoriteReducer(state = allSongs, action) {
    switch (action.type) {
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
        case "DOWNVOTE_SONG" : {
            const foundSong = state.map(song => {
                if(song.id === action.payload) {
                    return {
                        ...song,
                        downvote: song.downvote + 1
                    }
                }
                return song
            })
            return foundSong
        }
        default:
            return state
    }
}

export function songStyleReducer(state = allSongs, action) {
    switch (action.type) {
        case "SONG_STYLE":
            return state.filter(item => item.id === action.payload)
    
        default:
            return state
    }
}

export function addSongReducer(state = allSongs, action) {
    switch (action.type) {
        case "ADD_NEW_SONG":
            return [...state, action.payload]
    
        default:
            return state
    }
}