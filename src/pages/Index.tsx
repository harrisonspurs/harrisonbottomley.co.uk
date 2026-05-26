import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main className="relative z-10">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
