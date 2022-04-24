import React from 'react'
import Fade from "react-reveal/Fade";
import {Fancybox,DisplayImage} from './index';


const AlbumSubpage = (props) => {
  return (
    <section className="page">
      <Fade duration={1500} delay={500}>
        <header className="page-title">{props.title}</header>
        <article className="page-padding">
          <Fancybox>
            <p>
              <div className="box-wrapper">
                {(props.array).map((image, index) => {
                  return (
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
                  );
                })}
              </div>
            </p>
          </Fancybox>
        </article>
      </Fade>
    </section>
  )
}

export default AlbumSubpage