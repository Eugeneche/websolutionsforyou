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
        <div className={style.header}>

            <div className={style.banner}>
                <div className={style.bannerContainer}>
                    <img className={style.fist} src={fist}></img>
                    <span className={style.call}>Stand with Ukraine! Help Ukraine defeat global evil!</span>
                    <a href="https://savelife.in.ua/en/donate-en/#donate-army-card-once" target="_blank" rel="noopener noreferrer">
                        <img className={style.fist} src={cba}></img>
                    </a>
                </div>
            </div>

            <div className={style.headerContainer}>
                <div className={style.name}>web<br></br>solutions<br></br>for you</div>
                <div className={style.hero}>{headerHero}</div>
                <div className={style.graph}><img src={graph}></img></div>
                <div className={style.progressbar}><img src={progressbar}></img></div>
                <div className={style.rounds}><img src={rounds}></img></div>
                {/* <StaticImage 
                    src="../../images/header_main_image.png" 
                    alt="web development"
                    layout="constrained"
                    height={600}
                    style={{margin: "20px"}} /> */}
            </div>
        </div>
    )
}

export default Header