import axios from "axios";
import React, { useEffect, useState } from "react";

import CardStarships from "./CardStarships";
import titleImage from "./titleImage.png";

const CardList = () => {
  const [starships, setStarships] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/`)
      .then((res) => {
        setStarships(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <div >
        <img src={titleImage} alt="" width="300px" height="150px" />
      </div>
      <CardStarships starships={starships} />
    </div>
  );
};

export default CardList;
