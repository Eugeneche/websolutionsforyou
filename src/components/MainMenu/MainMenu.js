import React from "react"
//import { Link } from "gatsby"
import LocalizedLink from "../localizedLink"
import useTranslations from "../useTranslations"
import LanguagesSwitcher from "./LanguagesSwitcher"
//import NavLink from "./NavLink"
import * as style from "./_MainMenu.module.scss"

const MainMenu = () => {

    const { home,
            projects,
            contacts
            } = useTranslations()

  return (
    <nav className={style.mainMenu}>
        <div className={style.pages}>
            <LocalizedLink to="/">{home}</LocalizedLink>
            <LocalizedLink to="/projects">{projects}</LocalizedLink>
            <LocalizedLink to="/contacts">{contacts}</LocalizedLink>
        </div>
        <div>
            <LanguagesSwitcher />
        </div>
    </nav>
  )
}

export default MainMenu