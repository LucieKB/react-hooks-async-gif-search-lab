import React, {useState, useEffect} from "react";
import GifList from "./GifList"
import GifSearch from "./GifSearch"

function GifListContainer(){
const [gifs, setGifs]=useState([])
const [searchValue, setSearchValue]=useState("climber")


useEffect(()=>{
    fetch(`https://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=J9bmUpNIhsSWvawvqfGgdC7zqf3Dde9e&rating=g`)
    .then((r)=>r.json())
    .then(({data})=>{
        const gifImage = data.map((gif)=>({url:gif.images.original.url}));
     setGifs(gifImage.slice(0,3))})
    }, [searchValue]);


console.log(gifs)
console.log(searchValue)


return(
    <div>
         <GifSearch  onSubmitSearch={setSearchValue}/>
         <GifList gifs={gifs}/>
       
    </div>
)
}

export default GifListContainer;