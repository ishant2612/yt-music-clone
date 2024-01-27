import React from "react";
import "./common.css";
const MusicCard = ({ title, artist, imageUrl, index }) => {
  return (
    <div className="music-card" index={index}>
      <div className="music-img">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="music-info">
        <h3>{title}</h3>
        <p>{artist}</p>
      </div>
    </div>
  );
};

export default MusicCard;
