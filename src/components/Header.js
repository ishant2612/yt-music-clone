import React, { useEffect } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CastIcon from "@mui/icons-material/Cast";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Music from "./Music";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LogoutIcon from "@mui/icons-material/Logout";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function Header({ isSidebarOpen, setIsSidebarOpen }) {
  const [scrolling, setScrolling] = useState(false);
  const [isClicked, setIsClicked] = useState(true);
  const [searchText,setSearchText] = useState("");
  const { user, Logout } = UserAuth();
  // const navi = useNavigate();


  const handleSearch = (event) => {
    if (event.key === 'Enter') {
      // Call your function here
      handleEnterKeyPress();
    }
  };

  const handleEnterKeyPress = async () => {
    try {
      // const searchQuery = "salman khan"; // Set your search query here
      const apiURL = `http://localhost:3001/search`;
  
      const response = await fetch(apiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ q: searchText }),
      });
  
      const result = await response.json();
    } catch (error) {
      console.error(error);
    }
    
  };


  const handleSignOut = async () => {
    try {
      await Logout;
      // navi("/guest");
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
      window.removeEventListener("srcoll", handleScroll);
    };
  }, []);

  const dropddownvisi = isClicked ? "none" : "inline";
  const searchetcWidth = isSidebarOpen ? "calc(100% - 16vw)" : "89%";
  const headerSyle = scrolling
    ? {
        backgroundColor: "black",

        border: "1px solid rgba(249, 249, 249, 0.1)",
        borderStyle: "none none solid none",
      }
    : {};
  return (
    <div className="main" style={headerSyle}>
      <div className="logo-icon">
        <button className="icon" onClick={toggleSidebar}>
          <MenuIcon
            className="menu"
            style={{
              fontSize: "5.5vh",
              borderRadius: "50%",
              padding: "1vh 1vh",
            }}
          />
        </button>
        <div className="logo">
          <img src="//music.youtube.com/img/on_platform_logo_dark.svg" />
        </div>
      </div>
      <div className="searchetc" style={{ width: searchetcWidth }}>
        <div className="searchmenu">
          <SearchIcon className="search" style={{ fontSize: "3.6vh" }} />
          <input
            type="search"
            placeholder="Search songs,album,artists,podcasts"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>
        <div className="cast">
          <CastIcon
            className="casti"
            style={{ fontSize: "3vh", opacity: "0.8" }}
          />
          <button className="profilebtn" onClick={handleClick}>
            <img src={user.photoURL} />
          </button>
        </div>
      </div>
      <div className="dropdown" style={{ display: dropddownvisi }}>
        <div className="username">
          <img src={user.photoURL} alt="profile" />
          <p>{user.displayName}</p>
        </div>
        <div className="channelcon">
          <div className="yourchan">
            <button>
              <div className="btnchan">
                <AccountBoxOutlinedIcon
                  style={{ color: "rgba(249,249,249,0.3)" }}
                />
                <p>Your channel</p>
              </div>
            </button>
          </div>
          <div className="yt">
            <button>
              <div className="btnchan">
                <YouTubeIcon style={{ color: "rgba(249,249,249,0.3)" }} />
                <p>Get Music Premium</p>
              </div>
            </button>
          </div>
          <div className="logout">
            <button onClick={handleSignOut}>
              <div className="btnchan">
                <LogoutIcon style={{ color: "rgba(249,249,249,0.3)" }} />
                <p>Sign Out</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      {<Sidebar isOpen={isSidebarOpen} />}
    </div>
  );
}

export default Header;
