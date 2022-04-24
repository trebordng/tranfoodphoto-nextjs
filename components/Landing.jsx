import React from "react";
import portraitImage from "../public/page-image/pretty-lady.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import Fade from "react-reveal/Fade";
import Image from "next/image";

const Landing = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;

  return (
    <section className="landing-page">
      <Fade duration={1500} delay={100}>
        <div className="title">{t.pageTitle}</div>
        <div className="subtitle">
          <em>{t.pageAuthor}</em>
        </div>
        <div className="pretty-lady">
          <Image
            alt="pretty-lady"
            src={portraitImage.src}
            layout="fill"
            objectFit="cover"
            className="portrait-border"
          />
        </div>

        <Link href="about">
          <a>
            <button>{t.open}</button>
          </a>
        </Link>
      </Fade>
    </section>
  );
};

export default Landing;
