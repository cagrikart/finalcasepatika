import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./CardStarships";
import CardStarships from "./CardStarships";

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
      {starships.map(() => (
        <CardStarships  starships={starships} />
      ))}
    </div>
  );
};

export default CardList;
