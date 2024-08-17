import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
// import Service from "./Service";
import Data from "./Data";

import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      {/* <Service /> */}
      <Data />
      <Footer />
    </div>
  );
};

export default App;
