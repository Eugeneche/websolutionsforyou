import React from "react"
import * as styles from "./_Footer.module.scss"

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div><span style={{fontWeight: 600, color: "#cbcbcb"}}>© {new Date().getFullYear()} </span> 
                    <span>Yevhen Chernomorets  </span>
                    <span style={{fontWeight: 600, color: "#8dffb5"}}>  IČO 21505977</span>
                </div>
            </div>
        </footer>
    )

}

export default Footer