'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "25+ years of experience in sustainable agriculture and international trade. Sarah founded Egy Herbs Global with a vision to share Egypt's herbal treasures with the world.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@egyherbsglobal.com"
    }
  },
  {
    name: "Michael Chen",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Expert in supply chain optimization with a background in agricultural economics. Michael ensures our products move efficiently from farm to customer.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@egyherbsglobal.com"
    }
  },
  {
    name: "Emily Rodriguez",
    role: "Quality Control Director",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "PhD in Food Science with specialization in herbal compounds. Emily leads our quality assurance team, maintaining our rigorous standards.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@egyherbsglobal.com"
    }
  },
  {
    name: "David Kim",
    role: "Sustainability Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Environmental scientist dedicated to implementing eco-friendly practices throughout our operations. David leads our initiatives for a greener future.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@egyherbsglobal.com"
    }
  },
  {
    name: "Aisha Mahmoud",
    role: "Agricultural Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Born and raised in Egypt's Nile Delta, Aisha brings traditional farming knowledge combined with modern agricultural science to our growing operations.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "aisha@egyherbsglobal.com"
    }
  },
  {
    name: "James Wilson",
    role: "International Sales Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "With experience in 30+ countries, James develops our global partnerships and ensures our products reach customers worldwide with excellence.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "james@egyherbsglobal.com"
    }
  },
  {
    name: "Sophia Patel",
    role: "Research & Development Lead",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Botanist specializing in medicinal plants, Sophia explores new product possibilities while preserving traditional uses of Egyptian herbs.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sophia@egyherbsglobal.com"
    }
  },
  {
    name: "Omar Hassan",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    bio: "Creative strategist with a passion for storytelling. Omar shares the rich heritage and quality of our products with audiences worldwide.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "omar@egyherbsglobal.com"
    }
  }
];

export function TeamSection() {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-50 rounded-full opacity-70" />
      <div className="absolute bottom-40 -left-20 w-96 h-96 bg-emerald-50 rounded-full opacity-70" />
      
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
            <span className="text-emerald-600 font-medium">OUR TEAM</span>
            <div className="h-px w-12 bg-emerald-300"></div>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Meet the Passionate Individuals Behind Egy Herbs Global
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our diverse team combines traditional knowledge with modern expertise to deliver excellence in every aspect of our business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="h-full"
            >
              <Card className="overflow-hidden h-full border-0 shadow-xl group">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    width={400}
                    height={400}
                    src={member.image}
                    alt={member.name}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-center space-x-2">
                      <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/80 hover:bg-white">
                        <Linkedin className="h-4 w-4 text-emerald-600" />
                      </Button>
                      <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/80 hover:bg-white">
                        <Twitter className="h-4 w-4 text-emerald-600" />
                      </Button>
                      <Button size="icon" variant="secondary" className="w-8 h-8 rounded-full bg-white/80 hover:bg-white">
                        <Mail className="h-4 w-4 text-emerald-600" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}