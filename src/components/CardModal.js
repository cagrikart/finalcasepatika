import React from "react";
import { Modal } from "@mui/material";
import myImage from "./ghost-star-wars-rebels.jpg";

const CardModal = ({ item, open, onClose }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          background: "black",
        }}
      >
        <img src={myImage} width={350} style={{ borderRadius: "20px" }} alt="" />
        <hr style={{ border: "1px solid #C0C0C0 ",width:"50px"  }} />
        <div style={{ color: "white" }}>
          <h2>{item.model}</h2>
          <p>
            <span style={{ fontWeight: "bolder" }}>Model</span> :
            <span style={{ color: "#c0c0c0" }}> {item.model}</span>
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Hyperdrive Rating</span> :{" "}
            <span style={{ color: "#c0c0c0" }}>{item.hyperdrive_rating} </span>
            {item.hyperdrive_rating}
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Passengers</span> :{" "}
            <span style={{ color: "#c0c0c0" }}> {item.passengers}</span>
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Max Atmosphering Speed</span>{" "}
            :
            <span style={{ color: "#c0c0c0" }}>
              {item.max_atmosphering_speed}
            </span>
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Manufacturer</span> :{" "}
            <span style={{ color: "#c0c0c0" }}> {item.manufacturer}</span>
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Crew</span> :{" "}
            <span style={{ color: "#c0c0c0" }}> {item.crew}</span>
            
          </p>
          <p>
            <span style={{ fontWeight: "bolder" }}>Cargo Capacity</span> :{" "}
            <span style={{ color: "#c0c0c0" }}> {item.cargo_capacity}</span>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default CardModal;
