import React from "react";
import { useState, useEffect, useRef } from "react";
import "./ListenAgain.css";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import MusicCard from "../musiccard/MusicCard";
import { UserAuth } from "../context/AuthContext";
function ListenAgain() {
  const { user } = UserAuth();
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    const fetchMusicList = async () => {
      try {
        const response = await fetch("http://localhost:3001/recommend"); // Assuming your API is served at "/recommend" endpoint
        const data = await response.json();
        console.log(data);
        setMusicList(data.result);
      } catch (error) {
        console.error("Error fetching music list:", error);
      }
    };

    fetchMusicList();
  }, []);

  const dynamicRef = useRef(null);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 5 });
  const [cardWidth, setCardWidth] = useState(0);

  const handleNextClick = () => {
    const newStart = Math.min(visibleRange.start + 6, musicList.length - 6);
    const newEnd = newStart + 5;
    setVisibleRange({ start: newStart, end: newEnd });
  };

  const handlePrevClick = () => {
    const newStart = Math.max(visibleRange.start - 6, 0);
    const newEnd = newStart + 5;
    setVisibleRange({ start: newStart, end: newEnd });
  };

  useEffect(() => {
    const updateCardWidth = () => {
      if (dynamicRef.current) {
        const containerWidth = dynamicRef.current.offsetWidth;
        setCardWidth(containerWidth / 6);
      }
    };

    updateCardWidth();
    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);
  const isNextDisabled = visibleRange.end >= musicList.length - 1;
  const isPrevDisabled = visibleRange.start <= 0;
  return (
    <div className="listenagain">
      <div className="music-con">
        <div className="intro">
          <div className="profile">
            <img src={user.photoURL} />
          </div>
          <div className="la-con">
            <p>{user.displayName}</p>
            <a href="#">Listen again</a>
          </div>
        </div>
        <div className="cons">
          <button>More</button>
          <div className="sidebtn">
            <button onClick={handlePrevClick} disabled={isPrevDisabled}>
              <KeyboardArrowLeftRoundedIcon style={{ fontSize: "30px" }} />
            </button>
            <button onClick={handleNextClick} disabled={isNextDisabled}>
              <KeyboardArrowRightRoundedIcon style={{ fontSize: "30px" }} />
            </button>
          </div>
        </div>
      </div>
      <div className="dynamic" ref={dynamicRef}>
        <div
          className="card-container"
          style={{
            transform: `translateX(-${visibleRange.start * cardWidth}px)`,
            transition: "transform 500ms ease-out",
            display: "flex",
          }}
        >
          {musicList.map((music, index) => (
            <MusicCard key={index} index={index} width={cardWidth} {...music} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListenAgain;
