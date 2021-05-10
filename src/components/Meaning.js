import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    console.log(props.wordMeaning);
    return (
        <div>
            <h3>{props.wordMeaning.partOfSpeech}</h3>
            {props.wordMeaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <p>
                            <strong>Definition: </strong>
                            {definition.definition}
                            <br />
                            <strong>Example: </strong>
                            <em>{definition.example}</em>
                            <br />
                            <Synonyms wordSynonyms={definition.synonyms} />
                        </p>
                    </div>
                )
            })}
            
            
        </div>
    )
}