import React from "react";
import { Link } from "react-router-dom";
import { navbar } from "../../data/Data";
import { useAutoContext } from "../../Context/Context";

const Nav = () => {
  const { lang } = useAutoContext();



  const langData = navbar.find((item) => item.lang === lang).data;

  console.log("navLang", langData);

  return (
    <div className="main-menu text-center">
      <nav>
        <ul className="main-menu__list">
          {langData.map((item, index) => {
            return (
              <li key={index}>
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
