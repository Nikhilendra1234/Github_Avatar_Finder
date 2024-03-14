import './searchbox.css'
// import { useEffect, useState } from "react"
import useDebounce from '../debounce/UseDebounce';

function SearchBox({updateUsername}){
    

    const debouncedCallback = useDebounce((e) => updateUsername(e.target.value));
    
    return(
        <div className='header'>
        <div className="heading"><h1>Github Avatar Finder</h1></div>  
        <div>
        <input type="text"  
        onChange={debouncedCallback} 
        placeholder='Enter UserName...'
        />
        </div>    
        </div>
    )
}
export default SearchBox