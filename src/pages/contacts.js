import React from "react"
import useTranslations from "../components/useTranslations"

const Contacts = () => {

    const {contacts} = useTranslations()
    
    return (
        <>
            <h1>{contacts}</h1>
        </>
    )
}

export default Contacts