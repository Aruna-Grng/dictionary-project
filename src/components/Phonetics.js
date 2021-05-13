import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
    return (
        <div className="Phonetics">
            <a href={props.soundPhonetics.audio} target="_blank" rel="noreferrer">Listen</a>
            <span className="text">{props.soundPhonetics.text}</span>
        </div>
    )
}