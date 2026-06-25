import { Link } from "react-router-dom";
import { Home, Phone, Calendar, Search } from "lucide-react";
import { useState } from "react";

const NotFound = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/services?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
      <div className="mb-6 text-8xl font-bold text-purple-600">404</div>
      <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
        Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-lg text-gray-600">
        Oops! The page you're looking for doesn't exist. Let's get you back to 
        beautiful hair. Explore our services or book your next appointment.
      </p>

      {/* Search */}
      <form onSubmit={handleSearch} className="mb-8 flex w-full max-w-md">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search our services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-l-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-900 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            aria-label="Search services"
          />
        </div>
        <button
          type="submit"
          className="rounded-r-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Search
        </button>
      </form>

      {/* CTAs */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:border-purple-500 hover:text-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <Home className="h-5 w-5" />
          Return Home
        </Link>
        <Link
          to="/booking"
          className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          <Calendar className="h-5 w-5" />
          Book Appointment
        </Link>
        <a
          href="tel:+18572375946"
          className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
      </div>
    </div>
  );
};

export default NotFound;
