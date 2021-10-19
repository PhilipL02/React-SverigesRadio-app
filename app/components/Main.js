import React, {useContext} from 'react';

import Context from '../Context';

import Channel from './Channel';
import Episode from './Episode';
import SearchResults from './SearchResults';

export default function Main() {

    const {channel, searched, showMoreSearchResults} = useContext(Context);

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
