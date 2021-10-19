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
                    <div className="dropdownChannels">
                        <button className="dropChannelsBtn">Kanaler</button>
                        <div className="dropdownChannelsContent">
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
                <div className="dropdownFavorites">
                    <button className="dropFavoritesBtn">Dina favoriter</button>
                    <div className="dropdownFavoritesContent">
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
