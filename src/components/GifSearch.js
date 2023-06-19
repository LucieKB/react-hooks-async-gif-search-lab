import React, {useState} from "react";

function GifSearch({onSubmitSearch}){
const [search, setSearch]=useState("")


function handleOnSubmit(e){
    e.preventDefault();
    onSubmitSearch(search)
}

function handleOnChange(e){
    setSearch(e.target.value)
}

    return(
        <form onSubmit={handleOnSubmit}>
            <input
            type="text"
            placeholder="🔎"
            value={search}
            onChange={handleOnChange}/>
            <button>Submit my Search!</button>
        </form>
    )
}

export default GifSearch