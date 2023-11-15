import { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link to="/" className="logo-home">
      Sepsig
    </Link>
  );
}

function Header() {
  return (
    <div>
      <h1>Your vitals are safe with us.</h1>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer">© 2023 Sepsig. All rights reserved.</div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <Logo />
      <Header />
      <Footer />
    </>
  );
}

export default Home;
