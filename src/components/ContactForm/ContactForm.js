import React, { useRef } from "react"
import emailjs from "@emailjs/browser"
import useTranslations from "../useTranslations"
//import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./_ContactForm.module.scss"


const ContactForm = () => {

    const { 
        your_name,
        your_message,
        your_email,
        your_phone,
        send,
        name,
        phone,
        email,
        message
     } = useTranslations()
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_fdvhv6g', 'template_rlcf1nr', form.current, '0zMiCaLJvSTuN8m-E')
            .then((result) => {
                console.log(result.text)
                console.log(form)
                form.current.reset() // <<<
        }, (error) => {
                console.log(error.text)
        })
    }

    return (
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
            <div className={styles.fields}>
                <label htmlFor="user_name">{name}</label>
                <input type="text" id="user_name" name="user_name" placeholder={your_name} required />
                <label htmlFor="user_phone">{phone}</label>
                <input type="tel" id="user_phone" name="user_phone" placeholder={your_phone}></input>
                <label htmlFor="user_email">{email}</label>
                <input type="email" id="user_email" name="user_email" placeholder={your_email} required />
                <label htmlFor="message">{message}</label>
                <textarea id="message" name="message" placeholder={your_message} required />
            </div>
            <div className={styles.submit}>
                <input type="submit" value={send} />
            </div>
        </form>
    )
}

export default ContactForm