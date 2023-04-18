import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Card,
  Button,
  TextField,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import myImage from "./ghost-star-wars-rebels.jpg";
import { useNavigate } from "react-router-dom";
import CardDetails from "./CardDetails";

const CardStarships = ({ starships }) => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStarships = starships.filter(
    (starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      starship.model.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
      starship.hyperdrive_rating
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
  );

  const handleCardClick = (selectedStarship) => {
    navigate("/carddetails", { state: { selectedStarship } });
  };

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <label style={{ color: "white", marginRight: "20px" }}>
          Name/Model
        </label>
        <input
          style={{
            border: "2px solid white",
            width: "200px",
            height: "25px",
            borderRadius: "20px",
          }}
          placeholder="Search by name"
          variant="outlined"
          onChange={handleSearch}
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {filteredStarships.map((starship) => (
          <Card
            key={starship.name}
            style={{
              margin: "20px",
              display: "inline-flex",
              borderRadius: "20px",
              backgroundColor: "#2c2e34",
            }}
            onClick={() => handleCardClick(starship)}
          >
            <CardActionArea>
              <img
                src={myImage}
                height="200"
                width="250"
                style={{ float: "left", paddingL:"20px",borderRadius:"20px", objectFit: "cover" }}
                alt={starship.name}
                srcset=""
              />
              <CardContent style={{ paddingTop: "10%" }}>
                <Typography
                  style={{ color: "#F5F5F5" }}
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {starship.name}
                </Typography>
                <Typography
                  style={{ color: "#C0C0C0" }}
                  variant="body2"
                  color="text.secondary"
                >
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
