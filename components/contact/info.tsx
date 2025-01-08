'use client';

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["Industrial Zone", "Cairo", "Egypt"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+20 123 456 789", "+20 109 876 543"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@egyherbsglobal.com", "sales@egyherbsglobal.com"]
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Sunday - Thursday: 9:00 AM - 5:00 PM", "Friday - Saturday: Closed"]
  }
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      {contactInfo.map((item, index) => (
        <Card key={index} className="p-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="p-3 bg-emerald-100 rounded-lg">
                <item.icon className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <div className="space-y-1">
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Card>
      ))}
    </motion.div>
  );
}