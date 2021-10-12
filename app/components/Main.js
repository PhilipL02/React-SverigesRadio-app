import React, {useState, useContext} from 'react';

import Context from '../Context';

import Channel from './Channel';
import Episode from './Episode';
import NewsContainer from './NewsContainer';
import ActiveNews from './ActiveNews';
import SearchResults from './SearchResults';

export default function Main() {

    const {channel, searched, showNews, activeNews, search, showMoreSearchResults} = useContext(Context);

    const [hidden, setHidden] = useState(false);

    if(channel)
    return (
        <main>
            <Channel/>
        </main>
    )

    if(searched)
    return (
        <main>
            <Episode/>
        </main>
    )

    if(showNews)
    return (
        <main>
            <NewsContainer/>
        </main>
    )

    if(showMoreSearchResults)
    return (
        <main>
            <SearchResults/>
        </main>
    )

    return (
        <main>

        </main>
    )
}
