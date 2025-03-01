'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "The quality of their herbs is unmatched. You can taste the difference in every dish. Their commitment to sustainability and ethical sourcing makes them our preferred supplier.",
    author: "Chef Maria Santos",
    role: "Executive Chef, The Green Table",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Their commitment to sustainability sets them apart. A true leader in responsible sourcing and environmental stewardship in the herb and spice industry.",
    author: "Dr. James Wilson",
    role: "Environmental Consultant",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "Working with Egy Herbs Global has transformed our supply chain. Exceptional quality, reliable delivery, and outstanding customer service make them a valued partner.",
    author: "Lisa Chen",
    role: "Procurement Director, Organic Foods Co.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    quote: "The authenticity of their Egyptian herbs brings a genuine taste of the region to our products. Their attention to detail in cultivation and processing is evident in every batch.",
    author: "Ahmed Hassan",
    role: "Product Development Manager, Spice World",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export function Testimonials() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const y = useTransform(scrollYProgress, [0.6, 0.7], [50, 0]);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-5"
        style={{
          backgroundImage: 'url("https://ik.imagekit.io/pcet3dvcu/home/pattern-light.png?updatedAt=1736259343720")',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-emerald-300"></div>
            <span className="text-emerald-600 font-medium">TESTIMONIALS</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our valued customers and partners about their experience working with Egy Herbs Global.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="p-8 h-full border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col">
                <Quote className="w-10 h-10 text-emerald-600 mb-6" />
                <p className="text-gray-600 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                <div className="flex items-center mt-auto">
                  <div className="flex-shrink-0 mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          style={{ opacity, y }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-emerald-600 font-medium">Join our growing list of satisfied partners worldwide</p>
        </motion.div>
      </div>
    </section>
  );
}