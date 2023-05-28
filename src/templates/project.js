import React from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

// The normal <a> tag is modified here (so that internal links use gatsby-link/LocalizedLink
// More info:
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
const Project = ({data/* , pageContext */}) => {
  
  //console.log(pageContext)

  const images = data.allFile.nodes
  console.log(images)
  return (
    <>
      <div className={styles.container}> 
        <h1>{data.mdx.frontmatter.title}</h1>
        <div className={styles.images}>
          {images.map(image => {
            return (
              <GatsbyImage 
                key={image.childImageSharp.id}
                image={image.childImageSharp.gatsbyImageData}
                alt="img"
              />
            )
          })}
        </div>
        <p>{data.mdx.body}</p>
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
      childImageSharp {
        gatsbyImageData
        id
      }
    }
  }
  mdx(fields: {locale: {eq: $locale}}, id: {eq: $id}) {
    frontmatter {
      seo_description
      seo_title
      title
    }
  }
}
`