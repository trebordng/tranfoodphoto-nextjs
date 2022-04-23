import React from "react";
import portraitImage from "../public/page-image/pretty-lady.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import Fade from "react-reveal/Fade";

const Landing = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;

  return (
    <Fade >
      <section className="landing-page">
        <div className="title">{t.pageTitle}</div>
        <div className="subtitle"><em>{t.pageAuthor}</em></div>
        <img
          src={portraitImage.src}
          className="pretty-lady"
          alt="pretty-lady"
        />
        <Link href="about">
          <a>
            <button>{t.open}</button>
          </a>
        </Link>
      </section>
    </Fade>
  );
};

export default Landing;
