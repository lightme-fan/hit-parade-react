import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import PopularSongs from '../pages/PopularSongs'
import Styles from '../pages/Styles'
import Add from '../pages/Add'
import Cart from '../pages/Cart'
import Lyrics from '../pages/Lyrics'
import SongStyle from './SongStyle'


function App() {
    return (
        <article className='container'>
            <Header/>
            <Switch>
                <Route exact path='/'><PopularSongs/></Route>
                <Route path='/song/:id'><Lyrics/></Route>
                <Route exact path='/styles'><Styles/></Route>
                <Route path='/styles/:style'><SongStyle/></Route>
                <Route path='/add'><Add/></Route>
                <Route path='/cart'><Cart/></Route>
            </Switch>
        </article>
    )
}

export default App