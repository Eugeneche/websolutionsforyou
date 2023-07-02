/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

/* const yandexCode = ` 
    (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(94176286, "init", {
          defer:true,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
    });
`
 */
const Seo = ({ description, title, children, imageUrl, imageAlt }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        ogImageDefault: file(relativePath: {eq: "preview.jpg"}) {
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    `
  )

  const metaDescription = description || data.site.siteMetadata.description
  const defaultTitle = data.site.siteMetadata?.title

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta property="twitter:image:alt" content={imageAlt || "Web solutions studio"} />
      <meta property="og:image" content={constructUrl(data.site.siteMetadata.siteUrl, data.ogImageDefault?.childImageSharp?.fixed?.src)} />
      <meta name="twitter:image" content={constructUrl(data.site.siteMetadata.siteUrl, data.ogImageDefault?.childImageSharp?.fixed?.src)} />
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={data.site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

const constructUrl = (baseUrl, path) =>
  (!baseUrl || !path) ? null : `${baseUrl}${path}`


export default Seo
