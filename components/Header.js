import React from 'react'
import { Link } from 'react-router-dom'
import flame from '../svg/flame.svg'
import cart from '../svg/cart.svg'
import smile from '../svg/smile.svg'
import heart from '../svg/heart.svg'

function Header() {
    return (
        <header className='header'>
            <h1>Hit Parade</h1>
            <nav>
                <ul className='list'>
                    <li><Link to='/'><img src={flame} alt='Popular song'/> <span>Popular Songs</span></Link></li>
                    <li><Link to='/styles'><img src={heart} alt='Styles'/> Styles</Link></li>
                    <li><Link to='/add'><img src={smile} alt='Add'/> Add</Link></li>
                    <li><Link to='/cart'><img src={cart} alt='Cart'/> Cart</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
