import * as React from "react"
//import { Link } from "gatsby"
//import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header/Header"
//import * as styles from "../components/index.module.css"



const IndexPage = () => {
  
  return (
    <>
      <Header />
      <Layout>
      
        <h1>Web solutions for you</h1>
        <p>
          Do you want to announce your case? Would you wish to tell each of your probable clients about attractive offers and benefits?
        </p>
        <p>
          So, yes, I can help you promote your product or service providing convenient solutions exactly for your current business.
        </p>
      </Layout>
    </>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
