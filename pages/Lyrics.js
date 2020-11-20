import React, { useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../ContextProvider'

function Lyrics(song) {
    const {allSongs, showLyrics} = useContext(Context)
    const { id } = useParams()
    const songLyrics = allSongs.filter(i => i.id === Number(id))
    
    return (
        <>  
            {songLyrics.map((song, index) => 
                <div className='lyrics-card' key={song.title}>
                    <Link to='/'><span>←</span></Link>
                    <h2>{song.title}: <span>{song.singer}</span></h2>
                    <div className='lyrics'>
                        <p>{song.lyrics[0]}</p>
                        <p>{song.lyrics[1]}</p>
                        <p>{song.lyrics[2]}</p>
                        <p>{song.lyrics[3]}</p>
                        <p>{song.lyrics[4]}</p>
                        <p>{song.lyrics[5]}</p>
                        <p>{song.lyrics[6]}</p>
                        <p>{song.lyrics[7]}</p>
                    </div>
                </div>
            )}  
        </>
    )
}

export default Lyrics
