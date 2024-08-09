import aboutHeroSecImg from "../../../img/testing/6.jpg";
import aboutThirdSecImg from "../../../img/product/certified_72x.png";
import aboutForthSecImg from "../../../img/global/logo-1s.jpg";

export const ProductsData = [
  {
    Hero: {
      backgroundImage: aboutHeroSecImg,
      spans: {
        span2: "All Products",
      },
      p: "The support you want from high-quality, plant-based formulas you can trust—assured for purity, potency, and integrity.",
    },
    SecondSec: {
      Left: {
        PriceRange: {
          firstRange: "$10 - $25",
          secondRange: "$25 - $50",
          thirdRange: "$50 - $75",
        },
        Type: {
          type1: "Herbs",
          type2: "Powder Capsules",
          type3: "Herbs",
          type4: "Herbs",
          type5: "Herbs",
        },
      },
      Right: {},
    },

    ThirdSec: {
      Left: {
        backgroundImage: aboutThirdSecImg,
      },
      Right: {
        h2: "Certified B Corporation",
        p: "Gaia Herbs is proud to be a Certified B Corporation®, actively working to build a more inclusive and sustainable economy. Certified B Corporations are businesses that meet the highest standards of verified social and environmental performance, public transparency, and legal accountability to balance profit and purpose.",
      },
    },
    ForthSec: {
      Right: {
        backgroundImage: aboutForthSecImg,
      },
      Left: {
        h2: "Why Choose Egy Herbs Global ?",
        p1: "Egy Herbs For Import & Export is a family owned company; it was founded in 1986 as a grower and producer of Herbs, Spices and Seeds, then we started manufacturing our own production to be distributed by the local exporting agents and offices",
        p2: "afterwards we decided to export our own production ourselves as we are known all over Egypt that we are the specialists in these fields to present Good Quality for competitive prices .",
      },
    },
  },
];
