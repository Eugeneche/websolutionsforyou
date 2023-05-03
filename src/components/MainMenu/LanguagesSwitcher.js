import React from "react"
import { Link } from "gatsby"
import * as styles from "./_MainMenu.module.scss"
import { LocaleContext } from "../layout"
//import LocalizedLink from "../localizedLink"
//import useTranslations from "../useTranslations"

const isBrowser = typeof window !== "undefined"

const LanguagesSwitcher = () => {
  //const { headerHero } = useTranslations()

  const locale = React.useContext(LocaleContext)

  if (!isBrowser) {
    return
  }

  const path = () => {
    if (window.location.pathname.match(`/${locale.locale}/`)) {
      return window.location.pathname.slice(3)
    } else { 
      return window.location.pathname
    }
  }

  return (
    <nav>
      <Link to={`${path()}`} hrefLang="en">
        English
      </Link>
      {` `}/{` `}
      <Link to={`/cs${path()}`} hrefLang="cs">
        Čeština
      </Link>
      {` `}/{` `}
      <Link to={`/uk${path()}`} hrefLang="uk">
        Українська
      </Link>
      {` `}/{` `}
      <Link to={`/ru${path()}`} hrefLang="ru">
        Русский
      </Link>
    </nav>
  )
}

export default LanguagesSwitcher