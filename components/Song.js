import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Context } from '../ContextProvider'
import { Link } from 'react-router-dom'

function Song({song}) {
    const [ isLiked, setLike ] = useState(false)    
    const {
        allSongs,
        handleFavoriteSong, 
        cartSong, 
        addToCart, 
        removeFromCart,
        clickUpvote,
        clickDownVote,
        showLyrics,
    } = useContext(Context)

    const toggleLikedSong = () => {
        if (song.isLiked) {
            return <div onClick={() => handleFavoriteSong(song.id)}>💓</div>
        } else {
            return <div onClick={() => handleFavoriteSong(song.id)} className = 'ri-heart-line favorite'></div>
        }
    }

    const cartIcon = () => {
        const inCart = cartSong.some(item => item.id === song.id)
        if (inCart) {
            return <i onClick={() => removeFromCart(song.id)} className="ri-shopping-cart-fill ri-fw ri-1x"></i>
        } else {
            return <i onClick={() => addToCart(song)} className="ri-shopping-cart-line ri-fw ri-1x"></i>
        }
    }

    return (
        <li className='song--detail'>
            {toggleLikedSong()}
            <h3>{song.title}<br/> <small>{song.singer}</small></h3>
            <div><span className='count' onClick={() => clickUpvote(song.id)}>↑</span>  <span>{song.upvote}</span></div>
            <div><span className='count' onClick={() => clickDownVote(song.id)}>↓</span>  <span>{song.downvote}</span></div>
            {cartIcon()}
            <Link to={`/${song.id}`}><button className='more'>...</button></Link>
        </li>
    )
}

Song.propTypes ={
    songs: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        singer: PropTypes.string,
        lyrics: PropTypes.string
    })
}
export default Song
