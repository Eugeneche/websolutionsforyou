import React from "react"
import useTranslations from "../components/useTranslations"
import * as styles from "../style/_style.module.scss"
import ContactForm from "../components/ContactForm/ContactForm"

const Contacts = () => {

    const {
        contacts,
        write_to_email
    } = useTranslations()
    
    return (
        <>
            <div className={styles.container}>
                <h1>{contacts}</h1>
                <ContactForm />
                <p className={styles.writeToEmail}>
                    {write_to_email} <a href="mailto:dev.websolutionsforyou@gmail.com">dev.websolutionsforyou@gmail.com</a>
                </p>
            </div>          
        </>
    )
}

export default Contacts