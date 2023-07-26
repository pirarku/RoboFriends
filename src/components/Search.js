import React from "react";


const Search = ({onSearch}) => {
    return(
        <input 
        className='pa2 mt1s mb3 bg-lightest-blue br4' 
        type="text" 
        placeholder="Search your Friend here!"
        onChange={onSearch}
        />
    )
}


export default Search;
