import React, {useContext, useState, useEffect} from 'react'

import Context from '../Context'

export default function SearchResults() {

    const {search, setSearch} = useContext(Context)

    const [moreSearchResults, setMoreSearchResults] = useState([]);
    const [nextPage, setNextPage] = useState("");
    const [prevPage, setPrevPage] = useState("");

    useEffect(async ()=>{
        getEpisodes('https://api.sr.se/api/v2/episodes/search/?format=json&size=24&query='+search)
    },[search]);

    async function getEpisodes(url){
        let response = await fetch(url);
        let data = await response.json();

        if(data.pagination.nextpage) setNextPage(data.pagination.nextpage);
        else setNextPage("");

        if(data.pagination.previouspage) setPrevPage(data.pagination.previouspage);
        else setPrevPage("");

        let episodes = data.episodes;
        setMoreSearchResults(episodes); 
    }

    async function showNextPage(){
        getEpisodes(nextPage);
    }

    async function showPrevPage(){
        getEpisodes(prevPage);
    }

    return (
        <div className='searchResultsMore'>
            <input type='text' placeholder='Search' value={search} onChange={event=>(setSearch(event.target.value))}/>
            <div style={{display:'flex', flexWrap: 'wrap'}}>
            {moreSearchResults.map(res=>{
                return (
                    <div key={res.id} style={{width:'10.5%', margin:'1%'}}>
                        <img src={res.imageurl} width='100%' />
                        <p>{res.title}</p>
                    </div>
                )
            })}
            </div>
            {prevPage ? <button onClick={event=>(showPrevPage())}>Prev Page</button> : ""}
            {nextPage ? <button onClick={event=>(showNextPage())}>Next Page</button> : ""}
        </div>
    )
}
