import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import SEO from "@/components/common/SEO";

const services = [
  { id: "braids", name: "Knotless Braids", duration: "4-6 hrs", price: "$180+" },
  { id: "locs", name: "Loc Retwist & Style", duration: "2-3 hrs", price: "$120+" },
  { id: "box", name: "Box Braids", duration: "5-7 hrs", price: "$150+" },
  { id: "scalp", name: "Organic Scalp Detox", duration: "1 hr", price: "$65" },
  { id: "kids", name: "Kids Braiding", duration: "2-3 hrs", price: "$85+" },
];

const timeSlots = ["09:00 AM", "11:00 AM", "01:00 PM", "03:00 PM", "05:00 PM"];

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleNext = () => {
    if (step === 1 && !selectedService) {
      toast.error("Please select a service");
      return;
    }
    if (step === 2 && (!selectedDate || !selectedTime)) {
      toast.error("Please select date and time");
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking Request Sent! We will contact you shortly to confirm.");
    // In a real app, this would call an API or redirect to Calendly
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-slate-50">
      <SEO 
        title="Book Hair Braiding Appointment | Lovet’s Locs and Braids"
        description="Book your next hair braiding or loc appointment online at Lovet’s Locs and Braids in West Roxbury, Boston. Simple and fast scheduling for your best hair look."
        url="https://lovetslocsandbraids.com/booking"
      />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Book Your Appointment</h1>
          <div className="flex items-center justify-center space-x-4 mb-8">
            {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                    <div className={cn(
                        "h-10 w-10 rounded-full flex items-center justify-center font-bold transition-colors",
                        step >= s ? "bg-purple-600 text-white" : "bg-slate-200 text-slate-500"
                    )}>
                        {step > s ? <Check className="h-6 w-6" /> : s}
                    </div>
                    {s < 3 && <div className={cn("h-1 w-12 md:w-20", step > s ? "bg-purple-600" : "bg-slate-200")}></div>}
                </div>
            ))}
        </div>
        </div>

        <Card className="p-6 md:p-10 shadow-xl border-none">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-bold mb-6">Select a Service</h2>
              <div className="space-y-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={cn(
                      "p-5 rounded-xl border-2 cursor-pointer transition-all flex justify-between items-center",
                      selectedService === service.id ? "border-purple-600 bg-purple-50" : "border-slate-100 hover:border-slate-200"
                    )}
                  >
                    <div>
                      <h3 className="font-bold text-lg">{service.name}</h3>
                      <p className="text-sm text-slate-500 flex items-center mt-1">
                        <Clock className="h-4 w-4 mr-1" /> {service.duration}
                      </p>
                    </div>
                    <div className="text-right">
                        <span className="font-bold text-purple-600">{service.price}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Button onClick={handleNext} className="w-full mt-8 py-6 bg-purple-600 hover:bg-purple-700 text-lg">
                Continue <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-bold mb-6">Choose Date & Time</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Select Date</label>
                   <input 
                    type="date" 
                    className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-600 outline-none"
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                   />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Select Time</label>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={cn(
                          "p-3 rounded-lg border text-sm transition-all",
                          selectedTime === time ? "bg-purple-600 text-white border-purple-600" : "bg-white border-slate-200 hover:border-purple-600"
                        )}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex gap-4 mt-10">
                <Button variant="outline" onClick={() => setStep(1)} className="flex-1 py-6">Back</Button>
                <Button onClick={handleNext} className="flex-[2] py-6 bg-purple-600 hover:bg-purple-700">Continue</Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl font-bold mb-6">Your Information</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
                            <input type="text" required className="w-full pl-10 p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-600 outline-none" placeholder="John Doe" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                        <input type="tel" required className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-600 outline-none" placeholder="+1 857-237-5946" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" required className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-600 outline-none" placeholder="your@email.com" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Special Instructions (Optional)</label>
                    <textarea className="w-full p-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-purple-600 outline-none h-32" placeholder="Tell us about your hair type or specific needs..."></textarea>
                </div>
                
                <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-600 mb-6">
                    <p className="font-bold mb-1">Appointment Summary:</p>
                    <p>{services.find(s => s.id === selectedService)?.name} on {selectedDate} at {selectedTime}</p>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1 py-6">Back</Button>
                  <Button type="submit" className="flex-[2] py-6 bg-purple-600 hover:bg-purple-700 text-lg">Confirm Booking</Button>
                </div>
              </form>
            </motion.div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Booking;