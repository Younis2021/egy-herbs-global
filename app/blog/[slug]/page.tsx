import { notFound } from 'next/navigation';
import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const posts = [
  {
    title: "A Strong Start at the Medicinal & Aromatic Plants Expo",
    excerpt: "From our booth on the opening day, proudly presenting the finest herbs and spices to industry professionals.",
    image: "https://ik.imagekit.io/pcet3dvcu/home/WhatsApp%20Image%202025-01-06%20at%2014.57.07_3e47265b.jpg?updatedAt=1736168485410",
    date: "Sep 12, 2024",
    slug: "medicinal-aromatic-plants-expo",
    content: `
      <p>We're excited to share highlights from our successful participation at the Medicinal & Aromatic Plants Expo. Our team showcased our premium collection of Egyptian herbs and spices, connecting with industry professionals and potential partners from around the world.</p>
      
      <p>The event provided an excellent platform to demonstrate our commitment to quality and sustainability in the herbs and spices industry. Visitors to our booth were particularly impressed by our organic certification and sustainable farming practices.</p>
      
      <p>Throughout the expo, we had the opportunity to:</p>
      <ul>
        <li>Present our diverse range of premium Egyptian herbs and spices</li>
        <li>Demonstrate our quality control processes</li>
        <li>Discuss potential partnerships with distributors from Europe, Asia, and North America</li>
        <li>Share our vision for sustainable agriculture and ethical sourcing</li>
      </ul>
      
      <p>We're grateful for the positive feedback received and look forward to building on the connections made during this important industry event. Stay tuned for more updates as we continue to expand our global presence and bring the finest Egyptian herbs and spices to markets worldwide.</p>
    `
  },
  {
    title: "International Connections: A Productive Meeting with Russian Clients",
    excerpt: "A professional business session presenting our premium samples and exploring collaboration opportunities.",
    image: "https://ik.imagekit.io/pcet3dvcu/about/WhatsApp%20Image%202025-01-06%20at%2014.55.32_abd3df87.jpg?updatedAt=1736168151099",
    date: "Dec 3, 2024",
    slug: "international-connections-russian-clients",
    content: `
      <p>We recently had the pleasure of hosting a delegation of Russian clients at our facility. During this productive meeting, we presented our premium herb and spice samples, discussed potential collaboration opportunities, and explored ways to strengthen our partnership.</p>
      
      <p>The Russian market represents an important growth opportunity for Egy Herbs Global, with increasing demand for high-quality, organic herbs and spices. Our visitors were particularly interested in our chamomile, hibiscus, and basil products, noting their exceptional quality and flavor profiles.</p>
      
      <p>Key highlights from the meeting included:</p>
      <ul>
        <li>Detailed presentations on our cultivation and processing methods</li>
        <li>Sampling sessions featuring our premium product range</li>
        <li>Discussions about customized packaging solutions for the Russian market</li>
        <li>Planning for future supply chain optimization</li>
      </ul>
      
      <p>We're excited about the potential to expand our presence in Russia and look forward to finalizing agreements in the coming weeks. This partnership aligns perfectly with our global expansion strategy and commitment to bringing Egyptian quality to discerning customers worldwide.</p>
    `
  },
  {
    title: "Building Partnerships at Food Africa",
    excerpt: "A special session with one of our valued clients, showcasing samples and discussing opportunities during Food Africa.",
    image: "https://ik.imagekit.io/pcet3dvcu/home/1733337518996.jpeg?updatedAt=1736153997851",
    date: "Dec 4, 2024",
    slug: "building-partnerships-food-africa",
    content: `
      <p>Food Africa provided an excellent platform for us to connect with industry leaders and showcase our premium Egyptian herbs and spices. We had the opportunity to meet with one of our valued clients, present our latest product samples, and discuss future collaboration opportunities.</p>
      
      <p>As one of Africa's premier food industry exhibitions, Food Africa attracts participants from across the continent and beyond. Our participation underscores our commitment to the African market and our recognition of its growing importance in the global food industry.</p>
      
      <p>During the exhibition, we:</p>
      <ul>
        <li>Showcased our expanded product range, including new organic certifications</li>
        <li>Conducted tasting sessions highlighting the unique flavors of Egyptian herbs</li>
        <li>Engaged with potential distributors from various African countries</li>
        <li>Participated in panel discussions on sustainable agriculture and ethical sourcing</li>
      </ul>
      
      <p>The feedback we received was overwhelmingly positive, with particular praise for our commitment to quality and sustainability. We're already looking forward to next year's event and the opportunity to further strengthen our presence in the African market.</p>
    `
  },
  {
    title: "Sustainable Farming Practices: Our Commitment to the Environment",
    excerpt: "Exploring how our sustainable farming methods are preserving Egypt's natural resources while producing premium herbs and spices.",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "Nov 15, 2024",
    slug: "sustainable-farming-practices",
    content: `
      <p>At Egy Herbs Global, sustainability is at the core of our operations. Our commitment to environmentally friendly farming practices not only produces superior herbs and spices but also helps preserve Egypt's precious natural resources for future generations.</p>
      
      <p>Water conservation is particularly important in Egypt's arid climate. We've implemented advanced drip irrigation systems that reduce water usage by up to 60% compared to traditional methods. Additionally, our water recycling programs ensure that nothing goes to waste.</p>
      
      <p>Our sustainable practices include:</p>
      <ul>
        <li>Organic cultivation methods that eliminate harmful chemicals</li>
        <li>Crop rotation to maintain soil health and biodiversity</li>
        <li>Natural pest management techniques that protect beneficial insects</li>
        <li>Solar power for processing facilities to reduce our carbon footprint</li>
        <li>Biodegradable packaging solutions to minimize environmental impact</li>
      </ul>
      
      <p>These efforts have earned us recognition from environmental organizations and certification bodies. More importantly, they align with our belief that business success and environmental stewardship can and must go hand in hand.</p>
      
      <p>As we continue to grow, we remain committed to expanding our sustainable practices and setting new standards for the industry. We believe that the finest herbs and spices should come from the healthiest ecosystems, cultivated with respect for nature and future generations.</p>
    `
  },
  {
    title: "The Health Benefits of Egyptian Herbs: Ancient Wisdom for Modern Wellness",
    excerpt: "Discover the traditional medicinal properties of Egyptian herbs that have been valued for centuries.",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "Oct 22, 2024",
    slug: "health-benefits-egyptian-herbs",
    content: `
      <p>Egyptian herbs have been prized for their medicinal properties since ancient times. From the papyrus scrolls of ancient physicians to modern scientific research, these natural remedies have consistently demonstrated their value in supporting health and wellness.</p>
      
      <p>Chamomile, one of Egypt's most beloved herbs, has been used for thousands of years as a natural remedy for sleep disorders, anxiety, and digestive issues. Modern research has confirmed its anti-inflammatory and antioxidant properties, making it as relevant today as it was in the time of the pharaohs.</p>
      
      <p>Hibiscus, another Egyptian staple, is rich in vitamin C and antioxidants. Studies have shown its potential benefits for heart health, including helping to lower blood pressure and reduce cholesterol levels. Its vibrant color and tart flavor make it a popular choice for herbal teas worldwide.</p>
      
      <p>Other notable Egyptian herbs and their benefits include:</p>
      <ul>
        <li>Fenugreek: Supports digestive health and may help regulate blood sugar</li>
        <li>Black Seed (Nigella sativa): Known for its immune-boosting and anti-inflammatory properties</li>
        <li>Mint: Soothes digestive discomfort and provides respiratory relief</li>
        <li>Anise: Aids digestion and may help with respiratory conditions</li>
      </ul>
      
      <p>At Egy Herbs Global, we take pride in preserving these traditional herbal treasures while ensuring they meet modern standards for quality and safety. Our careful cultivation and processing methods help maintain the natural compounds that give these herbs their beneficial properties.</p>
      
      <p>As interest in natural wellness continues to grow globally, we're committed to sharing Egypt's herbal heritage with the world, bridging ancient wisdom with contemporary health needs.</p>
    `
  },
  {
    title: "Quality Control: The Science Behind Our Premium Products",
    excerpt: "An inside look at our rigorous testing and quality assurance processes that ensure consistent excellence.",
    image: "https://images.unsplash.com/photo-1581093458791-9d09a5c0d6e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    date: "Sep 5, 2024",
    slug: "quality-control-science",
    content: `
      <p>Quality is never an accident; it's the result of intelligent effort. At Egy Herbs Global, our commitment to excellence is reflected in our comprehensive quality control processes that span from field to final product.</p>
      
      <p>Our quality journey begins in the field, where we carefully monitor growing conditions, soil health, and plant development. Regular testing ensures that our herbs and spices are free from contaminants and grown according to organic standards.</p>
      
      <p>Once harvested, our products undergo a series of rigorous tests in our state-of-the-art laboratory facilities. These include:</p>
      <ul>
        <li>Microbiological testing to ensure safety</li>
        <li>Chemical analysis to verify the presence of active compounds</li>
        <li>Moisture content measurement to prevent spoilage</li>
        <li>Sensory evaluation to assess aroma, flavor, and appearance</li>
        <li>Foreign matter inspection to ensure purity</li>
      </ul>
      
      <p>Our quality control team includes food scientists, microbiologists, and herbal experts who work together to maintain our exacting standards. We regularly update our testing protocols to incorporate the latest scientific advances and regulatory requirements.</p>
      
      <p>Beyond our internal processes, we also partner with independent certification bodies to verify our quality claims. Our facilities are regularly audited to ensure compliance with international standards for food safety and organic production.</p>
      
      <p>This unwavering commitment to quality has earned us the trust of customers in over 50 countries. When you choose Egy Herbs Global products, you can be confident that you're receiving herbs and spices that have passed dozens of quality checkpoints on their journey from our fields to your facility.</p>
    `
  }
];

// This function is required for static site generation with Next.js when using dynamic routes
export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find(p => p.slug === params.slug);
  
  if (!post) {
    notFound();
  }

  // Related posts (excluding current post)
  const relatedPosts = posts
    .filter(p => p.slug !== params.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("${post.image}")`,
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div>
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Calendar className="h-5 w-5" />
              <span>{post.date}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-sm p-8">
            {/* Back to blog link */}
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50 -ml-2">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            {/* Article content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share buttons */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center">
                <span className="text-gray-700 font-medium mr-4 flex items-center">
                  <Share2 className="h-4 w-4 mr-2" /> Share this article:
                </span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10 text-blue-600 border-blue-200 hover:bg-blue-50">
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10 text-sky-500 border-sky-200 hover:bg-sky-50">
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full w-10 h-10 text-blue-700 border-blue-200 hover:bg-blue-50">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Related Articles</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <div key={index} className="h-full">
                <Card className="overflow-hidden h-full border-0 shadow-lg rounded-xl group">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <Image
                      width={600}
                      height={338}
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center text-sm text-white bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      {relatedPost.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors">{relatedPost.title}</h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <Button variant="link" className="p-0 text-emerald-600 hover:text-emerald-700 font-medium flex items-center group">
                        Read More <ArrowLeft className="ml-2 w-4 h-4 rotate-180 transition-transform group-hover:translate-x-1" />
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