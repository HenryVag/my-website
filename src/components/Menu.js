import React from "react";

const NavButton = () => {
  const testNavButton = () => {
    console.log("NavButton pressed");
  };

  return (
    <div>
      <button className="nav-button" onClick={testNavButton}>
        NavBtn
      </button>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavButton />
        </li>
        <li>
          <NavButton />
        </li>
        <li>
          <NavButton />
        </li>
      </ul>
    </nav>
  );
};

const Menu = () => {
  return <div></div>;
};

export { Menu, NavButton, NavBar };
