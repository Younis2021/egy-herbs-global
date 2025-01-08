'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

export function Newsletter() {
  return (
    <section className="py-24 bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-4">Not sure where to start?</h2>
          <p className="text-lg mb-8 text-emerald-100">
<<<<<<< HEAD
            Subscribe to our newsletter and let egy herbs global be your guide and receive expert tips and exclusive offers.
=======
            Subscribe to our newsletter and receive expert tips, recipes, and exclusive offers.
>>>>>>> 4c8206021add99218f12f24650223a5e2ac4ef10
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
            <Button className="bg-white text-emerald-900 hover:bg-emerald-50">
              Subscribe Now
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}