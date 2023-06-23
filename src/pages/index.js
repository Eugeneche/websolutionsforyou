import React, { useState, useRef, useEffect } from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Header from "../components/Header/Header"
import useTranslations from "../components/useTranslations"
import * as styles from "../style/_style.module.scss"
import "../style/s.css"
import LocalizedLink from "../components/localizedLink"
//import Head from "../components/Head"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {

  const projectsArray = data.allFile.nodes
  const order = data.file.childMdx.frontmatter.order
  const orderedProjectsArray = []

  order.forEach(projectName => {
    projectsArray.forEach(project => {
      if (projectName === project.relativeDirectory) {
        orderedProjectsArray.push(project)
      } 
      return orderedProjectsArray
    })
  })
  
  const {
    index_H2_1,
    chapter_1,
    index_H2_2,
    chapter_2_1,
    chapter_2_2,
    chapter_2_3,
    chapter_2_4,
    projects
  } = useTranslations()

  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { threshold: 0.2 }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()

  }, [isIntersecting])

  useEffect(() => {
    if (isIntersecting) {

      ref.current.querySelectorAll(`.before-load`).forEach((el) => {

        el.classList.remove(`before-load`)
        el.classList.add(`after-load`)
      })
    } 
  }, [isIntersecting])
  
  return (
    <>
      {/* <Head title={seo_title} description={seo_description} /> */}
      <Header />
      <section>
        <div className={styles.container}> 
          <h2>{index_H2_1}</h2>
          <p>{chapter_1}</p>
          <h2>{index_H2_2}</h2>
          <p>{chapter_2_1}</p>
          <p>{chapter_2_2}</p>
          <p>{chapter_2_3}</p>
          <p>{chapter_2_4}</p>
        </div>
      </section>

      <section id="projects" className={styles.projects}>
        <div className={styles.container}>
          <h2>{projects}</h2>
        </div>
        
        <div className={styles.projectsStorefront} ref={ref}> 
          {orderedProjectsArray.map(project => {
            return (                   
              <LocalizedLink key={project.id} className="before-load" to={`/${project.relativeDirectory.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[" "]/g, "-").toLowerCase()}`}>           
                <GatsbyImage  
                                      
                  image={project.childImageSharp.gatsbyImageData}
                  alt="project"
                  objectPosition="50% 0%"
                  imgClassName="project-image"
                />       
              </LocalizedLink>                 
            )
          })}
        </div>
      </section>
    </>
  )
}

export const query = graphql`
query ($locale: String) {
  allFile(
    filter: {sourceInstanceName: {eq: "projects"}, extension: {eq: "jpg"}, name: {eq: "cover"}}
  ) {
    nodes {
      relativeDirectory
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
  file(name: {eq: "order"}) {
    childMdx {
      frontmatter {
        order
      }
    }
  }
  mdx(
    fields: {locale: {eq: $locale}}
    frontmatter: {index_seo_description: {ne: null}, index_seo_title: {ne: null}}
  ) {
    frontmatter {
      index_seo_description
      index_seo_title
    }
  }
}
`



export default IndexPage

export const Head = ({ data }) => {
console.log(data.mdx.frontmatter.index_seo_title)
  return ( 
    <>
      <Seo title={data.mdx.frontmatter.index_seo_title} description={data.mdx.frontmatter.index_seo_description}/>
    </>
  )
}