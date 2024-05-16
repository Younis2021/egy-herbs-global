// Home-Page-Data.js

import heroSecImg from "../../../img/hero.png";
import cardImage1 from "../../../img/637753703499444022.jpg";
import cardImage2 from "../../../img/637753705343367686.jpg";
import cardImage3 from "../../../img/637760380785167349.jpg";
import cardImage4 from "../../../img/637753718854066569.jpg";
import cardImage5 from "../../../img/637760378862477743.jpg";
import cardImage6 from "../../../img/637753718143134608.jpg";
import thidSecImg from "../../../img/L3A1858_950x.jpg";
import newsLetterCardImage1 from "../../../img/review1_x256.jpg";
import newsLetterCardImage2 from "../../../img/goldenmilk_x256.png";
import newsLetterCardImage3 from "../../../img/emotionalbalanca_ed87a0ec-6d10-41af-a2ed-a40823ae028e_x256.png";
import newsLetterCardImage4 from "../../../img/macaroot_x256.png";
import fifthSecImg from "../../../img/SHOT_1_0069_FLAT_950x.progressive.png_copy_950x.progressive.png.jpg";
import fifthSecStiker from "../../../img/illustration2_550x2.png";
import sixthSecImg from "../../../img/bgDesign.png";
import seventhcardIcon1 from "../../../img/tt_1_x1202.png";
import seventhcardIcon2 from "../../../img/tt_2_x1202.png";
import seventhcardIcon3 from "../../../img/tt_3_x1202.png";
import seventhcardIcon4 from "../../../img/tt_4_x1202.png";
import EighthSecImg1 from "../../../img/Facilities-83_1_1_700x2.jpg";
import EighthSecImg2 from "../../../img/Facilities-83_1_1_700x2.jpg";

export const HomePageData = [
  {
    Hero: {
      backGroundImg: heroSecImg,
      heading: {
        title: "Egy Herbs Global Nature",
        slogan: "Your Passport to Herbal Purity. Treasures From Soil to Soul.",
      },
      button: {
        text: "DEACOVER",
        link: "/",
      },
    },
    BestSellers: {
      title: "Shop Best Sellers",
      cards: [
        {
          id: 1,
          cardImage: cardImage1,
          cardText: {
            span: "Foundation Support",
            h2: "Turmeric Supreme® Extra Strength",
          },
          cardDetails: {
            rating: 5,
            reviewing: 302,
            pricing: 30.99,
          },
          button: "ADD TO CART",
        },
        {
          id: 2,
          cardImage: cardImage2,
          cardText: {
            span: "Foundation Support",
            h2: "Another Product Name",
          },
          cardDetails: {
            rating: 4,
            reviewing: 250,
            pricing: 25.99,
          },
          button: "ADD TO CART",
        },
        {
          id: 3,
          cardImage: cardImage3,
          cardText: {
            span: "Foundation Support",
            h2: "Yet Another Product",
          },
          cardDetails: {
            rating: 3,
            reviewing: 150,
            pricing: 19.99,
          },
          button: "ADD TO CART",
        },
        {
          id: 4,
          cardImage: cardImage4,
          cardText: {
            span: "Foundation Support",
            h2: "New Product Name",
          },
          cardDetails: {
            rating: 5,
            reviewing: 350,
            pricing: 35.99,
          },
          button: "ADD TO CART",
        },
        {
          id: 5,
          cardImage: cardImage5,
          cardText: {
            span: "Foundation Support",
            h2: "Popular Product",
          },
          cardDetails: {
            rating: 4,
            reviewing: 280,
            pricing: 29.99,
          },
          button: "ADD TO CART",
        },
        {
          id: 6,
          cardImage: cardImage6,
          cardText: {
            span: "Foundation Support",
            h2: "Bestseller Product",
          },
          cardDetails: {
            rating: 5,
            reviewing: 400,
            pricing: 39.99,
          },
          button: "ADD TO CART",
        },
      ],
    },
    ThirdSec: {
      backGroundImg: thidSecImg,
      text: {
        h1: "Not Sure Where To Start?",
        paragraph: {
          p1: "LET EGY HERBS GLOBAL BE YOUR GUIDE",
          p2: "Navigating the vast array of herbs and spices in the agricultural market can be daunting. At Egy Herbs Global, we understand the challenges you face in finding the right products for your needs. That's why we've crafted a concise yet comprehensive quiz designed to simplify your journey.",
        },
      },
      button: "TAKE THE LOOK",
    },
    ForthSec: {
      title: "Over 16,000 5 - Star Reviews For Our Award-Winning Products",
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
          span: "Brain Cognitive Support",
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
  },
];
