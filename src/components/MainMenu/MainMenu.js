import React from "react"
//import { Link } from "gatsby"
//import LocalizedLink from "../localizedLink"
import useTranslations from "../useTranslations"
import LanguagesSwitcher from "./LanguagesSwitcher"
import NavLink from "./NavLink"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import * as style from "./_MainMenu.module.scss"

const MainMenu = ({locale}) => {
console.log(locale)
    const { home,
            projects,
            contacts
            } = useTranslations()

  return (
    <nav className={style.mainMenu}>
        <div className={style.pages}>
            <NavLink to="/">{home}</NavLink>
            <AnchorLink to={locale === `en` ? `/#projects` : `/${locale}/#projects`}>{projects}</AnchorLink>
            <NavLink to="/contacts">{contacts}</NavLink>
        </div>

        <LanguagesSwitcher />

    </nav>
  )
}

export default MainMenu