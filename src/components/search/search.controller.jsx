import React from 'react';
import './search.controller.css';

const Search = (props) => {
    return <input type="search" className='search' onChange={event => props.monsterSearch(event.target.value)} placeholder="which monster?" />;
}

export default Search;