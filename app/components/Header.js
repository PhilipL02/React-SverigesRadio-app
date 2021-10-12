import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import SearchDropdown from './SearchDropdown';
import Context from '../Context';

export default function Header() {

    const {channels, selectChannel, selectSearched, setShowNews, showNews, search, setSearch, setShowMoreSearchResults} = useContext(Context);

    function showChannel(channel){
        selectChannel(channel)
    }
    return (
        <header>
            <div className='headerDiv'>
            <Link to="/"><img onClick={event=>(showChannel(""),selectSearched(""), setShowNews(false),setShowMoreSearchResults(false))} className='SRImg' src='https://irismedia.se/wp-content/uploads/sr.png'></img></Link>
                <div className='headerButtons'>
                <div className="dropdown">
                    <button className="dropbtn">Kanaler</button>
                    <div className="dropdown-content">
                        {channels.map(c=>{
                            return(
                                <div className='menuChannel' key={c.id}>
                                    <img width='40px' src={c.image}></img>
                                    <a onClick={event=>(showChannel(c), selectSearched(""), setShowNews(false))}>{c.name}</a>
                                </div>
                            )  
                        })}
                    </div>
                </div>
                    {/*<button onClick={event=>(setShowNews(true), selectSearched(""), showChannel(""))} className="headerButton">Nyheter</button>*/}
                </div>
                <div className='search'>
                <input onChange={event=>(setSearch(event.target.value))} type='text' name='search' placeholder="Sök efter program"/>
                {search ? <SearchDropdown/> : ""}
                </div>
            </div>
        </header>
    )
}
