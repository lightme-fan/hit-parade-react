import React, { useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../ContextProvider'

function Lyrics(song) {
    const {allSongs, showLyrics} = useContext(Context)
    const { id } = useParams()
    const newSong = allSongs.filter(i => i.id === song.id)
    console.log(newSong);
    return (
        <>  
            {newSong.map(song => 
                <div className='lyrics-card'>
                    <Link to='/'><span>←</span></Link>
                    <h2>{song.title}: <span>{song.singer}</span></h2>
                    <p className='lyrics'>{song.lyrics}</p>
                </div>
            )}
        </>
    )
}

export default Lyrics
