import React, { useContext } from 'react'
import Song from '../components/Song';
import {Context} from '../ContextProvider'

function PopularSongs() {
    const { allSongs } = useContext(Context)
    
    const mapped = allSongs
    .sort((a,b) => {
        const sortUpvotes = a.upvote - b.upvote
        const sortDownvotes = a.downvote - b.downvote
        return sortDownvotes - sortUpvotes
    })
    .map(song => 
        <Song key={song.title} song={song} />
    )

    return (
        <ul className='song'>
            {mapped}
        </ul>
    )
}

export default PopularSongs