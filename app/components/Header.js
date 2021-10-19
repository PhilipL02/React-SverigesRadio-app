import React, {useContext} from 'react';
import SearchDropdown from './SearchDropdown';
import Context from '../Context';

export default function Header() {

    const {channels, selectChannel, selectSearched, search, setSearch, setShowMoreSearchResults, favorites, showSearched} = useContext(Context);

    function showChannel(channel){
        selectChannel(channel)
    }
    return (
        <header>
            <div className='headerDiv'>
                <img onClick={event=>(showChannel(""),selectSearched(""),setShowMoreSearchResults(false))} className='SRImg' src='https://irismedia.se/wp-content/uploads/sr.png'></img>
                <div className='headerButtons'>
                    <div className="dropdown">
                        <button className="dropbtn">Kanaler</button>
                        <div className="dropdown-content">
                            {channels.map(c=>{
                                return(
                                    <div className='menuChannel' key={c.id}>
                                        <img width='40px' src={c.image}></img>
                                        <a onClick={event=>(showChannel(c), selectSearched(""))}>{c.name}</a>
                                    </div>
                                )  
                            })}
                        </div>
                    </div>
                </div>
                <div className='search'>
                    <input onChange={event=>(setSearch(event.target.value))} type='text' name='search' placeholder="Sök efter program"/>
                    {search ? <SearchDropdown/> : ""}
                </div>
                <div className="dropdown2">
                    <button className="dropbtn2">Dina favoriter</button>
                    <div className="dropdown-content2">
                        {favorites ? favorites.map(f=>{
                            return(
                                <div className='menuFavorites' key={f.id} onClick={event=>(selectSearched(f), selectChannel(""))}>
                                    <img src={f.imageurl}></img>
                                    <a>{f.title.length<31 ? f.title : f.title.substring(0, 30).trim() + "..."}</a>
                                </div>
                            )  
                        }) : ""}
                    </div>
                </div>
            </div>
        </header>
    )
}
