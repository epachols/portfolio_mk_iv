import React from 'react'
import "./style.css"
export default function ContactButton(props) {


    return (
            <>
            <a className="contactBtn" href={props.link} target="_blank" rel="noopener noreferrer"><i className={props.icon}></i></a>
        </>
    )
}
