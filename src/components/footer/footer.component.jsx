import React from 'react'
import './style.css'
import fadeImg from '../../images/footerfade.png'

export default function Footer() {
    return (
        <div className="footerContainer">
            <img className="footerFade" src={fadeImg} width={`100%`}></img>
            <div className="footerBody">
                &copy; ETP, the codeCrow
                &nbsp;&nbsp;<a href="https://www.linkedin.com/in/epacholski/" target="_blank" title="Linkedin" alt="Linkedin"><i class="fab fa-linkedin"></i></a>
                &nbsp;&nbsp;<a href="https://github.com/epachols" target="_blank" title="Github" alt="Github"><i class="fab fa-github"></i></a>
            </div>
        </div>
    )
}

