import aboutHeroSecImg from "../../../img/gaia-contact-hero_1920x1280_d2d33f19-09e8-4208-a657-4ef0d8056211_3440x2x.progressive2.jpg";
import aboutSecondSecImg from "../../../img/contact-callout-echinacea_1080x_1080x_a5ad6aad-b555-4b6d-977c-46e3f787a326_720x2x2.jpg";
import aboutThirdSecImg from "../../../img/contact-callout-echinacea_1080x_1080x_a5ad6aad-b555-4b6d-977c-46e3f787a326_720x2x2.jpg";
import aboutForthSecImg from "../../../img/logo-1.png";
import farmingImage from "../../../img/our-story-hero_3440x2x.progressive.png2.jpg";
import dryingImage from "../../../img/drying.jpeg";
import procesingImage from "../../../img/procesing.jpeg";
import packagingImage from "../../../img/packaging.jpeg";
import deliverygImage from "../../../img/delivery.jpeg";
import customergImage from "../../../img/customer.jpeg";

export const SupplyChainData = [
  {
    Hero: {
      backgroundImage: aboutHeroSecImg,
      spans: {
        span2: "Our Supply Chain",
      },
      p: "We love to hear from our customers and herb enthusiasts! Explore helpful resources and contact us directly using the information below.",
    },

    ThirdSec: [
      {
        backGroundImg: farmingImage,
        h1: "Farming",
        p2: "Our journey starts in the fields where our knowledgeable farmers cultivate our medicinal and aromatic plants. We employ sustainable farming practices that not only yield high-quality produce but also protect and enrich the environment. Our farmers carefully monitor the growth of each plant, ensuring that they are healthy and free from harmful chemicals.",
        // navLinks: [
        //   { text: "Shop Products", link: "/products" },
        //   { text: "Herb Reference Guide", link: "/" },
        //   { text: "Herbal FAQ", link: "/" },
        //   { text: "Where to Buy", link: "/" },
        //   { text: "International Shipping", link: "/" },
        // ],
        direction: "ltr",
        btn: "Read More",
      },
      {
        backGroundImg: dryingImage,
        h1: "Drying",
        p2: "Once harvested, the plants undergo a precise drying process. This step is essential for preserving the plants’ medicinal properties, flavor, and aroma. We use advanced drying techniques that maintain the integrity of the plants while preventing any damage or loss of beneficial compounds.",
        // navLinks: [
        //   { text: "Shop Products", link: "/products" },
        //   { text: "Herb Reference Guide", link: "/" },
        //   { text: "Herbal FAQ", link: "/" },
        //   { text: "Where to Buy", link: "/" },
        //   { text: "International Shipping", link: "/" },
        // ],
        direction: "rtl",
        btn: "Read More",
      },
      {
        backGroundImg: procesingImage,
        h1: "Processing",
        p2: "The dried plants are then sent to our processing facilities. Here, we use a combination of traditional methods and modern technology to convert the raw plants into various forms like powders, extracts, or whole dried herbs. Our processing methods are designed to preserve the potency of the plants while ensuring safety and cleanliness.",
        // navLinks: [
        //   { text: "Shop Products", link: "/products" },
        //   { text: "Herb Reference Guide", link: "/" },
        //   { text: "Herbal FAQ", link: "/" },
        //   { text: "Where to Buy", link: "/" },
        //   { text: "International Shipping", link: "/" },
        // ],
        direction: "ltr",
        btn: "Read More",
      },
      {
        backGroundImg: packagingImage,
        h1: "Packaging",
        p2: "We understand that proper packaging is crucial in maintaining the quality of our products and ensuring they reach our customers in excellent condition. Our packaging process involves using high-quality materials and techniques to protect the products from damage during transit. We also focus on aesthetics, ensuring that the packaging is as appealing as the product inside.",
        // navLinks: [
        //   { text: "Shop Products", link: "/products" },
        //   { text: "Herb Reference Guide", link: "/" },
        //   { text: "Herbal FAQ", link: "/" },
        //   { text: "Where to Buy", link: "/" },
        //   { text: "International Shipping", link: "/" },
        // ],
        direction: "rtl",
        btn: "Read More",
      },
      {
        backGroundImg: deliverygImage,
        h1: "Delivery",
        p2: "Our commitment to quality extends to our delivery process. We partner with reliable logistics companies to ensure that our products reach our customers promptly and in perfect condition. We provide both domestic and international shipping, tracking each order closely to ensure a smooth delivery process.",
        // navLinks: [
        //   { text: "Shop Products", link: "/products" },
        //   { text: "Herb Reference Guide", link: "/" },
        //   { text: "Herbal FAQ", link: "/" },
        //   { text: "Where to Buy", link: "/" },
        //   { text: "International Shipping", link: "/" },
        // ],
        direction: "ltr",
        btn: "Read More",
      },
      {
        backGroundImg: customergImage,
        h1: "Customer Service",
        p2: "We believe that our relationship with our customers extends beyond the sale of our products. Our dedicated customer service team is always ready to assist with any queries or concerns. Whether you need help with an order, have a question about our products, or require after-sales support, we’re here to help. Our goal is to ensure a seamless and satisfying experience for every customer.",
        // navLinks: [
        //   { text: "Shop Products", link: "/products" },
        //   { text: "Herb Reference Guide", link: "/" },
        //   { text: "Herbal FAQ", link: "/" },
        //   { text: "Where to Buy", link: "/" },
        //   { text: "International Shipping", link: "/" },
        // ],
        direction: "rtl",
        btn: "Read More",
      },
    ],

    ForthSec: {
      Right: {
        backgroundImage: aboutForthSecImg,
      },
      Left: {
        h2: "Why Choose Egy Herbs Global ?",
        p1: "Egy Herbs For Import & Export is a family-owned company; it was founded in 1986 as a grower and producer of Herbs, Spices and Seeds, then we started manufacturing our own production to be distributed by the local exporting agents and offices",
        p2: "afterwards we decided to export our own production ourselves as we are known all over Egypt that we are the specialists in these fields to present Good Quality for competitive prices.",
      },
    },
  },
];
