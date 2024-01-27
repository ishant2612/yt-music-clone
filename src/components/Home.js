import React from "react";
import { useState } from "react";
import Header from "../components/Header";
// import Sidebar from "./Sidebar";
import Music from "./Music";
import "./Home.css";
function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  console.log("Home", isSidebarOpen);

  return (
    <div className="all">
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <Music
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="background">
        <img src="/ytbackground.png" />
      </div>
    </div>
  );
}

export default Home;
