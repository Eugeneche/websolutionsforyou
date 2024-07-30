import React from "react"
import useTranslations from "../components/useTranslations"
import * as styles from "../style/_style.module.scss"
//import ContactForm from "../components/ContactForm/ContactForm"

const Contacts = () => {

    const {
        contacts,
        write_to_email,
        call_phone
    } = useTranslations()
    
    return (
        <>
            <div className={styles.container}>
                <h1>{contacts}</h1>
                {/* <ContactForm /> */}
                <p className={styles.writeToEmail}>
                    {write_to_email}<br></br> <a href="mailto:dev.websolutionsforyou@gmail.com">dev.websolutionsforyou@gmail.com</a>
                </p>
                <p className={styles.callPhone}>
                    {call_phone}<br></br> <a href="tel:+420770671058">+420 770 671 058</a>
                </p>
            </div>          
        </>
    )
}

export default Contacts