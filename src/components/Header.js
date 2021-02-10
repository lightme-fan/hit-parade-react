import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import flame from '../../svg/flame.svg'
import cart from '../../svg/cart.svg'
import smile from '../../svg/smile.svg'
import heart from '../../svg/heart.svg'
import { Context } from '../ContextProvider'

function Header() {
    const { allSongs, cartSong} = useContext(Context)
    const findSong = allSongs.filter(song => song.id)
    console.log(findSong);
    const favoriteClassName = allSongs.length > 0 ?
        'ri-heart-fill':
        'ri-heart-line'        

    const cartClassName = cartSong.length > 0 ?
        "ri-shopping-cart-fill ri-fw ri-1x":
        "ri-shopping-cart-line ri-fw ri-1x"

    return (
        <header className='header'>
            <h1>Hit Parade</h1>
            <nav>
                <ul className='list'>
                    <li>
                        <Link to='/'>
                            <img src={flame} alt='Popular song'/> 
                            <span>Popular Songs</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/styles'>
                            <i className={`${favoriteClassName} favorite--style`}></i> Styles
                        </Link>
                    </li>
                    <li>
                        <Link to='/add'><img src={smile} alt='Add'/> Add</Link>
                    </li>
                    <li>
                        <Link to='/cart'>
                            <i className={cartClassName}></i> Cart
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
