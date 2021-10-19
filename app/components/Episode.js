import React, {useContext, useState, useEffect} from 'react'
import Context from '../Context';

import { IoHeartOutline, IoHeart } from 'react-icons/io5';

import Player from './Player';

export default function Episode() {

    const {searched, favorites, setFavorites} = useContext(Context);

    const [favorite, setFavorite] = useState(false);

    function addFavorite(){
        let end = false
        let newFavs;
        if(favorites){
            favorites.forEach((f)=>{
                if(f.id === searched.id) end = true
            })
        }
        if(end) return
        if(favorites) newFavs = [searched, ...favorites];
        if(!favorites) newFavs = [searched]
        setFavorites(newFavs);
        localStorage.setItem("favorites", JSON.stringify(newFavs))
        checkFav()
    }

    function removeFavorite(){
        console.log(favorites)
        let newFavs = favorites.filter(f=>f.id!=searched.id)
        console.log(newFavs)
        setFavorites(newFavs);
        localStorage.setItem("favorites", JSON.stringify(newFavs))
        checkFav()
    }

    useEffect(()=>{
        setFavorites(JSON.parse(localStorage.getItem("favorites")));
        checkFav()
    },[searched])
    

    function checkFav(){
        let fav = false
        let favs = (JSON.parse(localStorage.getItem("favorites")));
        if(favs)
        favs.forEach((f)=>{
            if(f.id === searched.id) fav = true;
        })
        if(fav) return setFavorite(true)
        setFavorite(false)
    }
    

    return (
        <div className = 'mainEpisode'>
            <div className = 'header'>
                <div className = 'imgBox'><img src={searched.imageurl}/></div>
                <h1>{searched.title}</h1>
                <div className='favHeartBox'> {favorite ? <IoHeart className='favHeart' onClick={event=>(removeFavorite())}/> : <IoHeartOutline className='favHeart' onClick={event=>(addFavorite())}/> } </div>
            </div>
            {searched.listenpodfile ? <Player episode={searched}/> : <div>Ingen ljudfil</div>}
        </div>
    )
}
