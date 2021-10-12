import React, {useContext} from 'react'
import Context from '../Context';

import { IoHeartOutline, IoHeart } from 'react-icons/io5';

import Player from './Player';

export default function Episode() {

    const {searched} = useContext(Context);

    console.log(searched)

    return (
        <div className = 'mainEpisode'>
            <div className = 'header'>
                <div className = 'imgBox'><img src={searched.imageurl}/></div>
                <h1>{searched.title}</h1>
                <div className='favHeartBox'><IoHeartOutline className='favHeart'/></div>
            </div>
            {searched.listenpodfile ? <Player episode={searched}/> : <div>Ingen ljudfil</div>}
        </div>
    )
}
