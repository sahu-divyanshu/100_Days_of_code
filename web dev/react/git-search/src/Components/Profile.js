import React, { useState } from "react";

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMoon} from '@fortawesome/free-solid-svg-icons'
import "./Profile.css";
import GitHub from "../GitHub.png"
const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repo, setRepo] = useState([]);
  const [visible ,setVisible] = useState("hidden") ;

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const profileUrl = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profileUrl.json();
    // console.log(profile);
    const repoUrl = await fetch(profileJson.repos_url);
    const repoJson = await repoUrl.json();
    // console.log(repoJson);
    if (profileJson) {
      setData(profileJson);
      setRepo(repoJson);
      setVisible("visible");

    }
  };
  return (
    <div>
      <img src={GitHub} className= "git-logo" alt=' '/>
      <input type="text" value={username} onChange={onChangeHandler} />
      <button type="submit" onClick={submitHandler}>
        Search 
      </button>
      <FontAwesomeIcon id="icon" onClick={()=>{
        document.body.classList.toggle("dark-theme");
      }} icon={faMoon} />
      <div className="container" style={{visibility:`${visible}`}} >
        <div className="left">
            <img className = "profile-pic"src={data.avatar_url} alt=" "/>
        </div>
        <div className="right">
          <ul>
            <li><h2>Name : {data.name}</h2> </li>   
            <li><h4>User Id : {data.login}</h4></li>
            <li> <h4> Bio : {data.bio}</h4></li>
            <li><h4> Location : {data.location}</h4></li>
            <li><h4> Public Repo : {data.public_repos}</h4></li>
            <li><h4> Followers : {data.followers}</h4></li>
          </ul>
          <button className="btn"><a href={data.html_url}>Visit</a></button>
          


    </div>
    </div>
    <h1>Repositories </h1>
        {repo.map(rep  =>(
          <div>
            
            <p>{rep.full_name}</p>
            
          </div>
        )
        )}
 
      </div>
  );
};

export default Profile;








