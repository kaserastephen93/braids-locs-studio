import { motion } from "framer-motion";
import { CheckCircle2, Award, Heart, ShieldCheck, Star, Users, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/common/SEO";

const About = () => {
  return (
    <div className="pt-24">
      <SEO 
        title="About Lovet's Locs and Braids | Professional Hair Braiders in Boston"
        description="Learn about Lovet's Locs and Braids in West Roxbury. Our mission is to provide elite hair braiding and natural hair care services in the Boston area."
        url="https://lovetslocsandbraids.com/about"
      />
      {/* Hero Header */}
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-bold md:text-6xl"
          >
            Our Story & <span className="text-purple-400">Mission</span>
          </motion.h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300 md:text-xl">
            Empowering beauty through expert braiding and natural hair care in West Roxbury since 2012.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/about-us-6c9b01c2-1776026562674.webp"
                  alt="Lovet's Locs and Braids Salon"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-10 -right-10 hidden rounded-2xl bg-purple-600 p-8 text-white shadow-xl md:block">
                  <span className="text-5xl font-extrabold">12+</span>
                  <p className="text-lg font-medium opacity-90">Years of Experience</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-slate-900 md:text-4xl">Born from a Passion for Natural Beauty</h2>
              <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                <p>
                  Lovet’s Locs and Braids started with a simple vision: to create a space where natural hair isn't just "handled," but celebrated. Founded by Vollen Lovet, an elite senior stylist with over a decade of expertise in complex braiding and loc maintenance, our salon has grown into West Roxbury's most trusted destination for protective styles.
                </p>
                <p>
                  At the heart of our philosophy is the belief that hair care is self-care. We don't just provide a service; we provide an experience of empowerment. Every braid is a statement of identity, and every loc is a symbol of strength.
                </p>
                <p>
                  We recognized early on that commercial products often contain harsh chemicals that damage natural textures. This led to the creation of <strong>Lovet’s Organic Hair Products</strong>—our proprietary line of oils, shampoos, and conditioners designed specifically to nourish the scalp and promote healthy growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="bg-slate-50 py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Our Core Philosophy</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              We stand for quality, integrity, and the celebration of African heritage through modern hair artistry.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Heart className="h-10 w-10 text-purple-600" />,
                title: "Empowerment",
                desc: "We help our clients feel confident and beautiful in their natural hair, providing styles that turn heads and boost self-esteem."
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-purple-600" />,
                title: "Integrity",
                desc: "We use only the finest organic ingredients and proven techniques that prioritize the long-term health of your hair and scalp."
              },
              {
                icon: <Users className="h-10 w-10 text-purple-600" />,
                title: "Community",
                desc: "Lovet's is more than a salon; it's a community hub in West Roxbury where clients are treated like family."
              }
            ].map((value, i) => (
              <div key={i} className="rounded-2xl bg-white p-10 shadow-lg text-center">
                <div className="mb-6 flex justify-center">{value.icon}</div>
                <h3 className="mb-4 text-2xl font-bold">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location/Visit */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="rounded-3xl bg-slate-900 p-10 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Visit Our Sanctuary</h2>
                <div className="space-y-4 mb-8">
                    <p className="flex items-center text-slate-300"><MapPin className="mr-3 h-5 w-5 text-purple-400" /> 223 Grove St, West Roxbury, MA 02132</p>
                    <p className="flex items-center text-slate-300"><Award className="mr-3 h-5 w-5 text-purple-400" /> Certified Professional Stylists</p>
                    <p className="flex items-center text-slate-300"><Star className="mr-3 h-5 w-5 text-purple-400" /> 5-Star Rated Salon</p>
                </div>
                <Link to="/booking" className="inline-block bg-purple-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-colors">Book a Visit</Link>
            </div>
            <div className="md:w-1/2 w-full">
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
                     <iframe 
                        title="Lovet's Locs and Braids Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m18!1m12!1m18!1m12!1m3!1d2951.6441639999997!2d-71.1578!3d42.2789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e378f8c6607e0b%3A0x6a3f9e9a4e3b3e3e!2s223%20Grove%20St%2C%20West%20Roxbury%2C%20MA%2002132!5e0!3m2!1sen!2sus!4v1633333333333!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;