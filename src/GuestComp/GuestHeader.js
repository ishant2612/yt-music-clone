import React, { useEffect } from "react";
import "./GuestHeader.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import CastIcon from "@mui/icons-material/Cast";
import { useState } from "react";
// import Sidebar from "./Sidebar";
// import Music from "./Music";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LogoutIcon from "@mui/icons-material/Logout";
import GuestSidebar from "./GuestSidebar";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
function GuestHeader({ isSidebarOpen, setIsSidebarOpen }) {
  const [scrolling, setScrolling] = useState(false);
  const [isClicked, setIsClicked] = useState(true);
  const { googleSignIn, user } = UserAuth();
  // const navi = useNavigate();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   if (user != null) {
  //     navi("/");
  //   }
  // }, [user]);

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
          />
        </div>
        <div className="casts">
          <CastIcon
            className="casti"
            style={{ fontSize: "3vh", opacity: "0.8" }}
          />
          <button className="profilebtns" onClick={handleGoogleSignIn}>
            <p>Sign In</p>
          </button>
        </div>
      </div>
      <div className="dropdown" style={{ display: dropddownvisi }}>
        <div className="username">
          <img src="profile.jpg" alt="profile" />
          <p>Ishant Verma</p>
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
            <button>
              <div className="btnchan">
                <LogoutIcon style={{ color: "rgba(249,249,249,0.3)" }} />
                <p>Sign Out</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      {<GuestSidebar isOpen={isSidebarOpen} />}
    </div>
  );
}

export default GuestHeader;
