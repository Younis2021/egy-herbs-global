'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Send, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    setEmail('');
    
    toast({
      title: "Successfully subscribed!",
      description: "Thank you for joining our newsletter.",
      variant: "default",
    });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-900 z-0">
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url("https://ik.imagekit.io/pcet3dvcu/home/pattern.png?updatedAt=1736259343720")',
            backgroundSize: '400px',
          }}
          animate={{ 
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            repeatType: 'loop',
          }}
        />
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 left-10 w-64 h-64 bg-emerald-800/50 rounded-full blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <motion.div 
        className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-700/30 rounded-full blur-3xl z-0"
        animate={{ 
          scale: [1, 1.3, 1],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md rounded-3xl p-12 max-w-3xl mx-auto text-center shadow-xl border border-white/10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mb-6"
          >
            {isSubscribed ? <CheckCircle className="w-10 h-10" /> : <Mail className="w-10 h-10" />}
          </motion.div>
          
          <h2 className="text-3xl font-bold mb-4 text-white">
            {isSubscribed ? "Thank you for subscribing!" : "Not sure where to start?"}
          </h2>
          <p className="text-xl mb-8 text-emerald-100">
            {isSubscribed 
              ? "You'll be the first to know about our latest products, recipes, and exclusive offers."
              : "Subscribe to our newsletter and receive expert tips, recipes, and exclusive offers."}
          </p>
          
          {!isSubscribed && (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/20 border-white/20 text-white placeholder:text-white/60 h-14 text-lg rounded-full px-6 focus:ring-2 focus:ring-white/30 focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-emerald-900 hover:bg-emerald-50 h-14 rounded-full px-8 text-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-emerald-900 border-t-transparent rounded-full animate-spin mr-2"></div>
                    Subscribing...
                  </>
                ) : (
                  <>
                    Subscribe Now
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </form>
          )}
          
          {!isSubscribed && (
            <p className="text-emerald-200 mt-6 text-sm">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}