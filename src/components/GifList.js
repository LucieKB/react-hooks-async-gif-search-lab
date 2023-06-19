import React from "react";

function GifList({gifs}){
    

const gifToDisplay = gifs.map((gif)=><li key={gif.url}>
    <img src={gif.url} alt="should B a gif"/></li>)

    return(
        <div>
            <ul>
{gifToDisplay}
            </ul>
        </div>
    )
}

export default GifList;