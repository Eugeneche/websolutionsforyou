import React from "react"
import useTranslations from "../components/useTranslations"
import * as styles from "../style/_style.module.scss"
import ContactForm from "../components/ContactForm/ContactForm"

const Contacts = () => {

    const {contacts} = useTranslations()
    
    return (
        <>
            <div className={styles.container}>
                <h1>{contacts}</h1>
                <ContactForm />
            </div>          
        </>
    )
}

export default Contacts