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
      className={`h-screen w-full overflow-x-hidden overflow-y-scroll scroll-smooth
        bg-light-gray`}
    >
      <Header />
      <Main />
      <img
        className="h-[500px] w-full rotate-180 object-cover text-dark-blue lg:object-fill"
        src={"/assets/wavesOpacity.svg"}
        alt="wave opacity svg"
      />
      <About />
      <img
        className="h-[200px] w-full"
        src={"/assets/tilt.svg"}
        alt="tilt svg"
      />
      <br />
      <br />
      <Experience />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <img
        className="h-[200px] w-full rotate-180"
        src={"/assets/tilt.svg"}
        alt="tilt flipped svg"
      />
      <div className="h-[500px] bg-light-blue"></div>
      <Skills />
      <br />
      <br />
      <Contact />
    </main>
  );
}
