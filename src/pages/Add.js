import React, { useContext, useState } from 'react'
import { connect } from 'react-redux';
import { Context } from '../ContextProvider'

function Add({allSongs}) {
    const [newSong, setNewSong] = useState({
        title: '',
        singer: '',
        style: '',
        isLiked: false,
        upvote: 0,
        downvote: 0,
        price: 1000,
    })

    function handleInput(e) {
        const { name, value } = e.target;
        setNewSong((prev) => {
            return {
                ...prev,
                [name]: value,
                id: new Date()+value,
            };
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        e.target.reset();
    }

    return (
        <form className='add--form' onSubmit={handleSubmit}>
            <h2>Add a new Song</h2>
            <div className='add--song'>
                <fieldset className='fieldset'>
                    <input type='text' name='title' placeholder='Title' onChange={handleInput} required/>
                    <input type='text' name='singer' placeholder='Artist' onChange={handleInput} required/>
                    <input type='text' name='price' placeholder='Price' onChange={handleInput} required/>
                    <select
                        onChange={handleInput}
                        name='style'
                    >
                        <option value="salegy">Salegy</option>
                        <option value="folk">Folk</option>
                        <option value="rap">Rap</option>
                        <option value="reggea">Reggea</option>
                    </select>
                    <textarea type='text' row='5' name='lyrics' placeholder='Lyrics' onChange={handleInput} required/>
                    <button>Add</button>
                </fieldset>
            </div>
        </form>
    )
}

export default connect((state) => ({allSongs: state.allSongs}), null)(Add)
