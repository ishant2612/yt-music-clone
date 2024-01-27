import React from "react";
import "./common.css";
const MusicCard = ({ author,thumbnail,title,videoId }) => {
  return (
    <div className="music-card" index={videoId}>
      <div className="music-img">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="music-info">
        <h3>{title}</h3>
        <p>{author}</p>
      </div>
    </div>
  );
};

export default MusicCard;
