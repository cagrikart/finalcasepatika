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
      {filteredStarships.map((starship) => (
        <Card style={{marginTop:"50px", borderRadius:"20px", backgroundColor:"red", display:"inline-flex",marginRight:"100px"}}  sx={{ maxWidth: 345 }} key={starship.name}>
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
    </>
  );
};

export default CardStarships;
