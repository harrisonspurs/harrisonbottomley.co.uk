import { Mail, Phone, Github, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section bg-card">
      <div className="container-narrow">
        <h2 className="mb-4">Get in touch</h2>
        <p className="text-lg text-muted-foreground mb-10">
          Whether you need a website, want to collaborate, or just have a question — I'd like to hear from you.
        </p>
        
        <div className="space-y-6">
          <a 
            href="mailto:harrison11bottomley@gmail.com"
            className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group"
          >
            <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
            <span className="text-lg">harrison11bottomley@gmail.com</span>
          </a>
          
          <a 
            href="tel:07877760374"
            className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group"
          >
            <Phone className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
            <span className="text-lg">07877 760374</span>
          </a>
          
          <div className="divider my-8" />
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/harrisonspurs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://instagram.com/harrison4_11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="h-5 w-5" />
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
