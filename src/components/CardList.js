import axios from "axios";
import React, { useEffect, useState } from "react";

import CardStarships from "./CardStarships";
import titleImage from "../images/titleImage.png";

const CardList = () => {
  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState(null);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=1`)
      .then((res) => {
        setStarships(res.data.results);
        setNextPage(res.data.next);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleLoadMore = () => {
    if (nextPage !== null) {
      axios
        .get(nextPage)
        .then((res) => {
          setStarships([...starships, ...res.data.results]);
          setNextPage(res.data.next);
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <div>
        <img src={titleImage} alt="" width="300px" height="150px" />
      </div>
      <CardStarships starships={starships} />
      {nextPage !== null && (
        <div style={{ textAlign: "center", marginTop: "20px" ,}}>
          <button
            style={{
              backgroundColor: "#2c2e34",
              border: "1px solid white",
              borderRadius: "20px",
              color: "white",
              padding: "10px 20px ",
              marginBottom:"20px"
            }}
            onClick={handleLoadMore}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CardList;
