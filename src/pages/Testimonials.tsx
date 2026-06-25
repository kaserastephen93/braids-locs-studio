import { useState } from "react";
import { Star, Quote, MapPin, CheckCircle } from \"lucide-react\";
import { Button } from \"@/components/ui/button\";
import { toast } from \"sonner\";
import SEO from \"@/components/common/SEO\";

const reviews = [
  { id: 1, name: \"Jessica M.\", rating: 5, date: \"2 weeks ago\", text: \"Lovet is truly an artist! My knotless braids are neat, consistent, and most importantly, painless. I\'ve found my forever stylist in West Roxbury.\", image: \"https://i.pravatar.cc/150?u=jess\" },
  { id: 2, name: "Marcus T.", rating: 5, date: "1 month ago", text: "Best loc maintenance in Boston. The retwist is always crisp and the scalp treatment is a game changer for my dandruff issues.", image: "https://i.pravatar.cc/150?u=marc" },
  { id: 3, name: "Elena R.", rating: 5, date: "3 weeks ago", text: "I took my daughter here for her first braiding experience and she loved it. Very gentle and patient with kids. Highly recommend!", image: "https://i.pravatar.cc/150?u=elen" },
  { id: 4, name: "Sarah W.", rating: 5, date: "2 months ago", text: "The organic hair oil is AMAZING. My edges were thinning and after 2 months of consistent use, I'm seeing real growth. Thank you Lovet!", image: "https://i.pravatar.cc/150?u=sara" },
];

const Testimonials = () => {
  const [showForm, setShowForm] = useState(false);

const Testimonials = () => {
  return (
    <div className=\"pt-24 min-h-screen bg-slate-50\">
      <SEO 
        title=\"Client Reviews | Lovet’s Locs and Braids Boston\"
        description=\"Read what our clients say about the best hair braiding salon in West Roxbury, Boston. Real reviews for knotless braids and loc services.\"
        url=\"https://lovetslocsandbraids.com/testimonials\"
      />
      {/* Hero Section */}
      <section className=\"bg-slate-900 py-16 text-white text-center\">
        <div className=\"container mx-auto px-4 md:px-6\">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg italic">"Elite artistry, professional care, and a welcoming atmosphere. See why our clients keep coming back."</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {reviews.map(review => (
                <div key={review.id} className="bg-white p-8 rounded-3xl shadow-sm relative overflow-hidden">
                    <Quote className="absolute top-6 right-8 h-12 w-12 text-purple-100" />
                    <div className="flex items-center gap-4 mb-6">
                        <img src={review.image} alt={review.name} className="h-14 w-14 rounded-full border-2 border-purple-200" />
                        <div>
                            <h3 className="font-bold text-slate-900">{review.name}</h3>
                            <div className="flex">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <span className="text-xs text-slate-400">{review.date}</span>
                        </div>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4 italic">"{review.text}"</p>
                    <div className="flex items-center text-xs text-green-600 font-bold">
                        <CheckCircle className="h-4 w-4 mr-1" /> VERIFIED CLIENT
                    </div>
                </div>
            ))}
        </div>

        {/* Review Form */}
        <div className="max-w-2xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Share Your Experience</h2>
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Thank you for your review!"); }} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium mb-2">Name</label>
                        <input type="text" required className="w-full p-3 bg-slate-50 rounded-lg border-none focus:ring-2 focus:ring-purple-600 outline-none" placeholder="Your Name" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-2">Rating</label>
                        <select className="w-full p-3 bg-slate-50 rounded-lg border-none focus:ring-2 focus:ring-purple-600 outline-none">
                            <option>5 Stars - Excellent</option>
                            <option>4 Stars - Good</option>
                            <option>3 Stars - Average</option>
                        </select>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">Your Story</label>
                    <textarea required className="w-full p-3 bg-slate-50 rounded-lg border-none focus:ring-2 focus:ring-purple-600 outline-none h-32" placeholder="Tell others about your transformation..."></textarea>
                </div>
                <Button type="submit" className="w-full bg-purple-600 py-6 text-lg font-bold">Post Review</Button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;