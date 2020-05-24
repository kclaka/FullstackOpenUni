import React from 'react'


const Filter = (props) => {
    return(
        <div>
        <label htmlFor="search">filter shown with:</label> 
        <input id="search" type="text" value={props.filter} onChange={props.onFilter}></input>
        </div>
)}

export default Filter