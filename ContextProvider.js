import React, { Children, useState } from 'react'
import songs from './songs'

const Context = React.createContext()

function ContextProvider({Children}) {
    const [ allSongs, setSongs ] = useState()

    return (
        <Context.Provider value={{allSongs}}>
            {Children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}
