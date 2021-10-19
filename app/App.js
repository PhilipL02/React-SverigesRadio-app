import React, {useState, useEffect} from 'react';

import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import Context from './Context';

export default function App() {

    const [channels, setChannel] = useState([]);
    const [channel, selectChannel] = useState('');
    const [search, setSearch] = useState("");
    const [searched, selectSearched] = useState('');
    const [showMoreSearchResults, setShowMoreSearchResults] = useState(false)
    const [favorites, setFavorites] = useState([]);

    useEffect(async ()=>{
        let response = await fetch('https://api.sr.se/api/v2/channels/?format=json');
        let data = await response.json();
        let channels = data.channels;
        setChannel(channels);
        setFavorites(JSON.parse(localStorage.getItem("favorites")))
    },[]);

    return (
        <Context.Provider value={{channels, channel, selectChannel, search, setSearch, searched, selectSearched, showMoreSearchResults, setShowMoreSearchResults, favorites, setFavorites}}>
            <Router>
                <Header/>
                <Switch>
                    <Main/>
                </Switch>
                <Footer/>
            </Router>
        </Context.Provider>
    )
}
