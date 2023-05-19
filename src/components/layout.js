/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { MDXProvider } from "@mdx-js/react"
import MainMenu from "./MainMenu/MainMenu"
import MdxLink from "./mdxLink"

import "./layout.css"
//import * as customStyles from "../style/_style.module.scss"


const LocaleContext = React.createContext()

// Use the built-in Context API to make the "locale" available to every component in the tree
// This e.g. enables the LocalizedLink to function correctly
// As this component wraps every page (due to the wrapPageElement API) we can be sure to have
// the locale available everywhere!
const Layout = ({ children, pageContext: { locale } }) => (
  <LocaleContext.Provider value={{ locale }}>
    <div className="global-wrapper">
      {/* <header className="global-header"> */}
        <MainMenu />
      {/* </header> */}
      <MDXProvider components={{ a: MdxLink }}>
        <main>{children}</main>
        <footer>
        <div>
          © 2022 - 2023
        </div>
      </footer> 
      </MDXProvider>
    </div>
  </LocaleContext.Provider>
)

export { Layout, LocaleContext }

/* const Layout = ({ children }) => {

  return (
    <>
      <main>{children}</main>
      <footer>
        <div className={customStyles.container}>
          © 2022 - {new Date().getFullYear()}
        </div>
      </footer>     
    </>
  )
}

export default Layout */
