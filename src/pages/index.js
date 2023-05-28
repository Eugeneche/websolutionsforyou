import React, { useState, useRef, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Seo from "../components/seo"
import Header from "../components/Header/Header"
import useTranslations from "../components/useTranslations"
import * as styles from "../style/_style.module.scss"
import "../style/s.css"
import LocalizedLink from "../components/localizedLink"



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
    console.log(ref.current)
    return () => observer.disconnect()

  }, [isIntersecting])

  useEffect(() => {
    if (isIntersecting) {

      ref.current.querySelectorAll(`.before-load`).forEach((el) => {
        console.log('a')
        el.classList.remove(`before-load`)
        el.classList.add(`after-load`)
      })
/*       ref.current.querySelectorAll(`.a`).forEach((el) => {
        el.classList.add(`.after-load`)
      }) */
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
                <div key={project.id} className="before-load">  
                  <LocalizedLink to={`/${project.relativeDirectory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()}`}>           
                    <GatsbyImage                      
                      image={project.childImageSharp.gatsbyImageData}
                      alt="project"
                      objectPosition="50% 0%"
                      /* style={{position: "static"}} */
                    />       
                  </LocalizedLink>   
                </div>     
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
        relativeDirectory
        id
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
