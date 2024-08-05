// Home-Page-Data.js
import extractedData from "../../../request_images/extracted_data.json";

import heroSecImg from "../../../img/home/hero.png";
import thidSecImg from "../../../img/home/L3A1858_950x.jpg";
import newsLetterCardImage1 from "../../../img/home/review1_x256.jpg";
import newsLetterCardImage2 from "../../../img/home/goldenmilk_x256.png";
import newsLetterCardImage3 from "../../../img/home/emotionalbalanca_ed87a0ec-6d10-41af-a2ed-a40823ae028e_x256.png";
import newsLetterCardImage4 from "../../../img/home/macaroot_x256.png";
import fifthSecImg from "../../../img/home/SHOT_1_0069_FLAT_950x.progressive.png_copy_950x.progressive.png.jpg";
import fifthSecStiker from "../../../img/home/illustration2_550x2.png";
import sixthSecImg from "../../../img/home/bgDesign.png";
import seventhcardIcon1 from "../../../img/home/tt_1_x1202.png";
import seventhcardIcon2 from "../../../img/home/tt_2_x1202.png";
import seventhcardIcon3 from "../../../img/home/tt_3_x1202.png";
import seventhcardIcon4 from "../../../img/home/tt_4_x1202.png";
import EighthSecImg1 from "../../../img/home/Facilities-83_1_1_700x2.jpg";
import EighthSecImg2 from "../../../img/home/Facilities-83_1_1_700x2.jpg";
import NinthSecImg from "../../../img/home/Burdock_1103_3440x2x.progressive2.jpg";
import tenththcardIcon1 from "../../../img/Plant-Powered_200x200_636e8e8d-2bc4-4b8b-b141-93261da0f38a_100x2.png";
import tenththcardIcon2 from "../../../img/Potent_200x200_ad8fbab8-d58c-48a0-a1a1-b1d2d742fde9_100x2.png";
import tenththcardIcon3 from "../../../img/Pure_200x200_d28e4a8d-f3ee-4849-b2f7-8e97aff720ba_100x2.png";
import tenththcardIcon4 from "../../../img/Transparent_200x200_50b320a8-5626-43da-8ce3-43eb97747cbf_100x2.png";

export const HomePageData = [
  {
    Hero: {
      backGroundImg: heroSecImg,
      heading: {
        title: "Egy Herbs Global",
        slogan: "Your Passport to Herbal Purity Treasures From Soil to Soul.",
      },
      button: {
        text: "DESCOVER",
        link: "/products",
      },
    },

    BestSellers: {
      title: "Shop Best Sellers",
      cards: extractedData.images.map((image, index) => ({
        id: index + 1,
        y: index % 2 === 0 ? 100 : -100,
        delay: 0.2 * (index + 1),
        cardImage: image,
        cardText: {
          span: "Foundation Herbs",
          h2: `Product ${index + 1}`,
        },
        cardDetails: {
          rating: Math.floor(Math.random() * 5) + 1, // Random rating for example
          reviewing: Math.floor(Math.random() * 500) + 1, // Random number of reviews
          pricing: (Math.random() * 50).toFixed(2), // Random price for example
        },
        button: "MORE DETAILS",
        link: "/products",
      })),
    },

    ThirdSec: {
      backGroundImg: thidSecImg,
      h1: "Not Sure Where To Start?",
      p1: "LET EGY HERBS GLOBAL BE YOUR GUIDE",
      p2: "Navigating the vast array of herbs and spices in the agricultural market can be daunting. At Egy Herbs Global, we understand the challenges you face in finding the right products for your needs. That's why we're improving out products quality to simplify your journey.",
      buttonText: "TAKE A LOOK",
      buttonLink: "/products",
    },

    ForthSec: {
      title: "Thousands 5 - Star Reviews For Our Products",
      newsLetterCards: [
        {
          id: 1,
          cardImage: newsLetterCardImage1,
          span: "Herbs Collection",
          span2: "Shop All",
          h2: "Best Supplement Ever!",
          p: "I love this selection of herbs! I noticed a significant improvement in my agricultural yields within just a few days of use. It's like my crops are thriving like never before .",
          signature: "Kimberly P.",
        },
        {
          id: 2,
          cardVideoUrl: "https://www.youtube.com/embed/BaEzZUqmQDc",
          cardVideoTittle: "video",
        },
        {
          id: 3,
          cardImage: newsLetterCardImage2,
          span: "spices Collection",
          span2: "Shop All",
          h2: "Best Supplement Ever!",
          p: "I love this selection of herbs! I noticed a significant improvement in my agricultural yields within just a few days of use. It's like my crops are thriving like never before .",
          signature: "Kimberly P.",
        },
        {
          id: 4,
          cardVideoUrl: "https://www.youtube.com/embed/BaEzZUqmQDc",
          cardVideoTittle: "video",
        },
        {
          id: 5,
          cardImage: newsLetterCardImage3,
          span: "Herbs Collection",
          span2: "Shop All",
          h2: "Best Supplement Ever!",
          p: "I love this selection of herbs! I noticed a significant improvement in my agricultural yields within just a few days of use. It's like my crops are thriving like never before .",
          signature: "Kimberly P.",
        },
        {
          id: 6,
          cardVideoUrl: "https://www.youtube.com/embed/BaEzZUqmQDc",
          cardVideoTittle: "video",
        },
        {
          id: 7,
          cardImage: newsLetterCardImage4,
          span: "Herbs Collection",
          span2: "Shop All",
          h2: "Best Supplement Ever!",
          p: "I love this selection of herbs! I noticed a significant improvement in my agricultural yields within just a few days of use. It's like my crops are thriving like never before .",
          signature: "Kimberly P.",
        },
      ],
    },

    FifhSec: {
      backGroundImg: fifthSecImg,
      backGroundStiker: fifthSecStiker,
      text: {
        h1: '"Everything starts in the soil.”',
        paragraph: {
          p1: "HEALTHY SOIL, HEALTHY HERBS",
          p2: "This is truly a partnership united on common ground. Among our many pursuits, one passion that Gisele and Gaia Herbs clearly share is our belief in regenerative agriculture.",
          p3: "In fact, one of Gaia Herbs' proudest achievements is the Regenerative Organic Certification (ROC)™ at the silver level, a certification that considers not only soil health but farmworker fairness and animal welfare as well.",
        },
      },
      button: "UNDERSTAND OUR IMPACT",
    },

    SixthSec: {
      backGroundImg: sixthSecImg,
      text: {
        h1: "The Being Well Kit",
        paragraph: {
          p1: "WHOLE-BODY SUPPORT",
          p2: "Habitualize wellbeing with the Being Well Kit by Gaia Herbs, complete with five of our most highly-rated top sellers to provide whole-body support.",
          p3: "DETAILS",
          span: "Bundle & save 20% on this ritual only.",
        },
      },
      button: "ADD TO CART",
    },

    SeventhSec: {
      title: "Why Egy Herbs Global ?",
      Cards: [
        {
          id: 1,
          cardImage: seventhcardIcon1,
          tittle: "From Seed to Shelf",
          p: "Wellness grows here. More than 3 million plants grow in the rich soil of the 350-acre Gaia Herbs farm, nestled in the Blue Ridge Mountains of NC.",
          button: "Kimberly P.",
        },
        {
          id: 2,
          cardImage: seventhcardIcon2,
          tittle: "From Seed to Shelf",
          p: "Wellness grows here. More than 3 million plants grow in the rich soil of the 350-acre Gaia Herbs farm, nestled in the Blue Ridge Mountains of NC.",
          button: "Kimberly P.",
        },
        {
          id: 3,
          cardImage: seventhcardIcon3,
          tittle: "From Seed to Shelf",
          p: "Wellness grows here. More than 3 million plants grow in the rich soil of the 350-acre Gaia Herbs farm, nestled in the Blue Ridge Mountains of NC.",
          button: "Kimberly P.",
        },
        {
          id: 4,
          cardImage: seventhcardIcon4,
          tittle: "From Seed to Shelf",
          p: "Wellness grows here. More than 3 million plants grow in the rich soil of the 350-acre Gaia Herbs farm, nestled in the Blue Ridge Mountains of NC.",
          button: "Kimberly P.",
        },
      ],
    },

    EighththSec: {
      title: {
        span1: "OUR BLOG",
        span2: "Seeds of Knowledge",
      },
      Cards: [
        {
          id: 1,
          cardImage: EighthSecImg1,
          spans: {
            span1: "EDUCATION",
            span2: "PRODUCTS",
          },
          tittle:
            "What Are Postbiotics? Definition, Benefits, and Side Effects",
          p: "Most health-conscious people have known about the microbiome benefits of probiotics and prebiotics for years. But have you heard of postbiotics? They’re not a friendly bacteria ...",
          button: "Read More",
        },
        {
          id: 2,
          cardImage: EighthSecImg2,
          spans: {
            span1: "EDUCATION",
            span2: "PRODUCTS",
          },
          tittle:
            "What Are Postbiotics? Definition, Benefits, and Side Effects",
          p: "Most health-conscious people have known about the microbiome benefits of probiotics and prebiotics for years. But have you heard of postbiotics? They’re not a friendly bacteria ...",
          button: "Read More",
        },
      ],
    },

    NinthSec: {
      backgroundImage: NinthSecImg,
      spans: {
        span1: "DISCOVER THE EGHGL. DIFFERENCE",
        span2: "Connecting People, Plants & Planet to Create Healing",
      },
      p: "Since Egy Herbs Global was just a seedling in 1987, we have remained true to our purpose to help people nurture their health with nature. ",
      button: "LEARN MORE",
      link: "/about",
    },

    TenthSec: [
      {
        id: 1,
        cardImage: tenththcardIcon1,
        tittle: "Plant-Powered",
        p: "Harnessing traditional wisdom, delivering Nature’s vitality",
      },
      {
        id: 2,
        cardImage: tenththcardIcon2,
        tittle: "Plant-Powered",
        p: "Full spectrum formulas for an herb’s full array of beneficial",
      },
      {
        id: 3,
        cardImage: tenththcardIcon3,
        tittle: "Purity-Tested",
        p: "All products are screened for pesticides, microbes & heavy metals",
      },
      {
        id: 4,
        cardImage: tenththcardIcon4,
        tittle: "From Seed to Shelf",
        Link: "Meet Your Herbs",
        p: `Know what’s in your supplement— Meet Your Herbs to learn more`,
      },
    ],

    Footer: {
      UpperDiv: [
        {
          id: 1,
          h1: "Contact US",
          span: "Egypt - Fayoum – Ibshaway – Elbahr Elgedeed St",
          phone: +201013476272,
          mail: "info@egyherbsglobal-eg.com@gmail.com",
        },
        {
          id: 2,
          h1: "Featured Links",
          Links: {
            link1: "Our People",
            link2: "Latest Media",
            link3: "Our Branches",
            link4: "Organization",
          },
        },
        {
          id: 3,
          h1: "Newsletter",
          span: "Get in your inbox the latest News and",
          span2:
            "Subscribe and get our weekly newsletter We'll never share your email address",
          phone: +201013476272,
        },
        {
          id: 4,
          h1: "Quick Links",
          Links: {
            link1: "Home",
            link2: "About",
            link3: "Products",
            link4: "Contact",
            link5: "Certification",
          },
        },
      ],
      LowerDiv: {
        p1: "© 2024 Egy Herbs Global All Rights Reserved.",
        p2: "Privacy policy",
        p3: "Terms of service",
      },
    },
  },
];
