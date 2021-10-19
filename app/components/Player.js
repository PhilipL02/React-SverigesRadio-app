import React, {useState, useEffect, useRef} from 'react';
import { IoPause, IoPlay } from 'react-icons/io5';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';

export default function Player({channel, episode}) {

    const [value, setValue] = useState(30);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(()=>{
        audioRef.current.volume = value/100;
    },[value])

    const [listenurl, setListenurl] = useState("");
    const [play, setPlay] = useState(true);
    const [mute, setMute] = useState(false);

    const audioRef = useRef();

    useEffect(()=>{
        if(channel) setListenurl(channel.liveaudio.url);
        if(episode) setListenurl(episode.listenpodfile.url);
        setPlay(true);
        setMute(true);
    },[channel, episode])

    useEffect(()=>{
        if(!play) audioRef.current.play();
        if(play) audioRef.current.pause();
    },[play])

    useEffect(()=>{
        audioRef.current.muted = !audioRef.current.muted;
    },[mute])

    return (
        <>
            <audio id="player" ref={audioRef} src={listenurl}></audio>
    
            <div className='playerDiv'>
                <div className='play_pause' onClick={()=>{setPlay(!play)}}>{play ? <IoPlay/> : <IoPause/>}</div>
                <Box className='volumeBox' sx={{ width: 200 }}>
                    <Stack className='volumeStack' spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        {mute ? <VolumeDown onClick={event=>(setMute(false))} /> : <VolumeOffIcon onClick={event=>(setMute(true))} />}
                        {mute ? <Slider aria-label="Volume" value={value} onChange={handleChange} /> : <Slider aria-label="Volume" value={0} onChange={handleChange} />}
                        <VolumeUp />
                    </Stack>
                </Box>
            </div>
        </>
    )

}
