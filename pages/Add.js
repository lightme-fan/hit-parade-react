import React from 'react'

function Add() {
    return (
        <form className='add--form'>
            <h2>Add a new Song</h2>
            <div className='add--song'>
                <fieldset className='fieldset'>
                    <input type='text' name='title' placeholder='Title'/>
                    <input type='text' name='artist' placeholder='Artist'/>
                    <input type='text' name='price' placeholder='Price'/>
                    <textarea type='text' row='5' name='lyrics' placeholder='Lyrics'/>
                    <button>Add</button>
                </fieldset>
            </div>
        </form>
    )
}

export default Add
