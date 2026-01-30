const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border">
      <div className="container-narrow text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Harrison Bottomley. Built with care.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
