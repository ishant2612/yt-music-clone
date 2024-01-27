import React from "react";
import { useEffect } from "react";
import "./Music.css";
import ListenAgain from "./ListenAgain";
import Test from "./Test";

function Music({ isSidebarOpen, setIsSidebarOpen }) {
  useEffect(() => {
    console.log("isSidebarOpen has changed:", isSidebarOpen);
  }, [isSidebarOpen]);

  const containerStyle = {
    marginLeft: isSidebarOpen ? "16vw" : "4.7vw",
    width: isSidebarOpen ? "calc(100% - 16vw)" : "calc(100% - 4.7vw)",
  };
  console.log(isSidebarOpen);
  return (
    <div className="container" style={containerStyle}>
      <div className="genre">
        <button className="mtype">Feel good</button>
        <button className="mtype">Romance</button>
        <button className="mtype">Podcasts</button>
        <button className="mtype">Relax</button>
        <button className="mtype">Energise</button>
        <button className="mtype">Party</button>
        <button className="mtype">Commute</button>
        <button className="mtype">Sad</button>
        <button className="mtype">Focus</button>
        <button className="mtype">Work out</button>
        <button className="mtype">Sleep</button>
      </div>
      <ListenAgain />
    </div>
  );
}

export default Music;
