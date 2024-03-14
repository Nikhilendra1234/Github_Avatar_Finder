import { useEffect, useState } from "react"
import SearchBox from "../searchbox/SearchBox.jsx"
import axios from "axios";
// import Loading from "../loader/Loading.jsx";
import Avatar from "../avatars/Avatars.jsx";
function AvatarContainer(){

    const[username,setUsername]=useState("");
    const[isLoading,setIsLoading]=useState(false);

  

    
      
    return(
        <>
        <SearchBox  updateUsername={setUsername}/>
         {(!username)?"":<Avatar  key={username} username={username}/>}
        </>
    )
}
export default AvatarContainer