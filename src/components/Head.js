import React from "react"
import Seo from "./seo"

const Head = (seoData) => {

    return ( 
      <>
        <Seo title={seoData.title} description={seoData.description} />
      </>
    )
  }

export default Head