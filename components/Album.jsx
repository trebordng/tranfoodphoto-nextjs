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
import Image from "next/image";
import DisplayImage from "./DisplayImage";

const Album = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  const topRow = [
    { name: t.food, slug: "food", image: food },
    { name: t.drink, slug: "drink", image: drink },

    { name: t.action, slug: "action", image: action },
  ];
  const bottomRow = [
    { name: t.lifestyle, slug: "lifestyle", image: lifestyle },
    { name: t.art, slug: "art", image: art },
  ];
  return (
    <section className="page">
      <Fade duration={1500} delay={500}>
        <div className="page-title">{t.album}</div>
        <div className="page-padding">
          <div className="box-wrapper">
            {topRow.map((list) => {
              return (
                <div className="top-box-image" key={`${list.slug}`}>
                  <Link href={`/${list.slug}`}>
                    <a className="image-link">
                      <DisplayImage
                        outerClass="top-album"
                        name={list.name}
                        src={list.image.src}
                      />
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="box-wrapper">
            {bottomRow.map((list) => {
              return (
                <div className="bottom-box-image" key={`${list.slug}`}>
                  <Link href={`/${list.slug}`}>
                    <a className="image-link">
                      <DisplayImage
                        outerClass="bottom-album"
                        name={list.name}
                        src={list.image.src}
                      />
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Album;
