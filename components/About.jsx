import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import Fade from "react-reveal/Fade";
import Fancybox from "./fancybox.js";

import firstImage from "../public/page-image/about-me/first.jpg";
import secondImage from "../public/page-image/about-me/2.jpg";
import thirdImage from "../public/page-image/about-me/3.jpg";
import finalImage from "../public/page-image/about-me/4.jpg";

const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  return (
    <Fade>
      <section className="page">
        <div className="page-title">{t.about}</div>
        <div className="page-padding">{t.aboutText1}</div>
        <div className="page-padding">{t.aboutText2}</div>
        <div className="page-padding">
          <Fancybox>
            <p>
              <div className="box-wrapper">
                <div  className="about-image">
                  <a data-fancybox="gallery" href={firstImage.src}>
                    <img alt="" src={firstImage.src} className="image" />
                  </a>
                </div>
                <div className="about-image">
                  <a data-fancybox="gallery" href={secondImage.src}>
                    <img alt="" src={secondImage.src} className="image" />
                  </a>
                </div>
                <div className="about-image">
                  <a data-fancybox="gallery" href={thirdImage.src}>
                    <img alt="" src={thirdImage.src} className="image" />
                  </a>
                </div>
                <div className="about-image">
                  <a data-fancybox="gallery" href={finalImage.src}>
                    <img alt="" src={finalImage.src} className="image" />
                  </a>
                </div>
              </div>
            </p>
          </Fancybox>
        </div>
      </section>
    </Fade>
  );
};

export default About;
