import React from "react";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="title">
        <Link style={{ textDecoration: 'none' }} to="/">
        <h1>Challenges</h1>
        <h2>By Kitton</h2>
        </Link>
      </div>
      <div className="content">
        <Outlet />
      </div>
      <div className="footer">
        <p>&copy; Copyright {new Date().getFullYear()} Kittonn</p>
      </div>
    </div>
  );
};

export default Home;
