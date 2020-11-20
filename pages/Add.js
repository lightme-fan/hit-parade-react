import React, { useContext } from 'react'
import { Context } from '../ContextProvider'

function Add() {
    const {allSong} = useContext(Context)
    function handleInput(e) {
        console.log(e.target.value);
    }

    function handleClick(e) {
        console.log(e.target.value);
    }
    return (
        <div className='add--form'>
            <h2>Add a new Song</h2>
            <div className='add--song'>
                <fieldset className='fieldset'>
                    <input type='text' name='title' placeholder='Title' onChange={handleInput}/>
                    <input type='text' name='artist' placeholder='Artist' onChange={handleInput}/>
                    <input type='text' name='price' placeholder='Price' onChange={handleInput}/>
                    <textarea type='text' row='5' name='lyrics' placeholder='Lyrics'/>
                    <button onClick={handleClick}>Add</button>
                </fieldset>
            </div>
        </div>
    )
}

export default Add
