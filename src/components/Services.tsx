import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section bg-card">
      <div className="container-narrow">
        <h2 className="mb-8">I can build you a website</h2>
        
        <div className="space-y-6 text-lg text-muted-foreground mb-10">
          <p>
            If you need a clean, functional website, I can help. I work with 
            small businesses, personal brands, and anyone who needs a 
            straightforward online presence without the complexity.
          </p>
          
          <p>
            What you'll get:
          </p>
          
          <ul className="space-y-3 list-none">
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">—</span>
              <span>A website that actually works, on all devices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">—</span>
              <span>Clean design that doesn't distract from your content</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">—</span>
              <span>Fast load times and reliable hosting setup</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent mt-1">—</span>
              <span>Clear communication throughout the process</span>
            </li>
          </ul>
          
          <p>
            I'm a student, which means competitive pricing without compromising on quality. 
            I take on a limited number of projects at a time to make sure each one gets 
            the attention it deserves.
          </p>
        </div>
        
        <Button 
          size="lg"
          onClick={scrollToContact}
          className="group"
        >
          Get in touch
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </section>
  );
};

export default Services;
