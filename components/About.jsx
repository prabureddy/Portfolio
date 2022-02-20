import React from "react";
import Image from "next/image";
import CSS from "../styles/About.module.css";
import cl from "classnames";
import PROFILE_PIC from "../public/images/me.jpg";

const About = () => {
  return (
    <section>
      <div className={cl(CSS.container)}>
        <div className={cl(CSS.meta)}>
          <h3>Bhargava Prabu Reddy.</h3>
          <div className={cl(CSS["profile-picture"])}>
            <Image
              layout="fill"
              src={PROFILE_PIC}
              alt="Bhargava Prabu Reddy"
            />
            <span className={cl(CSS["ring-container"])} />
          </div>
        </div>
        <h1 className="text-6xl font-bold leading-relaxed tracking-wide">
          I am a Software enthusiast.
        </h1>
        <p>
          Hi, I’m Prabu. I live in sunny India 🇮🇳 and specialized in building
          web applications using JavaScipt. I have built softwares that helps
          people in their day-to-day life. Currently, I’m focused on building
          accessible, hybrid work model at{" "}
          <a
            className={cl("underline-effect")}
            href="https://www.workinsync.io/"
            rel="noreferrer nofollow"
            target="_blank"
          >
            WorkInSync
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default About;
