import React, { useContext } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

function Styles({allSongs}) {
    return (
        <>
            {allSongs.map(song =>
                <div className='song--style-btn'  key={song.id}>
                    <Link to={`/styles/${song.style}`}><button className='song--style'>{song.style}</button><br/></Link>
                </div>
            )}
        </>
    )
}

export default connect((state) => ({allSongs: state.allSongs}))(Styles)
