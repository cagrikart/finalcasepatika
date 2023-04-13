import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card,
  Button,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import myImage from "./ghost-star-wars-rebels.jpg";
import ReactPaginate from 'react-paginate';

const CardStarships = ({ starships }) => {
  console.log("card",starships)
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStarships = starships.filter((starship) =>
    starship.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <TextField
          label="Search by name"
          variant="outlined"
          onChange={handleSearch}
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>

      {filteredStarships.map((starship) => (
          <Card key={starship.name}  style={{margin: "20px",  display:"inline-flex", borderRadius:"20px", backgroundColor:"red"}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={myImage}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {starship.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{ fontWeight: "bolder" }}>Model</span> :{" "}
                  {starship.model}
                  <br />
                  <span style={{ fontWeight: "bolder" }}>
                    Hyperdrive Rating
                  </span>{" "}
                  : {starship.hyperdrive_rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
        </div>
    </>
  );
};

export default CardStarships;
