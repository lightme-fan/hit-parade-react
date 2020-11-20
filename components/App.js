import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './Header'
import PopularSongs from '../pages/PopularSongs'
import Styles from '../pages/Styles'
import Add from '../pages/Add'
import Cart from '../pages/Cart'
import Lyrics from '../pages/Lyrics'


function App() {
    return (
        <article className='container'>
            <Header/>
            <Switch>
                <Route exact path='/'><PopularSongs/></Route>
                <Route path='/styles'><Styles/></Route>
                <Route path='/add'><Add/></Route>
                <Route path='/cart'><Cart/></Route>
                <Route path='/lyrics'><Lyrics/></Route>
            </Switch>
        </article>
    )
}

export default App