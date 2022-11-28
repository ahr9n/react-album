import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={classes["logo"]}>
        <Link to="/photos">React Album</Link>
      </div>
    </header>
  );
};

export default Header;
