import React,{useEffect, useState, useContext} from 'react';

import Player from './Player';
import Context from '../Context';

export default function Channel() {

    const {channel} = useContext(Context);

    console.log(channel)

    let color = channel.color

    return (
        <div className = 'main' style={{boxShadow: `4px 6px 20px 0px #${channel.color}`}}>
            <div className = 'header' style={{backgroundColor: `#${channel.color}`}}>
                <div className = 'imgBox'><img src={channel.image}/></div>
            </div>
            <div className = 'innerMain'>
                <div className='tagline'><p>{channel.tagline}</p></div>
            </div>
            <Player channel={channel}/>
        </div>
    )
    {/*<h1>{channel.name}</h1>
            <div className='about'>
                <h2>Om {channel.name}</h2>
                <p>{channel.tagline}</p>
            </div>
            <img src={channel.image}/>
            <div className='audioDiv'>
                <audio controls autoPlay>
                    <source src={channel.liveaudio.url} type="audio/mpeg"/>
                </audio>
    </div>*/}
}
