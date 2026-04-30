import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div className={`min-h-screen bg-background grain transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}>
        <Header />
        <main className="relative z-10">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Services />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
