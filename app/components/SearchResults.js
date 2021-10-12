import React, {useContext} from 'react'

import Context from '../Context'

export default function SearchResults() {

    const {search, setSearch} = useContext(Context)

    return (
        <div className='searchResultsMore'>
            <input type='text' placeholder='Search' value={search} onChange={event=>(setSearch(event.target.value))}/>
        </div>
    )
}
