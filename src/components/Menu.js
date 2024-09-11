import React from "react";
import tobjy from "../img/tojby.jpg";

const NavButton = (prop) => {
  const testNavButton = () => {
    console.log(`${prop.title} button pressed`);
  };

  return (
    <div>
      <button className="nav-button" onClick={testNavButton}>
        {prop.title}
      </button>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavButton title="About Me" />
        </li>
        <li>
          <NavButton title="Motorcycle Maintenance Manager" />
        </li>
        <li>
          <NavButton title="Tinkering" />
        </li>
      </ul>
    </nav>
  );
};

const Menu = () => {
  return (
    <div className="menu">
      <h1 className="menu-header"> Henry Våg</h1>
      <img
        className="menu-background"
        src={require("../img/tojby_cropped 1.jpg")}
        alt="beach"
      ></img>
      <NavBar />
    </div>
  );
};

export { Menu, NavButton, NavBar };
