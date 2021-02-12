export function getSongs(song) {
    return {
        type: "GET_SONGS",
        payload: song
    }
}

export function getInitialCart(cart) {
    return {
        type: "GET_INITIAL_CART",
        payload: cart
    }
}

export function handleFavoriteSong(id) {
    return {
        type: "HANDLE_FAVORITE_SONG",
        payload: id
    }
}

export function upvoteSong(song) {
    return {
        type: "UPVOTE_SONG",
        payload: song
    }
}

export function downvoteSong(song) {
    return {
        type: "DOWNVOTE_SONG",
        payload: song
    }
}

export function styles(song) {
    return {
        type: "SONG_STYLE",
        payload: song
    }
}

export function addNewSong(song) {
    return {
        type: "ADD_NEW_SONG",
        payload: song
    }
}

export function handleInputChange(song) {
    return {
        type: "HANDLE_INPUT_CHANGE",
        payload: song
    }
}

export function addToCart(item) {
    return {
        type: "ADD_TO_CART",
        payload: item
    }
}

export function removeFromCart(item) {
    return {
        type: "REMOVE_FROM_CART",
        payload: item
    }
}

export function boughtCart(item) {
    return {
        type: "BOUGHT_CART",
        payload: item
    }
}

export function setTitle(text) {
    return {
        type: "ADD_TITLE",
        payload: text
    }
}

export function setSinger(value) {
    return {
        type: "ADD_SINGER",
        payload: value
    }
}

export function setPrice(value) {
    return {
        type: "ADD_PRICE",
        payload: value
    }
}

export function setStyle(value) {
    return {
        type: "ADD_STYLE",
        payload: value
    }
}

export function setLyrics(value) {
    return {
        type: "ADD_LYRICS",
        payload: value
    }
}