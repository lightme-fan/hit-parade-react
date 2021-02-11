import React, { useContext } from 'react'
import { Context } from '../ContextProvider'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

function SongStyle({allSongs}) {
    const { style } = useParams()
    const newSong = allSongs.filter(song => song.style === style)
    console.log(newSong);
    return (
        <>
            <div className='styles'>
                <h2 className='style-heading'>{style}</h2>
                {newSong.map(song =>
                    <div key={song.length+1+song.id} className='card--style'>
                        <h4>{song.title}</h4>
                        <p>{song.singer}</p>
                    </div>
                )}
            </div>

        </>
    )
}

SongStyle.propTypes ={
    songs: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        singer: PropTypes.string,
        lyrics: PropTypes.string
    })
}

export default connect((state) => ({allSongs: state.allSongs}), null)(SongStyle)
