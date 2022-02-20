import About from "../components/About";
import Header from "../components/Header";
import CSS from "../styles/Index.module.css";
import cl from "classnames";

export default function Home() {
  return (
    <div className={cl(CSS.container)}>
      <div className={cl(CSS["layout"])}>
        <Header />
        <main className={cl(CSS.content)}>
          <About />
        </main>
      </div>
    </div>
  );
}
