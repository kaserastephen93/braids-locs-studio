import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/common/FloatingButtons";
import SEO from "@/components/common/SEO";
import ScrollToTop from "@/components/common/ScrollToTop";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Products from "@/pages/Products";
import Gallery from "@/pages/Gallery";
import Testimonials from "@/pages/Testimonials";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import Offers from "@/pages/Offers";
import Booking from "@/pages/Booking";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-background font-sans text-foreground">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/gebeya.webp" element={<Navigate to="/404" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster position="top-center" richColors />
      </div>
    </Router>
  );
}

export default App;