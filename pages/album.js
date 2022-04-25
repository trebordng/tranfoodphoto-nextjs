import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import Fade from "react-reveal/Fade";
import food from "../public/page-image/album/food-page.jpg";
import drink from "../public/page-image/album/drink-page.jpg";
import action from "../public/page-image/album/action-page.jpg";
import lifestyle from "../public/page-image/album/lifestyle-page.jpg";
import art from "../public/page-image/album/food-page.jpg";
import { DisplayImage } from "../components";

const Album = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  const topRow = [
    { name: t.food, slug: "food", image: food },
    { name: t.drink, slug: "drink", image: drink },

    { name: t.action, slug: "action", image: action },
  ];

  return (
    <section className="page">
      <Fade duration={1500} delay={500}>
        <header className="page-title">{t.album}</header>
        <section className="page-padding">
          <div className="box-wrapper">
            {topRow.map((list) => {
              return (
                <article className="  top-album" key={`${list.slug}`}>
                  <Link href={`/${list.slug}`}>
                    <a className="image-link">
                      <DisplayImage
                        outerClass="top-bottom-image"
                        name={list.name}
                        src={list.image.src}
                      />
                    </a>
                  </Link>
                </article>
              );
            })}
          </div>
          <div className="box-wrapper">
            <article className="bottom-album">
              <Link href="/lifestyle">
                <a className="image-link">
                  <DisplayImage
                    outerClass="top-bottom-image"
                    name={t.lifestyle}
                    src={lifestyle.src}
                    alt={t.lifestyle}
                  />
                </a>
              </Link>
            </article>
            <article className="bottom-album">
              <Link href="https://tranphotographicart.com/">
                <a
                  className="image-link"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <DisplayImage
                    outerClass="top-bottom-image"
                    name={t.art}
                    src={art.src}
                    alt={t.art}
                  />
                </a>
              </Link>
            </article>
          </div>
        </section>
      </Fade>
    </section>
  );
};

export default Album;
