import React from "react";

export default function Phonetics(props) {
    return (
        <div>
            <a href={props.soundPhonetics.audio} target="_blank" rel="noreferrer">Listen</a>{" "}
            <br />
            <br />
            {props.soundPhonetics.text}
        </div>
    )
}