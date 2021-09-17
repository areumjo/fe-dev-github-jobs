import React from 'react';

const Search = ( props ) => {

    const { searchInput, setSearchInput } = props;

    const handleChange = e => {
        console.log(e.target.value);
        setSearchInput(e.target.value);
    }

    return (
        <div className="search">
            <form className="search-form">
                <input type="text" onChange={handleChange} value={searchInput} placeholder="Title, companies, expertise or benefits" />
                <button className="search-button">Search</button>
            </form>
        </div>
    )
}

export default Search;