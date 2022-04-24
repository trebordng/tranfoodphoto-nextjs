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
import Image from "next/image";

const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  const example = [
    { src: firstImage.src, title: "Persimmons" },
    { src: secondImage.src, title: "about" },

    { src: thirdImage.src, title: "album" },
    { src: finalImage.src, title: "recipe" },
  ];
  return (
    <section className="page">
      <Fade duration={1500} delay={100}>
        <div className="page-title">{t.about}</div>
        <div className="page-padding">{t.aboutText1}</div>
        <div className="page-padding">{t.aboutText2}</div>
        <div className="page-padding">
          <Fancybox>
            <p>
              <div className="box-wrapper">
                {example.map((list) => {
                  return (
                    <div className="about-image">
                      <a data-fancybox="gallery" href={list.src}>
                        <div className="example-image">
                          <Image
                            alt={list.title}
                            src={list.src}
                            layout="fill"
                            objectFit="cover"
                            className="image-border"
                          />
                          <div className="image-text">{list.title}</div>

                          <div className="image-hover"></div>
                        </div>
                      </a>
                    </div>
                  );
                })}
              </div>
            </p>
          </Fancybox>
        </div>
      </Fade>
    </section>
  );
};

export default About;
