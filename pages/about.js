import React from "react";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import Fade from "react-reveal/Fade";
import { Fancybox, DisplayImage } from "../components";
import firstImage from "../public/page-image/about-me/first.jpg";
import secondImage from "../public/page-image/about-me/2.jpg";
import thirdImage from "../public/page-image/about-me/3.jpg";
import finalImage from "../public/page-image/about-me/4.jpg";


const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  const example = [
    { src: firstImage.src, title: "Persimmons" },
    { src: secondImage.src, title: "Red Fruit" },

    { src: thirdImage.src, title: "Morning Tea" },
    { src: finalImage.src, title: "I Need Rhum" },
  ];
  return (
    <section className="page">
      <Fade duration={1500} delay={500}>
        <header className="page-title">{t.about}</header>
        <article className="page-padding">{t.aboutText1}</article>
        <article className="page-padding">{t.aboutText2}</article>
        <article className="page-padding">
          <Fancybox>
            <p>
              <div className="box-wrapper">
                {example.map((list) => {
                  return (
                    <article className="about-image" key={`${list.title}`}>
                      <a data-fancybox="gallery" href={list.src}>
                        <DisplayImage
                          outerClass="example-image"
                          name={list.title}
                          src={list.src}
                          alt={list.title}
                        />
                      </a>
                    </article>
                  );
                })}
              </div>
            </p>
          </Fancybox>
        </article>
      </Fade>
    </section>
  );
};

export default About;
