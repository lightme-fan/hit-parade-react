import React, {useRef, useState, useEffect} from 'react'

function useHover() {
    const [ isHovered, setHover] = useState(false)   
    const ref = useRef(null)

    const hoverEnter = () => {
        setHover(true)
    }

    const hoverLeave = () => {
        setHover(false)
    }

    useEffect(() => {
        const currentRef = ref.current
        currentRef.addEventListener('mouseenter', hoverEnter);
        currentRef.addEventListener('mouseout', hoverLeave);        

        return () => {
            currentRef.removeEventListener('mouseenter', hoverEnter);
            currentRef.removeEventListener('mouseout', hoverLeave);
        }
    }, [])

    return [isHovered, ref]
}

export default useHover
