import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "A Strong Start at the Medicinal & Aromatic Plants Expo",
    excerpt: "From our booth on the opening day, proudly presenting the finest herbs and spices to industry professionals.",
    image: "https://ik.imagekit.io/pcet3dvcu/home/WhatsApp%20Image%202025-01-06%20at%2014.57.07_3e47265b.jpg?updatedAt=1736168485410",
    date: "Sep 12, 2024",
    slug: "medicinal-aromatic-plants-expo",
    content: "We're excited to share highlights from our successful participation at the Medicinal & Aromatic Plants Expo. Our team showcased our premium collection of Egyptian herbs and spices, connecting with industry professionals and potential partners from around the world. The event provided an excellent platform to demonstrate our commitment to quality and sustainability in the herbs and spices industry."
  },
  {
    title: "International Connections: A Productive Meeting with Russian Clients",
    excerpt: "A professional business session presenting our premium samples and exploring collaboration opportunities.",
    image: "https://ik.imagekit.io/pcet3dvcu/about/WhatsApp%20Image%202025-01-06%20at%2014.55.32_abd3df87.jpg?updatedAt=1736168151099",
    date: "Dec 3, 2024",
    slug: "international-connections-russian-clients",
    content: "We recently had the pleasure of hosting a delegation of Russian clients at our facility. During this productive meeting, we presented our premium herb and spice samples, discussed potential collaboration opportunities, and explored ways to strengthen our partnership. We're looking forward to expanding our presence in the Russian market and bringing the finest Egyptian herbs and spices to more customers."
  },
  {
    title: "Building Partnerships at Food Africa",
    excerpt: "A special session with one of our valued clients, showcasing samples and discussing opportunities during Food Africa.",
    image: "https://ik.imagekit.io/pcet3dvcu/home/1733337518996.jpeg?updatedAt=1736153997851",
    date: "Dec 4, 2024",
    slug: "building-partnerships-food-africa",
    content: "Food Africa provided an excellent platform for us to connect with industry leaders and showcase our premium Egyptian herbs and spices. We had the opportunity to meet with one of our valued clients, present our latest product samples, and discuss future collaboration opportunities. The event reinforced our commitment to building strong, lasting partnerships in the global food industry."
  },
  {
    title: "Sustainable Farming Practices: Our Commitment to the Environment",
    excerpt: "Exploring how our sustainable farming methods are preserving Egypt's natural resources while producing premium herbs and spices.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "Nov 15, 2024",
    slug: "sustainable-farming-practices",
    content: "At Egy Herbs Global, sustainability is at the core of our operations. This article explores our commitment to environmentally friendly farming practices, including water conservation, organic cultivation methods, and soil health management. Learn how our approach not only produces superior herbs and spices but also helps preserve Egypt's precious natural resources for future generations."
  },
  {
    title: "The Health Benefits of Egyptian Herbs: Ancient Wisdom for Modern Wellness",
    excerpt: "Discover the traditional medicinal properties of Egyptian herbs that have been valued for centuries.",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "Oct 22, 2024",
    slug: "health-benefits-egyptian-herbs",
    content: "Egyptian herbs have been prized for their medicinal properties since ancient times. This article delves into the health benefits of popular Egyptian herbs like chamomile, hibiscus, and fenugreek, exploring how these natural remedies can support modern wellness routines. From immune support to digestive health, discover why these traditional herbs remain relevant in today's health-conscious world."
  },
  {
    title: "Quality Control: The Science Behind Our Premium Products",
    excerpt: "An inside look at our rigorous testing and quality assurance processes that ensure consistent excellence.",
    image: "https://images.unsplash.com/photo-1581093458791-9d09a5c0d6e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "Sep 5, 2024",
    slug: "quality-control-science",
    content: "Quality is never an accident; it's the result of intelligent effort. This article provides an inside look at our comprehensive quality control processes, from field testing to laboratory analysis. Learn about the scientific methods we employ to ensure that every batch of our herbs and spices meets our exacting standards for purity, potency, and flavor. Our commitment to quality is what sets Egy Herbs Global apart in the global marketplace."
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto">
              News, insights, and updates from the world of premium Egyptian herbs and spices
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <div key={index} className="h-full">
                <Card className="overflow-hidden h-full border-0 shadow-xl rounded-xl group">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      width={600}
                      height={338}
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center text-sm text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      {post.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 h-14 group-hover:text-emerald-600 transition-colors">{post.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="link" className="p-0 text-emerald-600 hover:text-emerald-700 font-medium flex items-center group">
                        Read More <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}