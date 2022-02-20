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
        <span className={cl(CSS.logo)}>Logo</span>
        <ol className={cl(CSS.pages)}>
          {navItems.map(({ label, link }, i) => (
            <li key={i}>
              <a href={link} className={cl(CSS["nav-item"])} tabIndex={-1}>
                <span>{i + 1}.</span>
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
