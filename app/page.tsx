// Components
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main
      className={`absolute h-screen w-full overflow-x-hidden overflow-y-scroll scroll-smooth bg-light-gray `}
    >
      <Header />
      <div className="w-full px-[175px]">
        <Main />
      </div>
      <img
        className="h-[500px] w-full rotate-180 text-dark-blue"
        src={"/assets/wavesOpacity.svg"}
      />
      <About />
      <br />
      <br />
      <Experience />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <Skills />
      <br />
      <br />
      <Contact />
    </main>
  );
}
