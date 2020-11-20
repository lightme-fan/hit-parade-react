import React, { useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../ContextProvider'

function Lyrics(song) {
    const {allSongs, showLyrics} = useContext(Context)
    const { id } = useParams()
    const newSong = allSongs.filter(i => i.id)
    console.log(newSong);
    return (
        <>  
            {/* {newSong.map((song, index) => 
                <div className='lyrics-card'>
                    <Link to='/'><span>←</span></Link>
                    <h2>{song.title}: <span>{song.singer}</span></h2>
                    <p className='lyrics'>{song.lyrics[index]}</p>
                </div>
            )} */}
            Lyrics
        </>
    )
}

export default Lyrics
