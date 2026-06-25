import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import ProductsPreview from "@/components/sections/ProductsPreview";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle2, Award, Heart, ShieldCheck, ArrowRight, Camera } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/common/SEO";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <SEO 
        title="Lovet's Locs and Braids | Hair Braiding Salon in West Roxbury Boston MA"
        description="Premier hair braiding salon in West Roxbury, Boston MA. Specializing in knotless braids, locs, twists & organic hair care. Book your transformation today!"
        url="https://lovetslocsandbraids.com"
        image="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/hero-image-2241c04e-1776026558761.webp"
      />
      <Hero />

      {/* Trust Badges */}
      <section className="bg-slate-900 py-12 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <Award className="mb-4 h-10 w-10 text-purple-400" />
              <h3 className="text-lg font-bold">10+ Years Exp</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <Heart className="mb-4 h-10 w-10 text-purple-400" />
              <h3 className="text-lg font-bold">1000+ Happy Clients</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="mb-4 h-10 w-10 text-purple-400" />
              <h3 className="text-lg font-bold">Organic Products</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="mb-4 h-10 w-10 text-purple-400" />
              <h3 className="text-lg font-bold">Certified Stylists</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/about-us-6c9b01c2-1776026562674.webp"
                alt="Lovet's Locs and Braids Salon Interior"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl">
                The Best Braids Salon in <span className="text-purple-600">West Roxbury</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                Welcome to Lovet’s Locs and Braids, where we turn every appointment into a journey of empowerment. 
                Located at 223 Grove St, West Roxbury, we specialize in high-quality hair braiding, 
                professional loc maintenance, and specialized natural hair care.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                Our mission is to celebrate the beauty of natural hair through expert techniques and 
                our own line of organic hair care products. Whether you're looking for knotless braids, 
                sisterlocks, or a refreshing scalp treatment, our elite stylists are here to serve you.
              </p>
              <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700" asChild>
                <Link to="/about">Learn Our Story</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ServicesPreview />
      
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
            <ProductsPreview />
        </div>
      </section>

      {/* Recent Client Transformations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-px w-12 bg-purple-600"></div>
                <span className="text-purple-600 font-bold uppercase tracking-widest text-sm">Portfolio Highlights</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Recent Client <span className="text-purple-600">Transformations</span>
              </h2>
            </div>
            <Button variant="outline" className="border-slate-200 hover:bg-slate-50 text-slate-900 rounded-xl h-12 px-6" asChild>
              <Link to="/gallery" className="flex items-center gap-2">View Full Gallery <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 1, title: "Medium Knotless Braids", category: "Knotless Braids", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/medium-knotless-braids-with-curly-ends-160f72d0-1782003938853.webp" },
              { id: 7, title: "Professional Loc Retwist", category: "Loc Retwist", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/professional-loc-retwist-799a13b3-1782003938871.webp" },
              { id: 14, title: "Knotless Transformation", category: "Before & After", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/knotless-braids-transformation-e61be73e-1782003940451.webp", isNew: true },
              { id: 15, title: "Loc Refresh", category: "Before & After", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/loc-retwist-transformation-5b4dc752-1782003939998.webp" },
              { id: 3, title: "Goddess Braids", category: "Goddess Braids", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/goddess-braids-with-wavy-ends-d458fede-1782003939029.webp" },
              { id: 5, title: "Feed-In Ponytail", category: "Feed-In Braids", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/sleek-feed-in-braids-ponytail-82cfd499-1782003939326.webp" },
              { id: 11, title: "Men's Box Braids", category: "Men's Braids", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/men-s-box-braids-with-fade-3ad9053f-1782003939952.webp" },
              { id: 20, title: "Passion Twists", category: "Protective Styles", img: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/bouncy-passion-twists-3d804d9a-1782003941907.webp" },
              { id: 21, title: "Twisted Dreadlocks", category: "Loc Retwist", img: "https://storage.googleapis.com/dala-prod-public-storage/attachments/176895b1-f89a-4fe0-811c-90aa65760d48/1782119267579_FB_IMG_1782119178589.jpg", isNew: true },
              { id: 23, title: "Side Profile Braids", category: "Protective Styles", img: "https://storage.googleapis.com/dala-prod-public-storage/attachments/176895b1-f89a-4fe0-811c-90aa65760d48/1782119267630_FB_IMG_1782119168589.jpg", isNew: true }
            ].map((item) => (
              <Link key={item.id} to="/gallery" className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                {item.isNew && <Badge className="absolute top-4 right-4 bg-purple-600 text-white border-none px-3 py-1">New</Badge>}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-purple-400 text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</span>
                  <h3 className="text-white font-bold text-lg">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Join the Lovet's Family</h2>
          <p className="mx-auto mb-8 max-w-2xl text-slate-400">
            Subscribe to our newsletter for hair care tips, exclusive offers, and the latest style trends delivered straight to your inbox.
          </p>
          <form className="mx-auto flex max-w-md flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow rounded-lg border-none bg-slate-800 px-6 py-4 text-white focus:ring-2 focus:ring-purple-500"
              required
            />
            <Button className="bg-purple-600 px-8 py-4 text-lg font-bold hover:bg-purple-700">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;