import { motion } from "framer-motion";
import { Gift, Zap, Users, Star, ArrowRight } from \"lucide-react\";
import { Button } from \"@/components/ui/button\";
import { Link } from \"react-router-dom\";
import SEO from \"@/components/common/SEO\";

const Offers = () => {
  return (
    <div className=\"pt-24 bg-white min-h-screen\">
      <SEO 
        title=\"Hair Braiding Specials and Discounts | Boston Salon Deals\"
        description=\"Check out the latest deals and special offers at Lovet’s Locs and Braids in West Roxbury, Boston. Save on your next braiding or loc service.\"
        url=\"https://lovetslocsandbraids.com/offers\"
      />
      <section className=\"bg-slate-900 py-20 text-white overflow-hidden relative\">
        <div className=\"container mx-auto px-4 text-center relative z-10\">
            <motion.h1 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-4xl md:text-6xl font-bold mb-4"
            >
                Special <span className="text-purple-400">Offers</span> & Deals
            </motion.h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">Elite hair care doesn't have to break the bank. Check out our latest discounts and bundle deals.</p>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 blur-[100px] rounded-full -mr-32 -mt-32"></div>
      </section>

      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Time Discount */}
            <div className="bg-slate-50 border-2 border-purple-100 rounded-3xl p-10 flex flex-col items-center text-center">
                <div className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-200">
                    <Star className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">New Client Special</h3>
                <p className="text-slate-600 mb-8 flex-grow">First time visiting Lovet's? Enjoy 15% OFF any braiding service of $150 or more.</p>
                <div className="bg-white border-2 border-dashed border-purple-300 px-6 py-3 rounded-xl font-mono font-bold text-purple-600 mb-8">
                    CODE: NEWSTYLE15
                </div>
                <Button className="w-full bg-purple-600 py-6" asChild><Link to="/booking">Book Now</Link></Button>
            </div>

            {/* Bundle Deal */}
            <div className="bg-purple-600 rounded-3xl p-10 flex flex-col items-center text-center text-white shadow-2xl shadow-purple-200 relative">
                <div className="absolute top-4 right-4 bg-white text-purple-600 px-3 py-1 rounded-full text-[10px] font-bold">POPULAR</div>
                <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 backdrop-blur-md">
                    <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">The Refresh Bundle</h3>
                <p className="text-white/80 mb-8 flex-grow">Book a Loc Retwist + Scalp Detox and get a free 4oz Organic Hair Oil. Save $25 overall!</p>
                <div className="bg-white/10 border-2 border-dashed border-white/30 px-6 py-3 rounded-xl font-mono font-bold mb-8">
                    CODE: REFRESH25
                </div>
                <Button className="w-full bg-white text-purple-600 py-6 hover:bg-slate-100 font-bold" asChild><Link to="/booking">Claim Bundle</Link></Button>
            </div>

            {/* Referral Program */}
            <div className="bg-slate-50 border-2 border-purple-100 rounded-3xl p-10 flex flex-col items-center text-center">
                <div className="bg-slate-900 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                    <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">Refer a Friend</h3>
                <p className="text-slate-600 mb-8 flex-grow">Sharing is caring! For every friend you refer who completes a service, you get $20 credit for your next visit.</p>
                <div className="bg-white border-2 border-dashed border-slate-300 px-6 py-3 rounded-xl font-mono font-bold text-slate-900 mb-8">
                    Unlimited Credits!
                </div>
                <Button className="w-full bg-slate-900 py-6" asChild><Link to="/contact">Get Referral Link</Link></Button>
            </div>
        </div>

        {/* Membership Section */}
        <section className="mt-24 bg-slate-900 rounded-[40px] overflow-hidden">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-10 md:p-20 text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">VIP <span className="text-purple-400">Membership</span></h2>
                    <p className="text-slate-400 text-lg mb-8 leading-relaxed">Join our elite circle for priority booking, exclusive monthly discounts, and first access to new product drops. Starting at just $49/month.</p>
                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center"><div className="bg-purple-600 rounded-full p-1 mr-3"><Gift className="h-4 w-4" /></div> 1 Free Scalp Treatment Monthly</li>
                        <li className="flex items-center"><div className="bg-purple-600 rounded-full p-1 mr-3"><Gift className="h-4 w-4" /></div> 10% Off All Products</li>
                        <li className="flex items-center"><div className="bg-purple-600 rounded-full p-1 mr-3"><Gift className="h-4 w-4" /></div> Priority Weekend Booking</li>
                    </ul>
                    <Button className="bg-purple-600 px-10 py-7 text-lg font-bold group">
                        Become a VIP <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>
                <div className="md:w-1/2 h-80 md:h-auto">
                    <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/1d0a04bd-9c73-4aa9-87e7-0f62976e3323/hero-image-2241c04e-1776026558761.webp" alt="VIP Client" className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Offers;