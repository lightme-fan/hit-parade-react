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
    
    function showButtonButton() {		
		if(cartSong.length >  0) {
			return <button onClick={buying}>{buyBtnText}</button>
		} else {
			return <p>You have no song to buy</p>
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
                <p>Total:</p>
            </div>
        </>
    )
}
// CartItem.propTypes = {
//     item: PropTypes.shape({
//         url: PropTypes.string.isRequired
//     })

export default Cart
