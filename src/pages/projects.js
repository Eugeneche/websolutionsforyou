import React from "react"
import useTranslations from "../components/useTranslations"

const Projects = () => {

    const {projects} = useTranslations()

    return (
        <>
            <h1>{projects}</h1>
        </>
    )
}

export default Projects