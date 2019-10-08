import React from "react"
import beard from "../images/beard.png"
import nike from "../images/nike.png"
export default function Projects(){
    return(
        <section id="projects" className="projects">
            <h1>Projects</h1>
            <div className="grid-projects">
                <div>
                <img src={beard} alt="beardnhaircuts"/>             
                    <div className="after">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/olarmarian/beardnhaircuts-react-js" ><i className="fab fa-github"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://beardnhaircuts.netlify.com/"><i className="fas fa-external-link-square-alt"/></a>
                    </div>
                </div>
                <div>
                    <img src={nike} alt="nike clone"/>
                    <div className="after">
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/olarmarian/Nike-clone---vanilla-javascript"><i className="fab fa-github"/></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://nike-clone-vanilla-javascript.netlify.com/" ><i className="fas fa-external-link-square-alt"/></a>
                    </div>
                </div>
            </div>
        </section>
    )
}