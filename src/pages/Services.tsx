import { motion } from "framer-motion";
import { Scissors, Zap, ShieldCheck, Clock, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SEO from "@/components/common/SEO";

const serviceCategories = [
  {
    title: "Braiding Excellence",
    anchor: "braids",
    services: [
      { name: "Knotless Braids", price: "$180+", duration: "4-6 hrs", desc: "Our signature tension-free braids for maximum comfort and natural look." },
      { name: "Box Braids", price: "$150+", duration: "5-7 hrs", desc: "Classic, versatile braids available in various lengths and sizes." },
      { name: "Cornrows", price: "$85+", duration: "2-3 hrs", desc: "Neat, intricate patterns designed to last and protect." },
      { name: "Feed-in Braids", price: "$100+", duration: "3 hrs", desc: "Seamless extensions for a realistic and sleek appearance." }
    ],
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/service-braids-0efc3915-1776026558928.webp"
  },
  {
    title: "Professional Locs",
    anchor: "locs",
    services: [
      { name: "Loc Initiation", price: "$250+", duration: "5 hrs", desc: "Expertly starting your loc journey with precision and care." },
      { name: "Loc Retwist & Style", price: "$120+", duration: "2-3 hrs", desc: "Maintaining your locs with professional palm rolling and styling." },
      { name: "Sisterlocks / Microlocs", price: "Quote", duration: "10+ hrs", desc: "Specialized tiny locs for ultimate versatility and refinement." },
      { name: "Loc Repair", price: "$75+", duration: "1.5 hrs", desc: "Fixing thinning locs or broken sections to maintain integrity." }
    ],
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/service-locs-1b1c27d4-1776026558697.webp"
  },
  {
    title: "Scalp & Health",
    anchor: "care",
    services: [
      { name: "Organic Scalp Detox", price: "$65", duration: "1 hr", desc: "Removing buildup and revitalizing the scalp with organic blends." },
      { name: "Deep Conditioning", price: "$45", duration: "45 min", desc: "Intense moisture treatment for dry, brittle hair." },
      { name: "Hot Oil Treatment", price: "$35", duration: "30 min", desc: "Penetrating hydration using our signature organic hair oil." }
    ],
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/service-scalp-care-4a279def-1776026559012.webp"
  }
];

const Services = () => {
  return (
    <div className="pt-24 bg-white">
      <SEO 
        title="Hair Braiding Services in Boston | Knotless Braids, Locs and Twists"
        description="Explore our professional hair braiding services in West Roxbury, Boston. From knotless braids to loc retwists, we offer the best protective styles in MA."
        url="https://lovetslocsandbraids.com/services"
      />
      {/* Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h1 className="mb-6 text-4xl font-bold md:text-6xl">Elite <span className="text-purple-400">Hair Services</span></h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300 md:text-xl">
            From intricate braids to professional loc maintenance, we provide premium hair artistry in West Roxbury.
          </p>
        </div>
      </section>

      {/* Services List */}
      {serviceCategories.map((category, idx) => (
        <section key={idx} id={category.anchor} className={idx % 2 === 0 ? "py-24" : "py-24 bg-slate-50"}>
          <div className="container mx-auto px-4 md:px-6">
            <div className={`flex flex-col items-center gap-16 ${idx % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
              <div className="lg:w-2/5">
                <img src={category.image} alt={category.title} className="rounded-2xl shadow-xl w-full" />
              </div>
              <div className="lg:w-3/5">
                <h2 className="text-3xl font-bold mb-8 text-slate-900">{category.title}</h2>
                <div className="grid grid-cols-1 gap-6">
                  {category.services.map((s, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-bold text-xl text-slate-900">{s.name}</h3>
                        <p className="text-slate-600 mt-1 max-w-md">{s.desc}</p>
                        <div className="flex items-center mt-3 text-sm text-slate-400">
                          <Clock className="h-4 w-4 mr-1" /> {s.duration}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-purple-600 mb-2">{s.price}</p>
                        <Button size="sm" className="bg-slate-900 hover:bg-purple-600" asChild>
                          <Link to="/booking">Book Now</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Men & Kids */}
      <section className="py-24 bg-purple-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-sm border border-white/20">
                    <UserPlus className="h-12 w-12 mb-6" />
                    <h3 className="text-3xl font-bold mb-4">Men's Styling</h3>
                    <p className="text-white/80 mb-6 leading-relaxed">We offer professional loc retwists, braids, and scalp maintenance for men who take pride in their hair.</p>
                    <Link to="/booking" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">Book for Men</Link>
                </div>
                <div className="bg-white/10 p-10 rounded-3xl backdrop-blur-sm border border-white/20">
                    <Zap className="h-12 w-12 mb-6" />
                    <h3 className="text-3xl font-bold mb-4">Kids Corner</h3>
                    <p className="text-white/80 mb-6 leading-relaxed">Gentle braiding and care for the little ones. We ensure a comfortable and happy experience for kids of all ages.</p>
                    <Link to="/booking" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-colors">Book for Kids</Link>
                </div>
            </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-24 text-center">
         <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl font-bold mb-6">Need a Custom Quote?</h2>
            <p className="text-lg text-slate-600 mb-10">Some styles vary depending on hair length and complexity. Contact us for a free consultation or if you don't see your desired style listed.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-purple-600 py-6" asChild>
                    <a href="tel:+18572375946">Call +1 857-237-5946</a>
                </Button>
                <Button size="lg" variant="outline" className="py-6" asChild>
                    <Link to="/contact">Send a Message</Link>
                </Button>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Services;