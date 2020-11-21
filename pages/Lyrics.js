import React, { useState, useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../ContextProvider'

function Lyrics(song) {
    const {allSongs, showLyrics} = useContext(Context)
    const { id } = useParams()
    const songLyrics = allSongs.filter(i => i.id === Number(id))
    const aSong = allSongs.find(i => i.id === Number(id))
    console.log({ aSong });
    // console.log({song?.title});

    return (
        <>  
            {songLyrics.map((song, index) => 
                <div className='lyrics-card' key={song.title}>
                    <Link to='/'><span>←</span></Link>
                    <h2>{song.title}: <span>{song.singer}</span></h2>
                    <div className='lyrics'>
                        <pre>{song.lyrics[0]}</pre>
                        <pre>{song.lyrics[1]}</pre>
                        <pre>{song.lyrics[2]}</pre>
                        <pre>{song.lyrics[3]}</pre>
                        <pre>{song.lyrics[4]}</pre>
                        <pre>{song.lyrics[5]}</pre>
                        <pre>{song.lyrics[6]}</pre>
                        <pre>{song.lyrics[7]}</pre>
                    </div>
                </div>
            )}  
        </>
    )
}

export default Lyrics
