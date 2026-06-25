import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { Button } from \"@/components/ui/button\";
import { toast } from \"sonner\";
import SEO from \"@/components/common/SEO\";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
  };

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="bg-slate-900 py-20 text-white">

  return (
    <div className=\"pt-24 min-h-screen bg-slate-50\">
      <SEO 
        title=\"Contact Lovet’s Locs and Braids | Book Your Appointment\"
        description=\"Get in touch with Lovet’s Locs and Braids in West Roxbury, Boston. Call or WhatsApp us to book your hair braiding appointment today!\"
        url=\"https://lovetslocsandbraids.com/contact\"
      />
      {/* Hero Section */}
      <section className=\"bg-slate-900 py-16 text-white text-center\">
        <div className=\"container mx-auto px-4 md:px-6\">
      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-600"><MapPin className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold">Our Salon</h4>
                    <p className="text-slate-600 font-medium">223 Grove St, West Roxbury, MA 02132</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-600"><Phone className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <a href="tel:+18572375946" className="text-slate-600 hover:text-purple-600 transition-colors">+1 857-237-5946</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-600"><MessageCircle className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold">WhatsApp</h4>
                    <a href="https://wa.me/18572375946" target="_blank" rel="noopener noreferrer" className="text-purple-600 font-bold hover:underline">Chat with us now</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-xl text-purple-600"><Mail className="h-6 w-6" /></div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <a href="mailto:info@lovetslocsandbraids.com" className="text-slate-600 hover:text-purple-600 transition-colors">info@lovetslocsandbraids.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-8 flex items-center"><Clock className="mr-2 h-6 w-6" /> Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between border-b pb-2"><span className="text-slate-600">Mon - Fri</span> <span className="font-bold">9:00 AM - 8:00 PM</span></div>
                <div className="flex justify-between border-b pb-2"><span className="text-slate-600">Saturday</span> <span className="font-bold">9:00 AM - 8:00 PM</span></div>
                <div className="flex justify-between pb-2"><span className="text-slate-600">Sunday</span> <span className="font-bold text-red-500 uppercase">Closed</span></div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <div className="bg-slate-50 p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100">
                <h2 className="text-3xl font-bold mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Full Name</label>
                        <input type="text" required className="w-full p-4 bg-white rounded-xl border-none focus:ring-2 focus:ring-purple-600 outline-none shadow-sm" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700">Email Address</label>
                        <input type="email" required className="w-full p-4 bg-white rounded-xl border-none focus:ring-2 focus:ring-purple-600 outline-none shadow-sm" placeholder="john@example.com" />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-sm font-bold text-slate-700">Subject</label>
                        <select className="w-full p-4 bg-white rounded-xl border-none focus:ring-2 focus:ring-purple-600 outline-none shadow-sm">
                            <option>General Inquiry</option>
                            <option>Booking Question</option>
                            <option>Product Support</option>
                            <option>Partnership</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-sm font-bold text-slate-700">Your Message</label>
                        <textarea required className="w-full p-4 bg-white rounded-xl border-none focus:ring-2 focus:ring-purple-600 outline-none shadow-sm h-48" placeholder="How can we help you today?"></textarea>
                    </div>
                    <div className="md:col-span-2">
                        <Button type="submit" className="w-full md:w-auto bg-slate-900 px-12 py-7 text-lg font-bold group">
                            Send Message <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                    </div>
                </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-24">
            <h2 className="text-3xl font-bold mb-8 text-center">Visit Our Sanctuary</h2>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white h-[500px]">
                <iframe 
                    src="https://www.google.com/maps?q=223%20Grove%20St,%20West%20Roxbury,%20MA%2002132&z=15&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lovet's Locs and Braids Location"
                ></iframe>
            </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;