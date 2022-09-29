import React from "react";

import MenuComponent from "./Components/MenuBar";
import WelcomeSlide from "./Components/WelcomeSlide";
import ProjectSlide from "./Components/ProjectSlide";
import TeamSlide from "./Components/TeamSlide";
import Footer from "./Components/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
        <MenuComponent />

        <WelcomeSlide />
        <ProjectSlide />
        <TeamSlide />

        <Footer />

        {/* <div style={{height: "500px"}}></div> */}

        {/* <div className="container"></div> */}
    </div>
  );
}

export default App;
