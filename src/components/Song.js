import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { addToCart, downvoteSong, handleFavoriteSong, removeFromCart, upvoteSong } from '../redux/actions'

function Song({song, showLyrics}) {
    const [ isHovered, setHover ] = useState(false)  
    const cartSong = useSelector(state => state.cartItem)
    const dispatch = useDispatch() 

    const handleMouseEnter = () => {
        setHover(true)
    }

    const handleMouseLeave = () => {
        setHover(false)
    }

    const toggleLikedSong = () => {
        if (song.isLiked) {
            return <i onClick={() => dispatch(handleFavoriteSong(song.id))} className = 'ri-heart-fill favorite'></i>
        } else {
            return <i onClick={() => dispatch(handleFavoriteSong(song.id))} className = 'ri-heart-line favorite'></i>
        }
    }

    const toggleCartIcon = () => {
        const inCart = cartSong.some(item => item.id === song.id)
        if (inCart) {
            return <i onClick={() => dispatch(removeFromCart(song.id))} className="ri-shopping-cart-fill ri-fw ri-1x cart"></i>
        } else {
            return <i onClick={() => dispatch(addToCart(song))} className="ri-shopping-cart-line ri-fw ri-1x cart"></i>
        }
    }

    return (
        <li className='song--detail'>
            <div 
                onMouseEnter = { handleMouseEnter }
                onMouseLeave = { handleMouseLeave }
            >
                {toggleLikedSong()}
            </div>
            <h3>{song.title}<br/> <small>{song.singer}</small></h3>
            <div><span className='count' onClick={() => dispatch(upvoteSong(song.id))}>↑</span>  <span>{song.upvote}</span></div>
            <div><span className='count' onClick={() => dispatch(downvoteSong(song.id))}>↓</span>  <span>{song.downvote}</span></div>
            {toggleCartIcon()}
            <Link to={`/song/${song.id}`}>●●●</Link>
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