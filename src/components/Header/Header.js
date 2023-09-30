import * as React from "react"
import useTranslations from "../useTranslations"
//import { StaticImage } from "gatsby-plugin-image"
import * as style from "./_Header.module.scss"

import graph from "../../images/graphs.gif"
import progressbar from "../../images/progressbar.gif"
import rounds from "../../images/rounds.gif"

import fist from "../../images/fist.png"
import cba from "../../images/new-logo-en.svg"

const Header = () => {

    const { headerHero } = useTranslations()

    return (
        <>
    
            <div className={style.banner}>
                <div className={style.bannerContainer}>
                    <img className={style.fist} src={fist} alt="fist for support for Ukraine"></img>
                    <span className={style.call}>Stand&nbsp;with&nbsp;Ukraine! Help&nbsp;Ukraine&nbsp;defeat&nbsp;global&nbsp;evil!</span>
                    <a href="https://savelife.in.ua/en/donate-en/#donate-army-card-once" target="_blank" rel="noopener noreferrer">
                        <img className={style.cbaLogo} src={cba} alt="come back alive fund's logo"></img>
                    </a>
                </div>
            </div>

            <div className={style.header}>
                <div className={style.headerContainer}>
                    <div className={style.name}>web<br></br>solutions<br></br>for you</div>
                    <h1 className={style.hero}>{headerHero}</h1>
                    <div className={style.graph}><img src={graph} alt="graphs gif"></img></div>
                    <div className={style.progressbar}><img src={progressbar} alt="progressbar gif"></img></div>
                    <div className={style.rounds}><img src={rounds} alt="rolling rounds gif"></img></div>
                </div>
            </div>
        </>
    )
}

export default Header