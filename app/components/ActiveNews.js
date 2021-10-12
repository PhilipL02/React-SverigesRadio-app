import React, {useContext} from 'react'

import Context from '../Context'

export default function ActiveNews() {

    const {activeNews} = useContext(Context)

    return (
        <div className='mainNews'>
            <div className='header'>
                <div className = 'imgBox'><img src={activeNews.programimage}/></div>
                <h1>{activeNews.name}</h1>
                <p>{activeNews.description}</p>
            </div>
        </div>
    )
}
