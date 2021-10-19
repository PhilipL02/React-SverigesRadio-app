import React, {useState, useEffect, useContext} from 'react'
import Context from '../Context';

export default function SearchDropdown(){

    const {selectSearched, selectChannel, search, setShowMoreSearchResults, searchResults, setSearchResults} = useContext(Context);

    function showSearched(chosen){
        selectSearched(chosen);
        selectChannel("");
    }

    useEffect(async ()=>{
        let response = await fetch('https://api.sr.se/api/v2/episodes/search/?format=json&size=10&query='+search);
        let data = await response.json();
        let episodes = data.episodes;
        setSearchResults(episodes); 
    },[search]);
    
    function getPublishDate(episode){

            let date = episode.publishdateutc;

            date = date.split('/').join('');
            date = date.split("Date").join('');
            date = date.split('(').join('');
            date = date.split(')').join('');

            let d = parseInt(date);
            let _d = new Date(d);

            let day = _d.getDate();
            if(day<10) day = `0${day}`

            let month = _d.getMonth()+1;
            if(month<10) month = `0${month}`;
        
            let year = _d.getFullYear();
            
            let fullDate = `${year}-${month}-${day}`

            return fullDate;
    }


    return (
        <div className='searchResults'>
            {searchResults.map(res=>{
                return (
                    <div className='searchRes' key={res.id} onClick={event=>(showSearched(res))}>
                        <img src={res.imageurl}/>
                        <div>
                            <a>{res.title.length<31 ? res.title : res.title.substring(0, 30).trim() + "..."}</a>
                            <p>Publicerad: {getPublishDate(res)}</p>
                        </div>
                    </div>
                )
            })}
            {searchResults.length >= 10 ? <div className='showMoreSearchRes' onClick={event=>(setShowMoreSearchResults(true),selectSearched(""),selectChannel(""))}><p>Visa fler sökresultat</p></div> : ""}
        </div>
    )
}
