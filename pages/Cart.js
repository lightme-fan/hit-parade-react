import React, { useContext, useState } from 'react'
import { Context } from '../ContextProvider'
import CartPage from '../components/CartPage'

function Cart() {
    const [buyBtnText, setButtonText] = useState('Buy')
    const {cartSong, setCart} = useContext(Context)

    function  buying() {
		setButtonText('Buying...')
		setTimeout(() => {
            setButtonText('Buy')
			emptyCart()
		}, 3000);
    }
    
    const filteredSong = cartSong.filter(song => song.id)
    const total = (filteredSong.length * 1000).toLocaleString();
    
    function showButtonButton() {		
		if(cartSong.length >  0) {
			return (
                <>
                    <button onClick={buying}>{buyBtnText}</button>
                    <p>Total: {total} ar</p>
                </>
            )
		} else {
			return <p className='no-song'>You have no song to buy</p>
		}
    }

    function emptyCart() {
		setCart([])
    }

    return (
        <>
            {cartSong.map(song => 
                <CartPage key={song.id} {...song}/>
            )}
            <div className='buy'>
                {showButtonButton()}                              
            </div>
        </>
    )
}

export default Cart
