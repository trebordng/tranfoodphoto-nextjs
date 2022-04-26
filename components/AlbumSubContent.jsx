import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Fancy from "./Fancy";
import DisplayImage from "./DisplayImage";
import _ from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import en from "../locales/en";
import vie from "../locales/vie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
const AlbumSubContent = (props) => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vie;
  const [backToTop, setbackToTop] = useState(false);
  const [searchFilter, setSearchFilter] = useState("");
  const [filterObject, setFilterObject] = useState(props.array);
  const graphqlArray = props.array;

  function search() {
    let filtered = _.filter(graphqlArray, function (a) {
      return a.title.toLowerCase().includes(searchFilter.toLowerCase());
    });
    setFilterObject(filtered);
  }
  function reset() {
    setFilterObject(graphqlArray);
  }
  const back = (e) => {
    if (e.target.scrollTop >= 80) {
      setbackToTop(true);
    } else {
      setbackToTop(false);
    }
  };
  function changeAlbum(e) {
    const locale = e.target.value;
    router.push(locale);
  }
  function scrollTop() {
    const page = document.getElementById(router.asPath);
    page.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section id={router.asPath} className="page" onScroll={back}>
      <Fade duration={1500} delay={500}>
        <header className="page-title">{props.title}</header>
        {backToTop ? (
          <button className="back-to-top" onClick={scrollTop}>
            <FontAwesomeIcon className="angle-up" icon={faAngleUp} />
          </button>
        ) : (
          <></>
        )}

        <section className="image-padding">
          <article className="page-function">
            <select className="quick-link" onChange={changeAlbum}>
              <optgroup label="Change Album"></optgroup>
              <option value="drink">
                <a>{t.food}</a>
              </option>
              <option value="drink">{t.drink}</option>
              <option value="action">{t.action}</option>
              <option value="lifestyle">{t.lifestyle}</option>
              <option value="art">{t.art}</option>
            </select>
            <div className="search">
              <input
                placeholder={"e.g " + graphqlArray[0].title}
                className="search-input"
                type="text"
                onChange={(e) => setSearchFilter(e.target.value)}
              />

              <button onClick={search}>Search</button>
              <button onClick={reset}>Reset</button>
            </div>
          </article>
          <Fancy>
            <p>
              <div className="box-wrapper album-padding">
                {filterObject.map((image, index) => {
                  return (
                    <Fade key={index}>
                      <article className="album-image">
                        <a
                          data-fancybox="gallery"
                          href={image.image.url}
                          data-caption={image.title}
                        >
                          <DisplayImage
                            outerClass="display-image"
                            name={image.title}
                            src={image.image.url}
                            alt={image.alt}
                          />
                        </a>
                      </article>
                    </Fade>
                  );
                })}
              </div>
            </p>
          </Fancy>
        </section>
      </Fade>
    </section>
  );
};

export default AlbumSubContent;
