'use client';

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://ik.imagekit.io/pcet3dvcu/home/12.jpg?updatedAt=1726259343720")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-emerald-800/80 to-emerald-900/90" />
        </motion.div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-1 bg-emerald-300 mb-8 rounded-full"
            />
            
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Ready to Experience <span className="text-emerald-300">Premium Egyptian Herbs</span>?
            </h2>
            
            <p className="text-xl text-emerald-100 mb-10 leading-relaxed">
              Connect with our team to learn more about our products, sustainable practices, and how we can meet your herb and spice needs with exceptional quality and service.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-900 hover:bg-emerald-50 px-8 py-6 rounded-full text-lg font-medium shadow-lg shadow-emerald-900/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white bg-white/10 hover:bg-white/20 px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  Explore Products
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <p className="text-emerald-200 font-medium mb-1">Email Us</p>
                  <p className="text-white text-lg">info@egyherbsglobal.com</p>
                  <p className="text-white text-lg">sales@egyherbsglobal.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <p className="text-emerald-200 font-medium mb-1">Call Us</p>
                  <p className="text-white text-lg">+20 123 456 789</p>
                  <p className="text-white text-lg">+20 109 876 543</p>
                </div>
              </div>
              
              <div className="pt-6 mt-6 border-t border-white/20">
                <p className="text-emerald-200 font-medium mb-2">Business Hours</p>
                <p className="text-white">Sunday - Thursday: 9:00 AM - 5:00 PM</p>
                <p className="text-white">Friday - Saturday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-0 right-0 w-64 h-64 bg-emerald-300/10 rounded-full blur-3xl z-[-1]"
          animate={{ 
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl z-[-1]"
          animate={{ 
            x: [0, -20, 0],
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>
    </section>
  );
}