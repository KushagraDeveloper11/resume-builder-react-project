import React from "react";

import NavBar from './components/NavBar/NavBar';
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Tips from "./components/ATSTips/ATSTips";
import Footer from "./components/Footer/Footer"

import "./App.css";

function App() {
  return (
    <div className="App">
      {<NavBar />}
      <section id="header" className="section">
      {<Header />}
      </section>
      <section id="resumeBuilder" className="section">
        {<Body />}
      </section>
      <section id="preview" className="section">
        {<Tips/>}
      </section>
      <section id="footer" className="section">
        {<Footer/>}
      </section>
      
    </div>
  );
}

export default App;