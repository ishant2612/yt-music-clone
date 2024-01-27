// import React from "react";
// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import Home from "./components/Home";
// import "./App.css";
// import YTMusicComponent from "./musiccard/YTMusicComponent";
// import GuestHome from "./GuestComp/GuestHome";
// import { AuthContextProvider, UserAuth } from "./context/AuthContext";
// // import { UserAuth } from "./context/AuthContext";
// function App() {
//   const { user } = UserAuth();
//   return (
//     <div>
//       <AuthContextProvider>
//         {user?.displayName ? <Home /> : <GuestHome />}

//         {/* <Home /> */}
//         {/* <Header /> */}
//         {/* <Sidebar /> */}
//         {/* <YTMusicComponent /> */}
//       </AuthContextProvider>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import "./App.css";
import YTMusicComponent from "./musiccard/YTMusicComponent";
import GuestHome from "./GuestComp/GuestHome";
import { AuthContextProvider, UserAuth } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <AppContent />
    </AuthContextProvider>
  );
}

function AppContent() {
  const { user } = UserAuth();

  return (
    <div>
      {user?.displayName ? <Home /> : <GuestHome />}
      {/* Other components */}
    </div>
  );
}

export default App;
