import React from "react";

export default function Meaning(props) {
    console.log(props.wordMeaning);
    return (
        <div>
            <h3>{props.wordMeaning.partOfSpeech}</h3>
            {props.wordMeaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>
                            {definition.definition}
                            <br />
                            <em>{definition.example}</em>
                        </p>
                    </div>
                )
            })}
            
            
        </div>
    )
}