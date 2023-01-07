/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import "./layout.css"
import * as customStyles from "../style/_style.module.scss"

const Layout = ({ children }) => {

  return (
    <>
      <main>{children}</main>
      <footer>
        <div className={customStyles.container}>
          {/* © 2022 - {new Date().getFullYear()} */}
        </div>
      </footer>     
    </>
  )
}

export default Layout
