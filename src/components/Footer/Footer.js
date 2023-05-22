import React from "react"
import * as styles from "./_Footer.module.scss"

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                © 2022 - {new Date().getFullYear()}
            </div>
        </footer>
    )

}

export default Footer