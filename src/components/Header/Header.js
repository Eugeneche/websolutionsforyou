import * as React from "react"
//import { StaticImage } from "gatsby-plugin-image"
import * as style from "./_Header.module.scss"

const Header = () => {

    return (
        <div className={style.header}>
            <div className={style.headerContainer}>
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