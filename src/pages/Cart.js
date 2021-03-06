import React, { useContext, useState, useEffect } from 'react'
import { connect } from 'react-redux'

import CartPage from '../components/CartPage'
import { addToCart, boughtCart } from '../redux/actions'

function Cart({cartSong, setCart, boughtCart}) {
    const [buyBtnText, setButtonText] = useState('Buy')
    const [ total, setTotal ] = useState(0)
    const [ isBought, setIsBought ] = useState(false)

    function  buying() {
		setButtonText('Buying...')
		setTimeout(() => {
            setButtonText('Buy')
            alert('Thanks for buying. Please pay your purchases! 👍')
            setTimeout(() => {
                setButtonText('Bought cart')
                alert('👍 Enjoy your listening! 👍')
                boughtCart()
                setIsBought(!isBought)
            }, 1500)
		}, 3000);
    }
     
    useEffect(() => {
        const newTotal = cartSong.reduce((total, song) => {
            total += song.price;
            return total
        }, 0)
        setTotal(newTotal)
    }, [cartSong])

    function totalPrice() {
        return cartSong.reduce((total, song) => {
            total += song.price;
            return total
        }, 0)
    }

    function showButtonButton() {		
		if(cartSong.length >  0) {
			return (
                <>
                    <button onClick={buying}>{buyBtnText}</button>
                    <p>Total: {total} ar</p>
                </>
            )
		} else {
			return (
                <>{
                    !isBought ? 
                    <p className='no-song'>You have no song to buy</p> : 
                    <p className='no-song'>You have just bought carts, thank you! Please buy more!</p>
                }</>
            )
		}
    }

    return (
        <>
            {cartSong.map(song => 
                <CartPage key={song.title} {...song}/>
            )}
            <div className='buy'>
                {showButtonButton()}                              
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        cartSong: state.cartItem
    }
}

export default connect(mapStateToProps, {setCart: addToCart, boughtCart: boughtCart})(Cart)
