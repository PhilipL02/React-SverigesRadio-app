import React, {useEffect, useState} from 'react'
import News from './News';

export default function NewsContainer() {

    const [news, setNews] = useState([])

    useEffect(async ()=>{
        let response = await fetch('https://api.sr.se/api/v2/news?format=json');
        let data = await response.json();
        console.log(data.programs);
        setNews(data.programs);
    },[]);
    

    return (
        <div>
            {news.map(n=>{
                return <News key={n.id} news={n} />
            })}
        </div>
    )
}
