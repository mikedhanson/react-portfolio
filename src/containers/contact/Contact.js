import React, { useContext } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
//import ContactForm from "./ContactForm";

export default function Contact() {
  const { isDark } = useContext(StyleContext);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <SocialMedia />
            </div>
          </div>
          {/*<ContactForm /> */}
          <div className="contact-image-div">
            <img
              alt=""
              src={require(`../../assets/images/${
                isDark ? "contactMailDark.svg" : "contactMail.webp"
              }`)}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
