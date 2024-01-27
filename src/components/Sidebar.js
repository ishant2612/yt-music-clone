import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

function Sidebar({ isOpen }) {
  const [scrolling, setScrolling] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sidebarstyle = scrolling
    ? {
        backgroundColor: "black",
        border: "1px solid rgba(249, 249, 249, 0.1)",
        borderStyle: "none solid none none",
        zIndex: "-1",
      }
    : {};
  console.log("Sidebar", isOpen);
  return (
    <div
      className={`wrapper ${isOpen ? "open" : "closed"}`}
      style={sidebarstyle}
    >
      <button className="home">
        <HomeIcon style={{ color: "white", fontSize: "3.6vh" }} />
        <p>Home</p>
      </button>
      <button className="explore">
        <ExploreIcon
          style={{
            color: "black",
            backgroundColor: "white",
            borderRadius: "50%",
            fontSize: "3vh",
          }}
        />
        <p>Explore</p>
      </button>
      <button className="lib">
        <LibraryMusicIcon style={{ color: "white", fontSize: "3.4vh" }} />
        <p>Library</p>
      </button>
      <button className="upgrade">
        <SubscriptionsIcon style={{ color: "white" }} />
        <p>Upgrade</p>
      </button>
      <div className="addbtn">
        <button>
          <div className="plus">+</div>
          <div className="add">New playlist</div>
        </button>
      </div>
      {/* {<Music isOpen={isOpen} />} */}
    </div>
  );
}

export default Sidebar;
