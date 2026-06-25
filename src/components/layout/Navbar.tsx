import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Calendar, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Offers", path: "/offers" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-slate-900/95 py-2 shadow-lg backdrop-blur-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-purple-500 bg-white shadow-lg transition-transform hover:scale-105">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/attachments/176895b1-f89a-4fe0-811c-90aa65760d48/1776028418820_inbound2925486177753809408.jpg" 
                alt="Lovet's Locs and Braids Logo" 
                className="h-full w-full object-cover"
              />
            </div>
            <span className="text-xl font-bold tracking-tight text-white md:text-2xl">
              Lovet's <span className="text-purple-400">Locs & Braids</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-purple-400",
                  location.pathname === link.path
                    ? "text-purple-400"
                    : "text-white/90"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
                asChild
              >
                <Link to="/booking">
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Now
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center space-x-4 lg:hidden">
             <Link to="/products" className="text-white">
                <ShoppingCart className="h-6 w-6" />
             </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="mt-4 flex flex-col space-y-4 pb-6 lg:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-lg font-medium transition-colors",
                  location.pathname === link.path
                    ? "text-purple-400"
                    : "text-white/90"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
              <Button
                className="w-full bg-purple-600 text-white hover:bg-purple-700"
                asChild
              >
                <Link to="/booking" onClick={() => setIsOpen(false)}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full border-white text-white hover:bg-white hover:text-slate-900"
                asChild
              >
                <a href="tel:+18572375946">
                  <Phone className="mr-2 h-5 w-5" />
                  Call +1 857-237-5946
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;