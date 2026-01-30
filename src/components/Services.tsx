import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Services = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    "A website that actually works, on all devices",
    "Clean design that doesn't distract from your content",
    "Fast load times and reliable hosting setup",
    "Clear communication throughout the process",
  ];

  return (
    <section id="services" className="section relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-accent/90" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }} />
      </div>
      
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              <Sparkles className="h-4 w-4" />
              Services
            </span>
            <h2 className="text-primary-foreground mb-6">
              I can build you a website
            </h2>
            
            <div className="space-y-5 text-primary-foreground/80 mb-8">
              <p className="text-lg">
                If you need a clean, functional website, I can help. I work with 
                small businesses, personal brands, and anyone who needs a 
                straightforward online presence without the complexity.
              </p>
              
              <p>
                I'm a student, which means competitive pricing without compromising on quality. 
                I take on a limited number of projects at a time to make sure each one gets 
                the attention it deserves.
              </p>
            </div>
            
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="group bg-accent hover:bg-accent/90 text-accent-foreground text-base px-8 py-6 rounded-xl"
            >
              Start a conversation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          
          {/* Right content - feature card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-background/10 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8">
              <h3 className="text-primary-foreground text-xl font-semibold mb-6">
                What you'll get
              </h3>
              
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-accent" />
                    </div>
                    <span className="text-primary-foreground/90">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                <p className="text-sm text-primary-foreground/60">
                  Perfect for small businesses, personal brands, or anyone who needs 
                  a professional web presence.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
