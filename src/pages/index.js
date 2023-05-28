import React, { useState, useRef, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

//import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header/Header"
import useTranslations from "../components/useTranslations"
import * as styles from "../style/_style.module.scss"
//import * as styles from "../components/index.module.css"



const IndexPage = ({data}) => {

  const projectsArray = data.allFile.nodes

  const {
    index_H2_1,
    chapter_1,
    projects
  } = useTranslations()

  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        //console.log(entry.target.children)
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    observer.observe(ref.current)
    //console.log(ref.current)
    return () => observer.disconnect()

  }, [isIntersecting])

  useEffect(() => {
    if (isIntersecting) {

      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.remove(styles.projectItem)
      })
      ref.current.querySelectorAll("div").forEach((el) => {
        el.classList.add(styles.normal)
      })
    } 
  }, [isIntersecting])
  
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
          <div className={styles.container}>
            <h2>{projects}</h2>
          </div>
          
          <div className={styles.projectsStorefront} ref={ref}> 
            {projectsArray.map(project => {
              return (               
                <GatsbyImage 
                  key={project.id} className={styles.projectItem}
                  image={project.childImageSharp.gatsbyImageData}
                  alt="project"
                  objectPosition="50% 0%"
                />               
              )
            })}
          </div>
        </section>
    </>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "projects"}, extension: {eq: "jpg"}, name: {eq: "cover"}}) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(height: 220)
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
