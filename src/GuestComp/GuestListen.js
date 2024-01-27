import React from "react";
import { useState, useEffect, useRef } from "react";
import "./GuestListen.css";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import MusicCard from "../musiccard/MusicCard";
function GuestListen() {
  const musicList = [
    { title: "Song 1", artist: "Artist 1", imageUrl: "url1" },
    { title: "Song 2", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 3", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 4", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 5", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 6", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 7", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 8", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 9", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 10", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 11", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 12", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 13", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 14", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 15", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 16", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 17", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 18", artist: "Artist 2", imageUrl: "url2" },
    { title: "Song 19", artist: "Artist 2", imageUrl: "url2" },
  ];

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
          <div className="la-con">
            <p>User</p>
            <a href="#">Recommended Songs</a>
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

export default GuestListen;
