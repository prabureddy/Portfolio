import { useWindowScroll } from "react-use";
import cl from "classnames";
import About from "../components/About";
import Header from "../components/Header";
import CSS from "../styles/Index.module.css";

export default function Home() {
  return (
    <div className={cl(CSS.container)}>
      <div className={cl(CSS["grid-style"])}>
        <Header />
        <div className={cl(CSS["layout"])}>
          <main className={cl(CSS.content)}>
            <About />
          </main>
        </div>
      </div>
    </div>
  );
}
