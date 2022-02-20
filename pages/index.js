import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Header from "../components/Header";
import CSS from "../styles/Index.module.css";
import cl from "classnames";

export default function Home() {
  return (
    <div className={cl(CSS.container)}>
      <section>
        <Header />
        <main>
          <About />
        </main>
      </section>
    </div>
  );
}
