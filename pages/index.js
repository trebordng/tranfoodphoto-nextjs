import React from "react";
import portraitImage from "../public/page-image/pretty-lady.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import NoSsr from "../components/NoSsr";

const Index = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;

  return (
    <NoSsr>
      <section className="landing-page">
        <Fade duration={1500} delay={500}>
          <header className="title">{t.pageTitle}</header>
          <div className="subtitle">
            <em>{t.pageAuthor}</em>
          </div>
          <article className="pretty-lady">
            <Image
              alt="pretty-lady"
              src={portraitImage.src}
              layout="fill"
              objectFit="cover"
              className="portrait-border"
              quality={80}
            />
          </article>

          <Link href="about">
            <a>
              <button>{t.open}</button>
            </a>
          </Link>
        </Fade>
      </section>
    </NoSsr>
  );
};

export default Index;
