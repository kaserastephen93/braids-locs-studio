import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scissors, Sparkles, UserCheck, Timer } from "lucide-react";

const services = [
  {
    title: "Knotless Braids",
    description: "Lightweight, natural-looking braids that reduce tension on the scalp.",
    price: "From $180",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/service-braids-0efc3915-1776026558928.webp",
    link: "/services#braids"
  },
  {
    title: "Loc Maintenance",
    description: "Professional retwist, repair, and styling for all loc types including sisterlocks.",
    price: "From $120",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/service-locs-1b1c27d4-1776026558697.webp",
    link: "/services#locs"
  },
  {
    title: "Organic Scalp Care",
    description: "Revitalizing treatments using our signature organic oils and detox blends.",
    price: "From $65",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/service-scalp-care-4a279def-1776026559012.webp",
    link: "/services#care"
  }
];

const ServicesPreview = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">Elite Hair Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Discover our range of professional hair services designed to protect, nurture, and elevate your natural beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <span className="rounded bg-purple-600 px-3 py-1 text-sm font-bold">
                    {service.price}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="mb-3 text-2xl font-bold text-slate-900">{service.title}</h3>
                <p className="mb-6 text-slate-600">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center font-bold text-purple-600 hover:text-purple-700"
                >
                  View Details <Scissors className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center rounded-full border-2 border-purple-600 px-8 py-3 text-lg font-bold text-purple-600 transition-colors hover:bg-purple-600 hover:text-white"
          >
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;