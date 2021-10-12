import React, {useState, useEffect, useContext} from 'react'

import Context from '../Context';

export default function News({news}) {

    const {setActiveNews, setShowNews} = useContext(Context);

    return (
        <div className='newsDiv' onClick={event=>(setActiveNews(news), setShowNews(false))}>
            <h1>{news.name}</h1>
            <h3>{news.description}</h3>
        </div>
    )
}
