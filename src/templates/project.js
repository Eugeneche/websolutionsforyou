import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

// The normal <a> tag is modified here (so that internal links use gatsby-link/LocalizedLink
// More info:
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
const Project = ({data, pageContext, children}) => {
  
  //console.log(pageContext)

  //const images = data.allFile.nodes
  const imageCover = data.allFile.nodes.filter(node => node.name === `cover`)
  const imageAll = data.allFile.nodes.filter(node => node.name === `all`)
  //console.log(data)
  return (
    <>
      <div className={styles.container}> 
        <h1  className={styles.projectsHeader}>{data.mdx.frontmatter.title}</h1>
        <div className={styles.projectsImages}>
          <GatsbyImage 
            image={imageCover[0].childImageSharp.gatsbyImageData}
            className={styles.projectImage}
            alt={`Website for ${data.mdx.frontmatter.title} general view`}
          />
          <GatsbyImage 
            image={imageAll[0].childImageSharp.gatsbyImageData}
            className={styles.projectImage}
            alt={`Website for ${data.mdx.frontmatter.title} view in devices`}
          />
        </div>
        <div className={styles.contentFromMdx} dangerouslySetInnerHTML={{__html: `${data.mdx.body}`}} />
      </div>
    </>
)}

export default Project

export const Head = ({ data }) => (
  <Seo title={data?.mdx?.frontmatter.seo_title} description={data?.mdx?.frontmatter.seo_description}>
    <script type="application/ld+json">{JSON.stringify({})}</script>
  </Seo>
)


export const query = graphql`
query Project($directory: String, $locale: String, $id: String) {
  allFile(
    filter: {sourceInstanceName: {eq: "projects"}, extension: {eq: "jpg"}, relativeDirectory: {eq: $directory}}
  ) {
    nodes {
      name
      childImageSharp {
        gatsbyImageData
        id
      }
    }
  }
  mdx(fields: {locale: {eq: $locale}}, id: {eq: $id}) {
    body
    frontmatter {
      seo_description
      seo_title
      title
    }
  }
}
`