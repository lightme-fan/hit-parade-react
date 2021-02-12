import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Context } from '../ContextProvider'
import useHover from '../customHooks/useHover'
import { removeFromCart } from '../redux/actions'

function CartPage({title, singer, id, price}) {
    const [isHovered, ref] = useHover()
    const dispatch = useDispatch()
    const deleteClass = isHovered ? 'ri-delete-bin-fill' : 'ri-delete-bin-line'
    
    return (
        <div className='cart--card'>
            <i 
                className={`${deleteClass} delete--song`} 
                ref={ref}
                onClick={()=> dispatch(removeFromCart(id))}
            ></i>
            <h3>{title}<br/> <span>{singer}</span></h3>
            <p>Price: {price} Ar</p>
        </div>
    )
}

export default CartPage
