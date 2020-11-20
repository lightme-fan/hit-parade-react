import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../ContextProvider'

function Lyrics(song) {
    const [ songlyrics, setLyrics ] = useState([])
    const {allSongs} = useContext(Context)
    
    const showLyrics = allSongs.filter(item => item.id);
    console.log(showLyrics.find(item => item.id !== song.id));
    
    return (
        <>  
            {/* {lyrics &&  */}
                <div className='lyrics-card'>
                    <Link to='/'><span>←</span></Link>
                    {/* <h2>{showLyrics.title}: <span>{showLyrics.singer}</span></h2>
                    <p className='lyrics'>{showLyrics.lyrics}</p> */}
                </div>
            {/* } */}
        </>
    )
}

export default Lyrics
