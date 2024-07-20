import React from "react";
import "./Supply-Chain.css";
import { SupplyChainData } from "./ContactData/SupplyChainData";
import NinthSec from "../Home-Page/9-Ninth-Sec/Ninth-Sec";
import Form from "./Form/Form";
import SecSec from "./Sec-Sec/Sec-Sec";
import ThirdSec from "../Home-Page/3-Third-Sec/Third-Sec";
import ContactThirdSec from "./Third-Sec/Contact-Third-Sec";
import TenthSec from "../Home-Page/10-Tenth-Sec/Tenth-Sec";
import Footer from "../Home-Page/11-Footer/Footer";
import ContactForthSec from "./Forth-Sec/Contact-Forth-Sec";

export default function SupplyChain() {
  const ContactContent = SupplyChainData[0].Hero;
  const thirdSecContent = SupplyChainData[0].ThirdSec;

  return (
    <div className="supply-chain">
      <NinthSec
        backgroundImage={ContactContent.backgroundImage}
        spans={ContactContent.spans}
        p={ContactContent.p}
      />
      <SecSec />
      {thirdSecContent.map((element, i) => (
        <ThirdSec
          key={i} // Added key for each element
          backGroundImg={element.backGroundImg}
          p1={element.p1}
          h1={element.h1}
          p2={element.p2}
          link={element.buttonLink}
          text={element.buttonText}
          navLinks={element.navLinks}
          direction={element.direction}
        />
      ))}

      {/* <Form />
      <ContactThirdSec />
      <ContactForthSec /> */}
      <TenthSec />
      <Footer />
    </div>
  );
}
