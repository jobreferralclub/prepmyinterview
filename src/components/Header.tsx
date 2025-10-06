import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Sessions", path: "/sessions" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top bar with contact info */}
      <div className="border-b bg-accent-soft">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-end gap-6 text-sm">
            <a
              href="tel:+14252097368"
              className="flex items-center gap-2 text-accent-soft-foreground hover:text-primary transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">+1 (425) 209-7368</span>
            </a>
            <a
              href="mailto:raysaranya@gmail.com"
              className="flex items-center gap-2 text-accent-soft-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">raysaranya@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={logo} alt="PrepMyInterview Logo" className="h-16 w-16 object-contain transition-transform group-hover:scale-110" />
            <span className="text-xl font-bold text-foreground">PrepMyInterview</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/book">
              <Button size="lg" className="shadow-medium">
                Book Now - $300
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background animate-fade-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/book" onClick={() => setMobileMenuOpen(false)}>
              <Button size="lg" className="w-full">
                Book Now - $300
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
