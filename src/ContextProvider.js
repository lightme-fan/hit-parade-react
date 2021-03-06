import React, { useState, useEffect } from 'react'
import songs from './songs'

const Context = React.createContext()

function ContextProvider({children}) {
    const [ allSongs, setSongs ] = useState([])
    const [ cartSong, setCart ] = useState([])
    
    const setSongFunc = () => {
        const lsSongs = JSON.parse(localStorage.getItem('allSongs'))
        if (lsSongs) {
            setSongs(lsSongs)
        } else {
            setSongs(songs)
        }
    }

    function initialCart() {
		const lsSong = JSON.parse(localStorage.getItem('cartSong'))
		if (lsSong) {
			setCart(lsSong)
		} 
    }
    
    useEffect(() => {
		setSongFunc()
		initialCart()
    }, [])
    
    useEffect(() => {
        if (allSongs.length > 0) {
            localStorage.setItem('allSongs', JSON.stringify(allSongs))
		}
    }, [allSongs])
    
    console.log(cartSong);
    
	useEffect(() => {
		if (cartSong.length > 0) {
			localStorage.setItem('cartSong', JSON.stringify(cartSong))
		}
	}, [cartSong])
	

    // Handle Fanvorite
    const handleFavoriteSong = (id) => {
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

    // Handle Cart
    const addToCart = (song) => {
        setCart(prevCart => [...prevCart, song])
    }

    const removeFromCart = (id) => {
        setCart(prevItem => prevItem.filter(item => item.id !== id))
    }

    // Up and Down votes
    const clickUpvote = (id) => {
        const foundSong = allSongs.map(song => {
            if(song.id === id) {
                return {
                    ...song,
                    upvote: song.upvote + 1
                }
            }
            return song
        })
        setSongs(foundSong)
    }

    const clickDownVote = (id) => {
        const foundSong = allSongs.map(song => {
            if(song.id === id) {
                return {
                    ...song,
                    downvote: song.downvote + 1
                }
            }
            return song
        })
        setSongs(foundSong)
    }

    // handling Lyrcs
    const showLyrics = (id) => {
        const findSong = allSongs.filter(item => item.id === id)
        console.log(findSong);
    }

    // handling Lyrcs
    const songStyle = (id) => {
        const findSong = allSongs.map(item => {
            if (item.id !== id) {
                console.log(id);
                console.log(item.id);
            }
            return item
        })
        console.log(findSong);
    }

    return (
        <Context.Provider value={{
            allSongs,
            setSongs, 
            handleFavoriteSong, 
            cartSong, 
            setCart,
            addToCart, 
            removeFromCart,           
            clickUpvote,
            clickDownVote,
            showLyrics,
            songStyle,
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
