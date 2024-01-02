import React from "react";
import { Link } from "react-router-dom";
import { navbarTr } from "../../data/Data";

const Nav = () => {
  const data = navbarTr;

  return (
    <div className="main-menu text-center">
      <nav>
        <ul className="main-menu__list">
          {data.map((item, index) => {
            return (
              <li>
                <Link to={item.slug}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
