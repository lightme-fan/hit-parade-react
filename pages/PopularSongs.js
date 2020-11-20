import React, { useContext } from 'react'
import Song from '../components/Song';
import {Context} from '../ContextProvider'

function PopularSongs() {
    const { allSongs } = useContext(Context)
    
    const mapped = allSongs.map(song => 
        <Song key={song.id} song={song} />
    )

    console.log(mapped);
    return (
        <ul className='song'>
            {mapped}
        </ul>
    )
}

export default PopularSongs