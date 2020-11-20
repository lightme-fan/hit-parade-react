import React, { useState, useEffect } from 'react'
import songs from './songs'

const Context = React.createContext()

function ContextProvider({children}) {
    const [ allSongs, setSongs ] = useState([])
    const [ cartSong, setCart ] = useState([])
    const [ upvote, setUpvote ] = useState(0)
    const [ downvote, setDownvote ] = useState(0)

    useEffect(() => {
        setSongs(songs)
    }, [])

    const handleFavoriteSong = (id) => {
        console.log(id);
        const newSong = allSongs.map(song => {
            if (song.id === id) {
                return {
                    ...song,
                    isLiked: !song.isLiked
                }
            }
            return song;
        })
        setSongs(newSong)
    }

    const addToCart = (song) => {
        setCart(prevCart => [...prevCart, song])
    }

    const removeFromCart = (id) => {
        setCart(prevItem => prevItem.filter(item => item.id !== id))
    }

    // Up and Down votes
    const clickUpvote = (id) => {
        // const foundSong = allSongs.filter(song => {
        //     if(song.id !== id) {

        //     }
        // })
        // return foundSong
        setUpvote(prevVote => prevVote + 1)
    }

    const clickDownVote = (id) => {
        const findSong = allSongs.some(song => song.id !== id)
        if (findSong) {
            setDownvote(prevVote => prevVote - 1)
        }
    }

    return (
        <Context.Provider value={{allSongs, 
            handleFavoriteSong, 
            cartSong, 
            addToCart, 
            removeFromCart,
            upvote,
            downvote,           
            clickUpvote,
            clickDownVote,
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
