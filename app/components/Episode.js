import React, {useContext, useState, useEffect} from 'react'
import Context from '../Context';

import { IoHeartOutline, IoHeart, IoConstructOutline } from 'react-icons/io5';

import Player from './Player';

export default function Episode() {

    const {searched} = useContext(Context);

    const [favorites, setFavorites] = useState([]);

    function addFavorite(){
        let end = false
        if(favorites){
            favorites.forEach((f)=>{
                console.log(f.id)
                console.log(searched.id)
                if(f.id===searched.id) end = true
            })
        }
        if(end) return
        let f = {id: searched.id};
        console.log(f)
        let arr = [f, ...favorites];
        console.log(arr)
        setFavorites(arr);
    }

    useEffect(() => {
        if(JSON.parse(localStorage.getItem("favorites")))
        setFavorites(JSON.parse(localStorage.getItem("favorites")));
    }, [])

    useEffect(()=>{
        localStorage.setItem("favorites", JSON.stringify(favorites))
    },[favorites])

    console.log(searched)

    return (
        <div className = 'mainEpisode'>
            <div className = 'header'>
                <div className = 'imgBox'><img src={searched.imageurl}/></div>
                <h1>{searched.title}</h1>
                <div className='favHeartBox'><IoHeartOutline className='favHeart' onClick={event=>(addFavorite())}/></div>
            </div>
            {searched.listenpodfile ? <Player episode={searched}/> : <div>Ingen ljudfil</div>}
        </div>
    )
}
