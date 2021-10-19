import React,{useContext} from 'react';

import Player from './Player';
import Context from '../Context';

export default function Channel() {

    const {channel} = useContext(Context);

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
}
