import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as styles from "./_ImagesSwiper.module.scss"
//import "./imagesSwiper.scss"
import Carousel from "nuka-carousel"

import left from "../../images/arrow-chevron-left.svg"
import right from "../../images/arrow-chevron-right.svg"


const ImagesSwiper = (props) => {

    return (
        <Carousel 
            wrapAround={true}
            pauseOnHover={false}
            slideIndex={props.currentSlide}
            /* animation="zoom" */
            /* adaptiveHeight={true} */
            /* className={styles.gallery} */
/*             defaultControlsConfig={{
                nextButtonStyle: {display: "none"},
                prevButtonStyle: {display: "none"},
                pagingDotsClassName: "dot",
                pagingDotsContainerClassName: "dots"
            }} */
            renderCenterLeftControls={({ previousSlide }) => (
                <button onClick={previousSlide}><img className={styles.arrowLeft} src={left}></img></button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button onClick={nextSlide}><img className={styles.arrowRight} src={right}></img></button>
              )}
        >
            {props.images.map(img => {

                return (
                    <div className={styles.slide} key={img.childImageSharp.id}>
                        
                        <GatsbyImage 
                            className={styles.increased}
                            image={img.childImageSharp.gatsbyImageData} 
                            style={{display: "block", touchAction: "pinch-zoom pan-y"}}
                            imgStyle={{height: "auto", maxWidth: "max-content", touchAction: "pinch-zoom pan-y"}}
                            alt={`Image of the project`} 
                            objectPosition="50% 50%"
                        />

                    </div>
                )
            })}
          
        </Carousel>
    )
}

export default ImagesSwiper