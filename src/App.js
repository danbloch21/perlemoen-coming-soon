import React from "react";
import logo001 from "./logo001.png";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo001} className="app-logo" alt="logo" />
        <h1>PERLEMOEN RESTAURANT</h1>
        <h2 className="app-subheader">HATCHING SOON...</h2>
        <h4 className="app-email-address">
          <a href="mailto: bookings@perlemoenrestaurant.com">
            BOOKINGS@PERLEMOENRESTAURANT.COM
          </a>
        </h4>

        <h4 className="app-phone-number">+27 79 314 8658</h4>
      </header>
    </div>
  );
}

export default App;
