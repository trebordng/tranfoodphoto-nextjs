import React from "react";
import Fade from "react-reveal/Fade";
import Fancy from "./Fancy";
import DisplayImage from "./DisplayImage";

const AlbumSubContent = (props) => {
  return (
    <section className="page">
      <Fade duration={1500} delay={500}>
        <header className="page-title">{props.title}</header>
        <article className="page-padding">
          <Fancy>
            <p>
              <div className="box-wrapper">
                {props.array.map((image, index) => {
                  return (
                    <Fade>
                      <article className="album-image" key={index}>
                        <a data-fancybox="gallery" href={image.node.image.url}>
                          <DisplayImage
                            outerClass="display-image"
                            name={image.node.title}
                            src={image.node.image.url}
                            alt={image.node.alt}
                          />
                        </a>
                      </article>
                    </Fade>
                  );
                })}
              </div>
            </p>
          </Fancy>
        </article>
      </Fade>
    </section>
  );
};

export default AlbumSubContent;
