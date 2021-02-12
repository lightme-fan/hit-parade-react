import React, { useContext, useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { 
    addNewSong, 
    setTitle,
    setSinger,
    setPrice,
    setStyle,
    setLyrics,
 } from '../redux/actions';

function Add({
    addNewSong,
    setTitle,
    setSinger,
    setPrice,
    setStyle,
    setLyrics,
    title,
    singer,
    price,
    style,
    lyrics,
}) {

    function handleSubmit(e) {
        e.preventDefault()
        const newSong = {
            title: title,
            singer: singer,
            style: style,
            isLiked: false,
            id: Date.now(),
            upvote: 0,
            downvote: 0,
            price: price,
            lyrics: lyrics
        }
        addNewSong(newSong)
    }

    return (
        <form className='add--form' onSubmit={handleSubmit}>
            <h2>Add a new Song</h2>
            <div className='add--song'>
                <fieldset className='fieldset'>
                    <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Title'/>
                    <input type='text' name='singer' value={singer} onChange={(e) => setSinger(e.target.value)} placeholder='Artist'/>
                    <input type='text' name='price' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Price' />
                    <select
                        value={style} onChange={(e) => setStyle(e.target.value)}
                        name='style'
                    >
                        <option value="salegy">Salegy</option>
                        <option value="folk">Folk</option>
                        <option value="rap">Rap</option>
                        <option value="reggea">Reggea</option>
                    </select>
                    <textarea type='text' row='5' name='lyrics' placeholder='Lyrics' value={lyrics} onChange={(e) => setLyrics(e.target.value)} />
                    <button>Add</button>
                </fieldset>
            </div>
        </form>
    )
}

function mapStateToProps(state) {
    const {newSong} = state
    console.log(state.allSongs);
    return {
        title: state.newSong.title,
        singer: state.newSong.singer,
        price: state.newSong.price,
        style: state.newSong.style,
        lyrics: state.newSong.lyrics,
        allSongs: state.allSongs
    }
}

const mapDispatchToProps = {
    addNewSong,
    setTitle,
    setSinger,
    setPrice,
    setStyle,
    setLyrics
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)
