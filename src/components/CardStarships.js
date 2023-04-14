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
import ReactPaginate from "react-paginate";
import CardModal from "./CardModal";

const CardStarships = ({ starships }) => {
  console.log("card", starships);

  const [searchTerm, setSearchTerm] = useState("");
  const [show, setShow] = useState(false);
  const [selectedStarship, setSelectedStarship] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredStarships = starships.filter(
    (starship) =>
      starship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      starship.model.toLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  const handleCardClick = (starship) => {
    setSelectedStarship(starship);
  };

  const handleCloseModal = () => {
    setSelectedStarship(null);
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
          >
            <CardActionArea
              onClick={() => {
                handleCardClick(starship);
                setShow(true);
              }}
            >
              <img
                src={myImage}
                height="200"
                width="250"
                style={{ float: "left", objectFit: "cover" }}
                alt={starship.name}
                srcset=""
              />
              <CardContent style={{paddingTop:"10%"}}>
                <Typography style={{color:"#F5F5F5"}} gutterBottom variant="h5" component="div">
                  {starship.name}
                </Typography>
                <Typography   style={{color:"#C0C0C0"}}  variant="body2" color="text.secondary">
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
        {selectedStarship && (
          <CardModal
            item={selectedStarship}
            open={show}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
};

export default CardStarships;
