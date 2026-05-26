const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-foreground/10">
      <div className="container-wide py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs uppercase tracking-[0.22em] text-foreground/55">
        <p>© {year} Harrison Bottomley</p>
        <div className="flex gap-6">
          <a href="https://github.com/harrisonspurs" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
          <a href="https://instagram.com/harrison4_11" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Instagram</a>
          <a href="mailto:harrison11bottomley@gmail.com" className="hover:text-foreground transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
