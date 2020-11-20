import React, { useContext } from 'react'
import { Context } from '../ContextProvider'
import useHover from '../useHover'

function CartPage({title, singer, id, price}) {
    const [isHovered, ref] = useHover()
    const { removeFromCart } = useContext(Context)

    const deleteClass = isHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'
    
    return (
        <div className='cart--card'>
            <i 
                className={deleteClass} 
                ref={ref}
                onClick={()=>removeFromCart(id)}
            ></i>
            <h3>{title}<br/> <span>{singer}</span></h3>
            <p>Price: {price} Ar</p>
        </div>
    )
}

export default CartPage
