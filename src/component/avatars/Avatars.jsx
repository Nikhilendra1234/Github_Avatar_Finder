import { useEffect, useState } from "react"
import Loading from '../loader/Loading.jsx'
import axios from "axios";
import './avatars.css'

function Avatar({key,username}){

    const[avatar,setAvatar]=useState({});
    const[isLoading,setIsLoading]=useState(false);

    async function downloadAvatar(){
        try {
            setIsLoading(true);
            const response=await axios.get(`https://api.github.com/users/${username}`);

             console.log(response.data);
            let rawdata=response.data;
            let res={
                avatar_url:rawdata.avatar_url,
                followers:rawdata.followers,
                email:rawdata.email,
                github_url:rawdata.html_url,
                loginid:rawdata.login,
                name:rawdata.name ,
                reposno:rawdata.public_repos,
                createdat:rawdata.created_at  ,
                // repos:rawdata.repos_url
       
            }
            setAvatar(res);
            setIsLoading(false)
        } catch (error) {
            console.log("data fetched unsuccesful");
        }
    
    }
  useEffect(()=>{
    downloadAvatar();
  },[username]);

    return(
        <>
        {(isLoading)?<Loading />:
        
        <div className="avatar">
            <img src={avatar.avatar_url} alt="" />
            <p>Name:{avatar.name}</p>
            <p>Email id:{avatar.email}</p>
            <p>LoginId:{avatar.loginid}</p>
            <p>Repositories:{avatar.reposno}</p>
            <p>follwers no:{avatar.followers}</p>
            <p>created at:{avatar.createdat}</p>
            {/* <p><a href={avatar.repos}>visit Repos</a></p> */}
            <p><a href={avatar.github_url}>visit github</a></p>
        </div> }
           
        </>
    )
}
export default Avatar