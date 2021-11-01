import React, { useState, useEffect, useLayoutEffect } from "react";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Info from "./components/Info/Info";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/Partners/Partners";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import DisplayAds from "./hikw.png";
import useWindowDimensions from "./components/WindowDimension/useWindowDimensions";
function App() {
  const { width } = useWindowDimensions();
  const [mobileWidth, setMobilewidth] = useState(false);

  useEffect(() => {
    if (width <= 1024 || width <= 700) {
      setMobilewidth(true);
    } else {
      setMobilewidth(false);
    }
  }, [width]);
  return (
    <div>
      <Navbar style={{ width: "100vw" }} mobileWidth={mobileWidth} />
      <Banner style={{ width: "100vw" }} mobileWidth={mobileWidth} />
      {mobileWidth && (
        <img
          style={{
            width: "100%",
            height: "160px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
          src={DisplayAds}
          alt=""
        />
      )}

      <Scoreboard style={{ width: "100%" }} mobileWidth={mobileWidth} />
      <Partners mobileWidth={mobileWidth} />
      <Info mobileWidth={mobileWidth} />
      <Footer mobileWidth={mobileWidth} />
    </div>
  );
}

export default App;
