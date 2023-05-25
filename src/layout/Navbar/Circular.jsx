import { useState } from "react";
import classNames from "classnames";
import "./circular.scss";

const CircularNavbar = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={classNames("menu", { active: show })}>
      <button
        className="nav-toggle"
        type="button"
        aria-label="toggle menu"
        onClick={() => setShow((preState) => !preState)}
      >
        {/*  this span just for the three dividers in the hamburger button */}
        <span aria-hidden="true" />
      </button>

      <nav className="nav">
        <ul>
          <li>element one</li>
          <li>element two</li>
          <li>element three</li>
          <li>element four</li>
        </ul>
      </nav>
    </div>
  );
};

export default CircularNavbar;
