import React from 'react'

const Search = (props) => {
    return(
        

        <div>
            <label htmlFor="find">Find Countries: </label>
            <input id="find" type="text" onChange={props.handleFilter}></input>
        </div>

    )
}


export default Search