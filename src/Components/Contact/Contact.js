import React from "react";
import "./Contact.css";
import { ContactData } from "./ContactData/ContactData";
import NinthSec from "../Home-Page/9-Ninth-Sec/Ninth-Sec";
import Form from "./Form/Form";
import SecSec from "./Sec-Sec/Sec-Sec";
import ThirdSec from "../Home-Page/3-Third-Sec/Third-Sec";
import ContactThirdSec from "./Third-Sec/Contact-Third-Sec";
import TenthSec from "../Home-Page/10-Tenth-Sec/Tenth-Sec";
import Footer from "../Home-Page/11-Footer/Footer";
import ContactForthSec from "./Forth-Sec/Contact-Forth-Sec";

export default function Contact() {
  const ContactContent = ContactData[0].Hero;
  const thirdSecContent = ContactData[0].ThirdSec;

  return (
    <div className="contact">
      <NinthSec
        backgroundImage={ContactContent.backgroundImage}
        spans={ContactContent.spans}
        p={ContactContent.p}
      />
      <SecSec />
      <ThirdSec
        backGroundImg={thirdSecContent.backGroundImg}
        p1={thirdSecContent.p1}
        h1={thirdSecContent.h1}
        p2={thirdSecContent.p2}
        link={thirdSecContent.buttonLink}
        text={thirdSecContent.buttonText}
        navLinks={thirdSecContent.navLinks}
      />
      <Form />
      <ContactThirdSec />
      <ContactForthSec />
      <TenthSec />
      <Footer />
    </div>
  );
}
