import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center section">
      <div className="container-narrow stagger-children">
        <p className="text-muted-foreground text-sm md:text-base mb-4 uppercase tracking-wide">
          Harrison Bottomley
        </p>
        
        <h1 className="mb-6">
          Creative Computing student building websites and connected systems.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          I work across web development, creative coding, and physical computing. 
          Currently studying at the University of Salford, UK.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="group"
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection("services")}
            className="group"
          >
            Build Me a Website
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
