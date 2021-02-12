import React, { useContext } from 'react'
import { connect } from 'react-redux';
import Song from '../components/Song';
import {Context} from '../ContextProvider'
import { handleFavoriteSong } from '../redux/actions';

function PopularSongs({allSongs}) {
    
    const mapped = allSongs
    .sort((a,b) => {
        const sortUpvotes = a.upvote - b.upvote
        const sortDownvotes = a.downvote - b.downvote
        return sortDownvotes - sortUpvotes
    })
    .map(song => {
        return <Song key={song.title} song={song} {...song}/>
    })

    return (
        <ul className='song'>
            {mapped}
        </ul>
    )
}

const mapStateToProps = (state) => {
    const { allSongs } = state
    return {
        allSongs: allSongs
    }
}

export default connect(mapStateToProps, null)(PopularSongs)