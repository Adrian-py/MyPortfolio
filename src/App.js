import { useEffect, useState } from "react";

import Header from "./components/Header.js";
import Landing from "./components/Landing.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer";
import Decoration from "./components/Decoration";

import "./styling/css/style.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.screen.width <= 414);

  const handleSceenResize = () => {
    const currentlyMobile = window.screen.width <= 414;
    if (currentlyMobile !== isMobile) setIsMobile(currentlyMobile);
  };

  useEffect(() => {
    window.addEventListener("resize", handleSceenResize);

    return () => {
      window.removeEventListener("resize", handleSceenResize);
    };
  });

  return (
    <div className="App">
      <Header isMobile={isMobile} />
      <main className="main">
        <Landing />
        <About />
        <Contact />
      </main>
      <Footer />
      <Decoration />
    </div>
  );
}

export default App;
