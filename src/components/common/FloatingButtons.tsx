import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-4">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/18572375946"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      {/* Call Button */}
      <a
        href="tel:+18572375946"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition-transform hover:scale-110 active:scale-95 md:hidden"
        aria-label="Call Now"
      >
        <Phone className="h-7 w-7" />
      </a>

      {/* Booking Sticky CTA (Mobile Only) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t bg-white p-2 shadow-2xl md:hidden">
        <Button
          className="w-full bg-purple-600 py-6 text-lg font-bold hover:bg-purple-700"
          asChild
        >
          <Link to="/booking">
            <Calendar className="mr-2 h-6 w-6" />
            BOOK NOW
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default FloatingButtons;