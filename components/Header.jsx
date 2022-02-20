import React from "react";
import CSS from "../styles/Header.module.css";
import cl from "classnames";

const navItems = [
  {
    label: "About",
    link: "#",
  },
  {
    label: "Experience",
    link: "#",
  },
  {
    label: "Work",
    link: "#",
  },
  {
    label: "Contact",
    link: "#",
  },
];

const Header = () => {
  return (
    <nav className={cl(CSS.nav)}>
      <div className={cl(CSS.container)}>
        <div className={cl(CSS.logo)} tabIndex="0">
          <a href="#">Logo</a>
        </div>
        <ol className={cl(CSS.pages)}>
          {navItems.map(({ label, link }, i) => (
            <li
              key={i}
              tabIndex="0"
              className={cl(CSS["nav-item"])}
              style={{
                animationDuration: `${(i + 1) * 300}ms`,
              }}
            >
              <a href={link} className={cl(CSS["nav-item-link"])} tabIndex="-1">
                <span className={cl(CSS["counter"])}>{i + 1}.</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Header;
