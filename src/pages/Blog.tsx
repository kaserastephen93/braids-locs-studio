import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/common/SEO";

const posts = [
const posts = [
  {
    id: 1,
    title: "5 Essential Tips for Maintaining Knotless Braids",
    excerpt: "Learn how to keep your knotless braids looking fresh and frizz-free for weeks with our expert maintenance guide.",
    date: "May 15, 2024",
    author: "Vollen Lovet",
    category: "Hair Care",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/service-braids-0efc3915-1776026558928.webp"
  },
  {
    id: 2,
    title: "Why Scalp Health is the Secret to Hair Growth",
    excerpt: "Discover the connection between a clean, healthy scalp and faster, thicker hair growth for natural textures.",
    date: "June 2, 2024",
    author: "Vollen Lovet",
    category: "Scalp Health",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/service-scalp-care-4a279def-1776026559012.webp"
const Blog = () => {
  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      <SEO 
        title="Hair Care Tips and Braiding Trends | Boston Hair Blog"
        description="Expert hair care tips and the latest braiding trends from Lovet’s Locs and Braids in West Roxbury, Boston. Stay informed about professional natural hair care."
        url="https://lovetslocsandbraids.com/blog"
      />
      {/* Hero Section */}
    excerpt: "Should you get braids, locs, or twists? We break down the best styles based on your daily activities and maintenance capacity.",
    date: "June 20, 2024",
    author: "Hair Expert",
    category: "Styling",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/service-locs-1b1c27d4-1776026558697.webp"
  }
];

const Blog = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Hair Care <span className="text-purple-400">Journal</span></h1>
            <p className="text-slate-400 max-w-2xl mx-auto">Expert advice, style trends, and natural hair education from the pros at Lovet's.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
                <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6 shadow-sm">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute top-4 left-4 bg-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">{post.category}</div>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-4">
                        <span className="flex items-center"><Calendar className="h-3 w-3 mr-1" /> {post.date}</span>
                        <span className="flex items-center"><User className="h-3 w-3 mr-1" /> {post.author}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors leading-tight">{post.title}</h2>
                    <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <Link to={`/blog/${post.id}`} className="inline-flex items-center font-bold text-purple-600 hover:gap-3 transition-all">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </motion.article>
            ))}
        </div>

        {/* Newsletter Banner */}
        <section className="mt-24 bg-purple-100 rounded-[40px] p-10 md:p-20 flex flex-col items-center text-center">
             <h2 className="text-3xl font-bold mb-4">Never miss a hair tip!</h2>
             <p className="text-slate-600 mb-8 max-w-xl">Join 5,000+ beauty conscious individuals who get our weekly hair care newsletter.</p>
             <form className="w-full max-w-md flex flex-col sm:flex-row gap-4">
                <input type="email" placeholder="Enter your email" className="flex-grow p-4 rounded-xl border-none focus:ring-2 focus:ring-purple-600 outline-none" required />
                <Button className="bg-purple-600 py-4 px-8 font-bold">Subscribe</Button>
             </form>
        </section>
      </div>
    </div>
  );
};

export default Blog;