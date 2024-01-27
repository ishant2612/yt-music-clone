import React from "react";
import { useState } from "react";
// import Header from "../components/Header";
// import Sidebar from "./Sidebar";
// import Music from "./Music";
import GuestHeader from "../GuestComp/GuestHeader";
import Guestmusic from "./GuestMusic";
import "./GuestHome.css";
function GuestHome() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  console.log("GuestHome", isSidebarOpen);

  return (
    <div className="all">
      <GuestHeader
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Guestmusic
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="background">
        <img src="/ytbackground.png" />
      </div>
    </div>
  );
}

export default GuestHome;
