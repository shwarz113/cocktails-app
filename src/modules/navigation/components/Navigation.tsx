import React from "react";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";
import { routesByName } from "../../../shared/constants/routes";
import Logo from "../../../assets/images/cocktails-logo.png";
import "./Navigation.scss";

export const Navigation = () => {
  const { pathname } = useLocation();
  const activePage = pathname.substring(1);

  return (
    <nav>
      <Link className={"logoWrapper"} to={"/"}>
        <img src={Logo} alt="cocktails-bar" />
      </Link>
      <ul>
        {Object.entries(routesByName).map(([key, value], index) => (
          <li key={key}>
            <Link
              className={cn("navLink", {
                navLink_selected:
                  activePage === key || (index === 0 && !activePage),
              })}
              to={`/${key}`}
            >
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
