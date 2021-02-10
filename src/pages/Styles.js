import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { Context } from '../ContextProvider'

function Styles() {
    const {allSongs, songStyle} = useContext(Context)
    return (
        <>
            {allSongs.map(song =>
                <div className='song--style-btn'  key={song.id}>
                    <Link to={`/styles/${song.style}`}><button className='song--style'>{song.style}</button><br/></Link>
                </div>
            )}
        </>
    )
}

export default Styles
