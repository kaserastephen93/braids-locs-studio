import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/hero-image-2241c04e-1776026558761.webp"
          alt="Professional hair braiding and locs at Lovet's"
          className="h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="container relative z-10 mx-auto flex h-full items-center px-4 pt-20 md:px-6">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 flex items-center space-x-2 text-purple-400"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold tracking-wider text-white">
              BOSTON'S TOP-RATED HAIR STYLIST
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl lg:text-8xl"
          >
            Embrace Your <span className="text-purple-500">Natural</span> Beauty.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8 max-w-xl text-lg text-slate-200 md:text-xl"
          >
            Elite braiding, professional locs, and organic scalp care in the heart of West Roxbury. 
            Step into confidence with styles that last.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <Button
              size="lg"
              className="group bg-purple-600 py-8 text-xl font-bold text-white hover:bg-purple-700"
              asChild
            >
              <Link to="/booking">
                Book Your Transformation
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white py-8 text-xl font-bold text-white hover:bg-white hover:text-slate-900"
              asChild
            >
              <Link to="/services">View Our Services</Link>
            </Button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/30">
          <div className="mt-2 h-2 w-1 rounded-full bg-white/50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;