import aboutHeroSecImg from "../../../img/contact/gaia-contact-hero_1920x1280_d2d33f19-09e8-4208-a657-4ef0d8056211_3440x2x.progressive2.jpg";
import aboutSecondSecImg from "../../../img/contact/contact-callout-echinacea_1080x_1080x_a5ad6aad-b555-4b6d-977c-46e3f787a326_720x2x2.jpg";
import aboutThirdSecImg from "../../../img/contact/contact-callout-echinacea_1080x_1080x_a5ad6aad-b555-4b6d-977c-46e3f787a326_720x2x2.jpg";
import aboutForthSecImg from "../../../img/logo-1s.jpg";

export const ContactData = [
  {
    Hero: {
      backgroundImage: aboutHeroSecImg,
      spans: {
        span2: "Contact & Support",
      },
      p: "We love to hear from our customers and herb enthusiasts! Explore helpful resources and contact us directly using the information below.",
    },
    SecondSec: {
      backgroundImage: aboutSecondSecImg,
      spans: {
        span2: "Connecting People, Plants & Planet to Create Healing",
      },
      p: "Since Gaia Herbs was just a seedling in 1987, we have remained true to our purpose: connecting people, plants, and planet to create healing. We knew then what many are coming to realize now—plants and people evolved together, that we are inextricably linked, and that plants hold the wisdom we need to heal.",
    },
    ThirdSec: {
      backGroundImg: aboutThirdSecImg,
      h1: "Helpful Resources",
      p2: "Below are some resources that may help but always feel free to contact us directly!",
      navLinks: [
        { text: "Shop Products", link: "/products" },
        { text: "Herb Reference Guide", link: "/" },
        { text: "Herbal FAQ", link: "/" },
        { text: "Where to Buy", link: "/" },
        { text: "International Shipping", link: "/" },
      ],
    },
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
