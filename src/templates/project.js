import React, { useState } from "react"
import { graphql } from "gatsby"
import Seo from "../components/seo"
import * as styles from "../style/_style.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import close from "../images/close_icon.svg"
import ImagesSwiper from "../components/ImagesSwiper/ImagesSwiper"


const Project = ({data, pageContext, children}) => {

  const [ showImageFull, setShowImageFull ] = useState(false)
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0)

  const imageCover = data.allFile.nodes.filter(node => node.name === `cover`)
  const imageAll = data.allFile.nodes.filter(node => node.name === `all`)
  const imagesNumber = data.allFile.nodes.length
  const imagesWithoutCover = data.allFile.nodes.filter(node => node.name !== `cover`).sort((a, b) => a.name - b.name)
  const imageTitles = data?.mdx?.frontmatter?.img_titles
  
  //console.log(imageTitles)
  const showFullImage = (i) => {
    setCurrentImageIndex(i)
    setShowImageFull(true)
  }
  return (
    <>
      {showImageFull && <div className={styles.fullImage}>
        <button onClick={() => setShowImageFull(false)}><img className={styles.close} src={close} alt="close icon"></img></button>
        <ImagesSwiper images={imagesWithoutCover} currentSlide={currentImageIndex} />
      </div>}

      <div className={styles.container}> 
        <h1  className={styles.projectsHeader}>{data.mdx.frontmatter.title}</h1>
        {imagesNumber <= 2 ?
          <div className={styles.projectsTwoImages}>
            <GatsbyImage 
              image={imageCover[0]?.childImageSharp?.gatsbyImageData}
              className={styles.projectImage}
              alt={`Website for ${data.mdx.frontmatter.title} general view`}
            />
            <GatsbyImage 
              image={imageAll[0]?.childImageSharp?.gatsbyImageData}
              className={styles.projectImage}
              alt={`Website for ${data.mdx.frontmatter.title} view in different devices`}
            />
          </div> :

          <div className={styles.projectsGalleryImages}>
            <GatsbyImage 
              image={imageCover[0].childImageSharp.gatsbyImageData}
              className={styles.projectImage}
              alt={`${data.mdx.frontmatter.title} general view`}
            />
            <div className={styles.gallery}>
              {imagesWithoutCover.map((img, i) => {

                return (
                  <div className={styles.galleryItemContainer} onClick={() => showFullImage(i)} key={img.childImageSharp.id}>
                    <h4 className={styles.projectImageTitle}>{imageTitles[i]}</h4>
                    <GatsbyImage                      
                      image={img.childImageSharp.gatsbyImageData}
                      className={styles.projectImageGallery}
                      alt={`Page of ${data.mdx.frontmatter.title}`}
                    />
                  </div>
                )
              })}
            </div>
          </div>
        }
        
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
        img_titles
      }
    }
  }
`