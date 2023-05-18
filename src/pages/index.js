import React, { useState, useRef, useEffect } from "react"
import { graphql } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

//import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header/Header"
import useTranslations from "../components/useTranslations"
import * as styles from "../style/_style.module.scss"
//import * as styles from "../components/index.module.css"



const IndexPage = ({data}) => {

  console.log(data)

  const {
    index_H2_1,
    chapter_1,
    projects
  } = useTranslations()

/*   const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.4 }
    )

    observer.observe(ref.current)

    return () => observer.disconnect()

  }, [isIntersecting])

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add("slide-in");
      });
    } else {
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]) */
  
  return (
    <>
      <Header />
        <section /* className={styles.about} */>
          <div className={styles.container}> 
            <h2>{index_H2_1}</h2>
            <p>{chapter_1}</p>
          </div>
        </section>

        <section className={styles.projects}>
          <h2>{projects}</h2>
          <div className={styles.projectsStorefront} /* ref={ref} */> 
          </div>
        </section>
    </>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "projects"}, extension: {eq: "jpg"}}) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
