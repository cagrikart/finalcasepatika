import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography } from "@mui/material";
import myImage from "../images/ghost-star-wars-rebels.jpg";

const CardDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const selectedStarship = state?.selectedStarship;

  if (!selectedStarship) {
    return null;
  }

  const {
    name,
    model,
    hyperdrive_rating,
    passengers,
    max_atmosphering_speed,
    manufacturer,
    crew,
    cargo_capacity,
  } = selectedStarship;

  return (
    <>
      <Card
        style={{
          borderRadius: "20px",
          backgroundImage:{myImage},
          background:"none"
        }}
      >
        <CardContent>
          <img
            src={myImage}
            height="200"
            width="250"
            style={{ objectFit: "cover" ,  borderRadius: "20px",marginBottom:"10px"}}
            alt={name}
            srcset=""
          />
          <Typography
            style={{ color: "#F5F5F5" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {name}
          </Typography>
          <Typography
            style={{ color: "#C0C0C0" }}
            variant="body2"
            color="text.secondary"
          >
            <span style={{ fontWeight: "bolder" }}>Model</span> : {model}
            <br />
            <span style={{ fontWeight: "bolder" }}>
              Hyperdrive Rating
            </span> : {hyperdrive_rating}
            <br />
            <span style={{ fontWeight: "bolder" }}>Passengers</span> :{" "}
            {passengers}
            <br />
            <span style={{ fontWeight: "bolder" }}>Manufacturer</span> :{" "}
            {manufacturer}
            <br />
            <span style={{ fontWeight: "bolder" }}>Crew</span> : {crew}
            <br />
            <span style={{ fontWeight: "bolder" }}>
              Max Atmosphering Speed
            </span>{" "}
            : {max_atmosphering_speed}
            <br />
            <span style={{ fontWeight: "bolder" }}>Cargo Capacity</span> :{" "}
            {cargo_capacity}
          </Typography>
          <button
            style={{
              marginTop: "10px",
              backgroundColor: "#2c2e34",
              border: "1px solid white",
              borderRadius: "20px",
              color: "white",
              padding: "10px 20px ",
            }}
            onClick={() => navigate("/")}
          >
            Search Card
          </button>
        </CardContent>
      </Card>
    </>
  );
};

export default CardDetails;
