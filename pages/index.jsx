import About from "../components/About";
import Header from "../components/Header";
import CSS from "../styles/Index.module.css";
import cl from "classnames";

export default function Home() {
  return (
    <div className={cl(CSS.container)}>
      <div>
        <Header />
        <main>
          <About />
        </main>
      </div>
    </div>
  );
}
