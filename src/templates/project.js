import React from "react"
import { graphql } from "gatsby"
//import { MDXRenderer } from "gatsby-plugin-mdx"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"

// The normal <a> tag is modified here (so that internal links use gatsby-link/LocalizedLink
// More info:
// https://www.gatsbyjs.com/docs/mdx/customizing-components/
const Project = ({data, pageContext}) => {
  console.log(data)
  console.log(pageContext)
  return (
    <>
      <div className={styles.container}> 
        <h1>{data.mdx.frontmatter.title}</h1>
        <p>{data.mdx.body}</p>
      </div>
      
      {/* <MDXRenderer>{data.mdx.body}</MDXRenderer> */}
    </>
)}

export default Project

export const Head = ({ data }) => (
  <Seo title={data?.mdx?.frontmatter.seo_title} description={`Půjčit ${data?.mdx?.frontmatter.category} - ${data?.mdx?.frontmatter.name}, jen ŘP a OP, bez kauce!`}>
    <script type="application/ld+json">{JSON.stringify({})}</script>
  </Seo>
)


export const query = graphql`
  query Project($locale: String!, $title: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
      }
      body
    }
  }
`