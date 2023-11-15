import { useState } from "react";
import "./Visualization.css";
import { BarGraphIcon, SettingsIcon, UserIcon } from "../../icons/";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="logo-type">
      Sepsig
    </Link>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer">© 2023 Sepsig. All rights reserved.</div>
    </footer>
  );
}

function Visualization() {
  return (
    <>
      <Logo />
      <Link to="/visualize">
        <BarGraphIcon className="icon-bar-graph" />
      </Link>
      <SettingsIcon className="icon-settings" />
      <UserIcon className="icon-user" />
      <Footer />
    </>
  );
}

export default Visualization;
