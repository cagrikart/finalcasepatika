import axios from "axios";
import React, { useEffect, useState } from "react";

const SearhBar = () => {
  const [search,setSearch] = useState("")
  const [datas, setDatas] = useState([])

  useEffect(()=> {
    axios.get("https://swapi.dev/api/starships/")
    .then((res) => {
      console.log("Result => ",res.data.results)
      setDatas(res.data.results)
    })
  })



  const searchData = (evt)=>{
    if(evt.key ==="Enter"){
      
    }

  }
  return (

    <div>

      <input type="text" name="name" placeholder="search movies" />

    </div>
  );
};

export default SearhBar;
