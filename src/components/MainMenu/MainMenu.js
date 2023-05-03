import React from "react"
import { Link } from "gatsby"
import LocalizedLink from "../localizedLink"
import useTranslations from "../useTranslations"
import LanguagesSwitcher from "./LanguagesSwitcher"

const MainMenu = () => {

    const { home,
            projects,
            contacts
            } = useTranslations()

  return (
    <nav>
        <div>
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